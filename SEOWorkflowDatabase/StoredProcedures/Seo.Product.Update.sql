CREATE PROCEDURE [dbo].[Seo.Product.Update]
	@ExternalProductId varchar(20),
	@ProductStatus varchar(4),
	@OptimizedDescription varchar(max),
	@OptimizedSummary varchar(max),
	@Categories varchar(max),
	@Keywords varchar(max),
	@Themes varchar(max),
	@UpdatedBy varchar(50)
AS

BEGIN

DECLARE @ProductStatusId int = 0 

	UPDATE 
		[dbo].[SEO_ProductOptimization]
    SET 
		[OptimizedDescription] = @OptimizedDescription
	   ,[OptimizedSummary] = @OptimizedSummary
	   ,[Categories] = @Categories
	   ,[Keywords] = @Keywords
	   ,[Themes] = @Themes
	WHERE 
		[ExternalProductId] = @ExternalProductId

	UPDATE 
		[dbo].[SEO_ProductStatus]
	   SET 
		[ProductStatus] = @ProductStatus
	   ,[UpdatedOn] = GetDate()
	   ,[UpdatedBy] = @UpdatedBy
	 WHERE 
		[ExternalProductId] = @ExternalProductId

	SELECT 
		po.ID
	FROM [dbo].[SEO_ProductOptimization] po WITH(NOLOCK)
	 WHERE 
		[ExternalProductId] = @ExternalProductId		
END