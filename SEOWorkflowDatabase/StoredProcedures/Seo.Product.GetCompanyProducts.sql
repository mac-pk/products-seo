CREATE PROCEDURE [dbo].[Seo.Product.GetCompanyProducts]
	@CompanyId int
AS
BEGIN
SELECT
	ID,
	CompanyId,
	ExternalProductId,
	ProductStatus,
	CreatedOn,
	CreatedBy,
	UpdatedOn,
	UpdatedBy
FROM SEO_ProductStatus ps
WHERE ps.CompanyId = @CompanyId
END
