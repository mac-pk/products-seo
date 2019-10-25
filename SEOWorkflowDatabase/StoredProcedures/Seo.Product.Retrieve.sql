CREATE PROCEDURE [dbo].[Seo.Product.Retrieve]
	@ExternalProductId varchar(20)
AS

BEGIN

SELECT po.[ID]
      ,po.[CompanyId]
      ,po.[ExternalProductId]
      ,[ProductNumber] as AsiProdNo
      ,[ProductName] as Name
      ,[OptimizedDescription] as Description
      ,[OptimizedSummary] as Summary
	  ,[ProductStatus] as SEOStatus
	  ,[Categories]
	  ,[Themes]
      ,[Keywords]
  FROM [dbo].[SEO_ProductOptimization] po WITH(NOLOCK)
  INNER JOIN [dbo].[SEO_ProductStatus] ps WITH(NOLOCK)  on po.ProductStatusID = ps.ID
  WHERE po.[ExternalProductId] = @ExternalProductId

END