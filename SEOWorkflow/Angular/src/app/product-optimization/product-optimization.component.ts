import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../seo.service';
import { OptimizeProduct } from '../shared/models/optimizeProduct/OptimizeProduct';
import { ProductCategory } from '../shared/models/optimizeProduct/ProductCategory';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductCategoryModalComponent } from '../modals/product-category-modal/product-category-modal.component';
import { CategoryService } from '../shared/services/category.service';
import { IProductKeywords } from '../shared/models/optimizeProduct/IProductKeywords';
import { SupplierService } from '../shared/services/supplier.service';
import { ISupplier } from '../shared/models/searchSuppliers/ISearchSuppliers';
import { ClearAllModalComponent } from '../modals/clear-all-modal/clear-all-modal.component';
import { EnumSeoStatus } from '../shared/models/searchProduct/EnumSeoStatus';
import { EnumKeywordType } from '../shared/models/optimizeProduct/EnumKeywordType';
import { EnumCategoryType } from '../shared/models/optimizeProduct/EnumCategoryType';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { SaveProductModalComponent } from '../modals/save-product-modal/save-product-modal.component';


@Component({
  selector: 'app-product-optimization',
  templateUrl: './product-optimization.component.html',
  styleUrls: ['./product-optimization.component.css']
})
export class ProductOptimizationComponent implements OnInit {
  isLoading: boolean;
  externalProductId: string;
  currentProduct: OptimizeProduct;
  seoProduct: OptimizeProduct;
  originalSeoProduct: OptimizeProduct;
  seoStausEnum = EnumSeoStatus;
  supplier: ISupplier;
  productKeywords: string;
  seoKeywords: string;
  adKeywords: string;
  seoKeyword: string;
  searchTheme: string;
  themeSearchFilter: string = "Start With";
  hasSeoProductData: boolean;
  hasProductThemes: boolean;
  hasNextProduct: boolean;
  hasPreviousProduct: boolean;
  isNextOrPreviousClick: boolean;
  hasSavedSuccessfully: boolean;

  allExternalProductIds: string[] = [];
  productCategories: ProductCategory[] = [];
  selectedCategories: ProductCategory[] = [];
  themes: string[] = [];

  constructor(
    private seoService: SeoService,
    private router: Router,
    private modalService: NgbModal,
    public categoryService: CategoryService,
    private supplierService: SupplierService) { }

  ngOnInit() {
    this.getAllCategories();
    this.getAllThemes();
    this.supplier = this.supplierService.getSupplier();
    this.populateProductsData();
  }

  populateProductsData() {
    this.InitializeProductsData();
    this.allExternalProductIds = JSON.parse(localStorage.getItem('allExternalProductIds'));

    if (!this.isNextOrPreviousClick) {
      this.externalProductId = localStorage.getItem('selectedExternalProductId');
      let currentIndex = this.allExternalProductIds.indexOf(this.externalProductId);
      this.hasNextOrPreviousProduct(currentIndex);
    }

    this.isLoading = true;
    this.getSeoProduct(this.externalProductId);
    this.getCurrentProduct(this.externalProductId);
  }

  saveSeoProduct(isSave: boolean) {
    this.isLoading = true;

    if (!isSave) {
      this.seoProduct.SEOStatus = this.seoStausEnum.SEOD;
    }

    this.seoService.saveSeoProduct(this.seoProduct, this.IsNewProduct()).subscribe(productId => {
      this.hasSavedSuccessfully = false;

      if (productId > 0) {
        this.hasSavedSuccessfully = true;
        this.isLoading = false;
        this.seoProduct.ID = productId;
        this.createOriginalSeoProduct();
      }
    });
  }

  InitializeProductsData() {
    this.themeSearchFilter = "Start With";
    this.seoProduct = new OptimizeProduct(0, "", 0, "", "", "", "", "", "");
    this.currentProduct = new OptimizeProduct(0, "", 0, "", "", "", "", "", "");
  }

