import { IProductKeywords } from './IProductKeywords';
import { ProductCategory } from './ProductCategory';

export class OptimizeProduct {
    constructor(
        externalProductId: string,
        companyId: number,
        name: string,
        description: string,
        summary: string,
        primaryImageURL: string
        ) {
        this.ExternalProductId = externalProductId;
        this.CompanyId = companyId;
        this.Name = name;
        this.Description = description;
        this.Summary = summary;
        this.PrimaryImageURL = primaryImageURL; 
    };
    
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