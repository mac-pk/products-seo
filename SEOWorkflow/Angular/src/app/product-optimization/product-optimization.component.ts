import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../seo.service';
import { OptimizeProduct } from '../shared/models/optimizeProduct/OptimizeProduct';
import { ProductCategory } from '../shared/models/optimizeProduct/ProductCategory';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductCategoryModalComponent } from '../modals/product-category-modal/product-category-modal.component';
import { CategoryService } from '../shared/services/category.service';
import { IProductKeywords } from '../shared/models/optimizeProduct/IProductKeywords';
import { SearchProduct } from '../shared/models/searchProduct/SearchProduct';
import { SupplierService } from '../shared/services/supplier.service';
import { ISupplier } from '../shared/models/searchSuppliers/ISearchSuppliers';
import { ClearAllModalComponent } from '../modals/clear-all-modal/clear-all-modal.component';
import { EnumSeoStatus } from '../shared/models/searchProduct/EnumSeoStatus';
import { EnumKeywordType } from '../shared/models/optimizeProduct/EnumKeywordType';
import { EnumCategoryType } from '../shared/models/optimizeProduct/EnumCategoryType';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


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


  allExternalProductIds: string[] = [];
  productCategories: ProductCategory[] = [];
  selectedCategories: ProductCategory[] = [];
  searchProducts: SearchProduct[] = [];
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
    this.searchProducts = JSON.parse(localStorage.getItem('searchProducts')).map((products) => new SearchProduct(products));

    this.allExternalProductIds = this.searchProducts.map((product) => product.ExternalProductId).toString().split(',');

    if (!this.isNextOrPreviousClick) {
      this.externalProductId = localStorage.getItem('selectedExternalProductId');

      let currentIndex = this.allExternalProductIds.indexOf(this.externalProductId);

      this.hasNextOrPreviousProduct(currentIndex);
    }

    this.isLoading = true;
    this.getSeoProduct(this.externalProductId);
    this.getCurrentProduct(this.externalProductId);
  }

  InitializeProductsData() {
    this.seoProduct = new OptimizeProduct("", 0, "", "", "");
    this.currentProduct = new OptimizeProduct("", 0, "", "", "");
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
        let filteredProduct = this.searchProducts.filter(function (product) {
          return product.ExternalProductId == externalProductId;
        });

        if ("ProductThemes" in product) {
          this.hasProductThemes = true;
        }

        product.PrimaryImageUrl = filteredProduct[0].PrimaryImageUrl;
        this.currentProduct = product;

        if (!this.hasSeoProductData) {
          this.currentProduct.SEOStatus = this.seoStausEnum.REDY;
          this.seoProduct = new OptimizeProduct(product.ExternalProductId, product.CompanyId, product.Name, product.Description, product.Summary);
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
    if (!this.hasSeoProductData) {
      this.seoProduct.SeoKeywords = this.currentProduct.ProductKeywords.filter(function (keyword) {
        return keyword.Type == EnumKeywordType.SEO;
      }).map((keywords) => keywords.Value);
    }

    this.loadProductCategories(this.seoProduct);

    if (this.seoProduct.ProductCategories.length > 0) {
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
  }

  loadProductCategories(product: OptimizeProduct) {
    if (product.ProductCategories.length > 0) {
      product.ProductCategories = product.ProductCategories.sort(function (a, b) {
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
        this.seoProduct.ProductCategories = this.categoryService.getCategories();
      }
    }).catch(exc => { });
  }

  removeCategory(categoryCode: string) {
    this.selectedCategories = this.categoryService.getCategories();

    if (this.selectedCategories.find(x => x.Value == categoryCode)) {
      let selectedCategoryIndex = this.selectedCategories.findIndex(x => x.Value == categoryCode);

      this.selectedCategories.splice(selectedCategoryIndex, 1);

      if (this.productCategories.find(x => x.Value == categoryCode)) {
        let categoryIndex = this.productCategories.findIndex(x => x.Value == categoryCode);
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
    }).catch(exc => { });
  }

  //https://stackoverflow.com/questions/40503667/how-to-show-a-loader-for-3-sec-and-hide-in-angular-2
  //http://jsfiddle.net/SUBnz/1/
  //for implementing save successfully blur message
  saveSeoProduct() {
    this.isLoading = true;
    this.seoService.saveSeoProduct(this.seoProduct, !this.hasSeoProductData).subscribe(saved => {
      if (saved) {
        this.isLoading = false;
      }
    });
  }

  onClick() {
    this.currentProduct.SEOStatus = this.seoStausEnum.IPRS;
  }

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(theme => theme === '' ? []
        : this.themeSearchFilter == 'Start With' ? this.themes.filter(v => v.toLowerCase().startsWith(theme.toLowerCase())).slice(0, 10) :
          this.themes.filter(v => v.toLowerCase().indexOf(theme.toLowerCase()) > -1).slice(0, 10))
    )

  themeSelected($event) {
    this.seoProduct.ProductThemes.push($event.item);
  }
}