  getSeoProduct(externalProductId: string) {
    this.seoService.getSeoProduct(externalProductId).subscribe(product => {

      if (product) {
        if ("ProductThemes" in product) {
          this.hasProductThemes = true;
        }

        this.hasSeoProductData = true;
        this.seoProduct = product;
        this.loadSeoProduct();
      }
      else {
        this.categoryService.setCategories(null);
        this.hasSeoProductData = false;
      }
    });
  }

  getCurrentProduct(externalProductId: string) {
    this.seoService.getCurrentProduct(externalProductId, this.supplier.CompanyId).subscribe(product => {
      if (product) {
        this.currentProduct = product;

        if ("ProductThemes" in product) {
          this.hasProductThemes = true;
        }

        if (!this.hasSeoProductData) {
          this.currentProduct.SEOStatus = this.seoStausEnum.REDY;
          this.seoProduct = new OptimizeProduct(product.ID, product.ExternalProductId, product.CompanyId, product.Name, product.Description, product.Summary, product.SEOStatus, product.PrimaryImageURL, product.AsiProdNo);
          this.seoProduct.ProductCategories = this.currentProduct.ProductCategories;
          this.loadSeoProduct();
        }
        else {
          this.currentProduct.SEOStatus = this.seoStausEnum.IPRS;
        }

        this.loadProductCategories(this.currentProduct);
        this.loadAllProductKeywords(product.ProductKeywords);
        this.isLoading = false;
      }
    });
  }

  loadSeoProduct() {
    if (this.seoProduct.SeoKeywords.toString() == '') {
      this.seoProduct.SeoKeywords = [];
    }
    if (this.seoProduct.ProductThemes == null) {
      this.seoProduct.ProductThemes = [];
    }
    if (!this.hasSeoProductData) {
      this.seoProduct.SeoKeywords = this.currentProduct.ProductKeywords.filter(function (keyword) {
        return keyword.Type == EnumKeywordType.SEO;
      }).map((keywords) => keywords.Value);
    }

    this.loadProductCategories(this.seoProduct);

    if ((this.productCategories.length > 0) && (this.seoProduct.ProductCategories) && (this.seoProduct.ProductCategories.length > 0)) {
      this.seoProduct.ProductCategories = this.seoProduct.ProductCategories.filter(function (category) {
        return category.Type !== EnumCategoryType.AD;
      });

      for (var i = 0; i < this.seoProduct.ProductCategories.length; i++) {
        let selectedProductCategory = this.seoProduct.ProductCategories[i];
        let index = this.productCategories.findIndex(x => x.Value.toUpperCase() == selectedProductCategory.Value.toUpperCase());
        let productCategory = this.productCategories[index];

        productCategory.IsSelected = true;
        productCategory.Type = selectedProductCategory.Type;
      }

      this.categoryService.setCategories(this.seoProduct.ProductCategories);
    }

    this.createOriginalSeoProduct();
  }

  createOriginalSeoProduct() {
    this.originalSeoProduct = new OptimizeProduct(this.seoProduct.ID, this.seoProduct.ExternalProductId, this.seoProduct.CompanyId, this.seoProduct.Name, this.seoProduct.Description, this.seoProduct.Summary, this.seoProduct.SEOStatus, this.seoProduct.PrimaryImageURL, this.seoProduct.AsiProdNo);
    this.originalSeoProduct.ProductCategories = Object.assign([], this.seoProduct.ProductCategories);
    this.originalSeoProduct.SeoKeywords = Object.assign([], this.seoProduct.SeoKeywords);
    this.originalSeoProduct.ProductThemes = Object.assign([], this.seoProduct.ProductThemes);
  }

  getProductsData(isNextProduct: boolean) {
    if (this.isSeoProductModified()) {
      this.openCanSaveProduct(isNextProduct);
    }
    else {
      this.getNextOrPreviousProduct(isNextProduct);
    }
  }

  getNextOrPreviousProduct(isNextProduct: boolean) {
    let currentIndex = this.allExternalProductIds.indexOf(this.externalProductId);

    if (isNextProduct) {
      this.hasNextOrPreviousProduct(currentIndex + 1);
      this.externalProductId = this.allExternalProductIds[currentIndex + 1];
    }
    else {
      this.hasNextOrPreviousProduct(currentIndex - 1);
      this.externalProductId = this.allExternalProductIds[currentIndex - 1];
    }

    localStorage.setItem('selectedExternalProductId', this.externalProductId);
    this.populateProductsData();
    this.router.navigate(['/optimizeProduct']);
  }

