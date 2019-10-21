import { IProductKeywords } from './IProductKeywords';
import { ProductCategory } from './ProductCategory';

export class OptimizeProduct {
    constructor(
        id: number,
        externalProductId: string,
        companyId: number,
        name: string,
        description: string,
        summary: string,
        seoStatus: string,
        primaryImageURL: string,
        asiProdNo: string,       
    ) {
        this.ID = id;
        this.ExternalProductId = externalProductId;
        this.CompanyId = companyId;
        this.Name = name;
        this.Description = description;
        this.Summary = summary;
        this.SEOStatus = seoStatus;
        this.PrimaryImageURL = primaryImageURL;
        this.AsiProdNo = asiProdNo;
    };

    ID: number;
    ExternalProductId: string;
    CompanyId: number;
    Name: string;
    Description: string;
    Summary: string;
    ProductThemes: string[] = [];
    ProductKeywords: IProductKeywords[];
    ProductCategories: ProductCategory[];
    SeoKeywords: string[] = [];
    SEOStatus: string;
    PrimaryImageURL: string;
    AsiProdNo: string;
}