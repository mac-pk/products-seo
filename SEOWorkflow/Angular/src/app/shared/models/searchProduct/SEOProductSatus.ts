export class SEOProductSatus {
    
    constructor(product: any) {
        this.ID = product.ID;
        this.CompanyId = product.CompanyId;
        this.ExternalProductId = product.ExternalProductId;
        this.ProductStatus = product.ProductStatus;
        this.CreatedOn = product.CreatedOn;
        this.CreatedBy = product.CreatedBy;
        this.UpdatedOn = product.UpdatedOn;
        this.UpdatedBy = product.UpdatedBy;
    };

    ID: number;
    CompanyId: number;
    ExternalProductId: string;
    ProductStatus: string;
    CreatedOn: string;
    CreatedBy: string;
    UpdatedOn: string;
    UpdatedBy: string;
}