  hasNextOrPreviousProduct(index: number) {
    this.hasPreviousProduct = false;
    this.hasNextProduct = false;
    this.isNextOrPreviousClick = true;

    if (this.allExternalProductIds[index - 1]) {
      this.hasPreviousProduct = true;
    }

    if (this.allExternalProductIds[index + 1]) {
      this.hasNextProduct = true;
    }
  }

  openCanSaveProduct(isNextProduct: boolean) {
    let options: NgbModalOptions = { backdrop: 'static', size: 'lg', scrollable: true, centered: true };
    const canSaveProductModal = this.modalService.open(SaveProductModalComponent, options);

    canSaveProductModal.result.then((canSave) => {
      if (canSave) {
        this.saveSeoProduct(true);
      }

      this.getNextOrPreviousProduct(isNextProduct);
    }).catch(error => {
      canSaveProductModal.dismiss();
    });
  }

  isSeoProductModified(): boolean {
    let result: boolean = false;

    if (!((this.seoProduct == null) || (this.originalSeoProduct == null))) {
      result = !(
        (this.seoProduct.Description === this.originalSeoProduct.Description) &&
        (this.seoProduct.Summary === this.originalSeoProduct.Summary) &&
        (this.seoProduct.SEOStatus === this.originalSeoProduct.SEOStatus) &&
        this.categoryObjectsAreSame(this.originalSeoProduct.ProductCategories, this.sortProductCategories(this.seoProduct.ProductCategories)) &&
        (this.seoProduct.SeoKeywords.toString() === this.originalSeoProduct.SeoKeywords.toString()) &&
        (this.seoProduct.ProductThemes.toString() === this.originalSeoProduct.ProductThemes.toString())
      );
    }

    return result;
  }

  loadProductCategories(product: OptimizeProduct) {
    if ((product.ProductCategories) && (product.ProductCategories.length > 0)) {
      product.ProductCategories = this.sortProductCategories(product.ProductCategories);
    }
  }

  sortProductCategories(productCategories: ProductCategory[]) {
    return productCategories.sort(function (a, b) {
      var aType = a.Type;
      var bType = b.Type;
      var aValue = a.Value;
      var bValue = b.Value;

      if (aType == bType) {
        return (aValue < bValue) ? -1 : (aValue > bValue) ? 1 : 0;
      }
      else {
        return (bType < aType) ? -1 : 1;
      }
    });
  }

  loadAllProductKeywords(keywords: IProductKeywords[]) {
    this.productKeywords = null;
    this.seoKeywords = null;
    this.adKeywords = null;

    if (keywords.length > 0) {
      this.productKeywords = keywords.filter(function (keyword) {
        return keyword.Type == EnumKeywordType.PRODUCT;
      }).map((keywords) => keywords.Value).toString();

      this.seoKeywords = keywords.filter(function (keyword) {
        return keyword.Type == EnumKeywordType.SEO;
      }).map((keywords) => keywords.Value).toString();

      this.adKeywords = keywords.filter(function (keyword) {
        return keyword.Type == EnumKeywordType.AD;
      }).map((keywords) => keywords.Value).toString();
    }
  }

  categoryObjectsAreSame(x, y) {
    let objectsAreSame = true;

    if (x.length === y.length) {
      for (var propertyName in x) {
        if ((x[propertyName].Value.toUpperCase() !== y[propertyName].Value.toUpperCase()) &&
          (x[propertyName].Type !== y[propertyName].Type)) {
          objectsAreSame = false;
          break;
        }
      }
    }
    else {
      objectsAreSame = false;
    }

    return objectsAreSame;
  }

  getAllCategories() {
    this.seoService.getAllCategories().subscribe(categories => {
      if (categories) {
        this.productCategories = categories.categories.map((category) => new ProductCategory(category));
      }
    });
  }

  getAllThemes() {
    this.seoService.getAllThemes().subscribe(response => {
      if (response) {
        this.themes = response.themes;
      }
    });
  }

  openProductCategories() {
    let options: NgbModalOptions = { backdrop: 'static', size: 'lg', scrollable: true, centered: true };
    const productCategoryModal = this.modalService.open(ProductCategoryModalComponent, options);

    productCategoryModal.componentInstance.inputProductCategories = this.productCategories;
    productCategoryModal.result.then((result) => {
      if (result === 'success') {
        this.seoProduct.ProductCategories = this.sortProductCategories(this.categoryService.getCategories());
      }
    }).catch(error => {
      productCategoryModal.dismiss();
    });
  }

  removeCategory(categoryCode: string) {
    this.selectedCategories = this.categoryService.getCategories();

    if (this.selectedCategories.find(x => x.Value == categoryCode)) {
      let selectedCategoryIndex = this.selectedCategories.findIndex(x => x.Value == categoryCode);

      this.selectedCategories.splice(selectedCategoryIndex, 1);

      if (this.productCategories.find(x => x.Value == categoryCode.toUpperCase())) {
        let categoryIndex = this.productCategories.findIndex(x => x.Value.toUpperCase() == categoryCode.toUpperCase());
        this.productCategories[categoryIndex].IsSelected = false;
      }

      this.categoryService.setCategories(this.selectedCategories);
    }
  }

  cancelItem(theme: string, isKeyword: boolean) {
    if (isKeyword) {
      for (var i = 0; i < this.seoProduct.SeoKeywords.length; i++) {
        if (this.seoProduct.SeoKeywords[i] === theme) {
          this.seoProduct.SeoKeywords.splice(i, 1);
          i--;
        }
      }
    } else {
      for (var i = 0; i < this.seoProduct.ProductThemes.length; i++) {
        if (this.seoProduct.ProductThemes[i] === theme) {
          this.seoProduct.ProductThemes.splice(i, 1);
          i--;
        }
      }
    }
  }

  enterKeyword(seoKewords: string) {
    let seoKeywordArray = seoKewords.split(',');

    if (this.seoProduct.SeoKeywords.toString() == '') {
      this.seoProduct.SeoKeywords = [];
    }

    seoKeywordArray.forEach((keyword) => (this.seoProduct.SeoKeywords.push(keyword)));
    this.seoKeyword = "";
  }

  openClearAll(isClearKeyword: boolean) {
    let options: NgbModalOptions = { backdrop: 'static', size: 'lg', scrollable: true, centered: true };
    const clearAllModal = this.modalService.open(ClearAllModalComponent, options);
    const themeTitle = "Delete All Themes";
    const keywordTitle = "Delete All Keywords";
    const themeMessage = "Do you want to delete all themes?";
    const keywordMessage = "Do you wish to delete all SEO keywords?";

    if (isClearKeyword) {
      clearAllModal.componentInstance.title = keywordTitle;
      clearAllModal.componentInstance.message = keywordMessage;
    } else {
      clearAllModal.componentInstance.title = themeTitle;
      clearAllModal.componentInstance.message = themeMessage;
    }

    clearAllModal.result.then((result) => {
      if (result === 'clear') {
        if (isClearKeyword) {
          this.seoProduct.SeoKeywords = [];
        } else {
          this.seoProduct.ProductThemes = [];
        }
      }
    }).catch(error => {
      clearAllModal.dismiss();
    });
  }

  onSeoFieldClick() {
    if (this.seoProduct.SEOStatus === this.seoStausEnum.REDY) {
      this.seoProduct.SEOStatus = this.seoStausEnum.IPRS;
    }
  }

  IsNewProduct(): boolean {
    return (this.seoProduct.ID == null);
  }

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(theme => theme === '' ? []
        : this.themeSearchFilter == 'Start With' ? this.themes.filter(v => v.toLowerCase().startsWith(theme.toLowerCase())).slice(0, 10) :
          this.themes.filter(v => v.toLowerCase().indexOf(theme.toLowerCase()) > -1).slice(0, 10))
    );

  themeSelected($event) {
    if (!this.seoProduct.ProductThemes) {
      this.seoProduct.ProductThemes = [];
    }
    this.seoProduct.ProductThemes.push($event.item);
  }
}
