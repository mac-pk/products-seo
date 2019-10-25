CREATE PROCEDURE [dbo].[Seo.Product.Create]
	@ExternalProductId varchar(20),
	@CompanyId int,
	@ProductNumber varchar(15),
	@ProductName varchar(max),
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

INSERT INTO [dbo].[SEO_ProductStatus]
           ([CompanyId]
           ,[ExternalProductId]
           ,[ProductStatus]
           ,[CreatedOn]
           ,[CreatedBy]
           ,[UpdatedOn]
           ,[UpdatedBy])
     VALUES
           (@CompanyId
           ,@ExternalProductId
           ,@ProductStatus
           ,GETDATE()
           ,@UpdatedBy
           ,GETDATE()
           ,@UpdatedBy)

SELECT @ProductStatusId = CAST(SCOPE_IDENTITY() as int)

INSERT INTO [dbo].[SEO_ProductOptimization]
           ([CompanyId]
           ,[ExternalProductId]
           ,[ProductNumber]
           ,[ProductName]
           ,[ProductStatusID]
           ,[OptimizedDescription]
           ,[OptimizedSummary]
		   ,[Categories]
           ,[Keywords]
           ,[Themes]
           ,[CreatedOn]
           ,[CreatedBy])
     VALUES
           (@CompanyId
           ,@ExternalProductId
           ,@ProductNumber
           ,@ProductName
           ,@ProductStatusId
           ,@OptimizedDescription
           ,@OptimizedSummary
		   ,@Categories
           ,@Keywords
           ,@Themes
           ,GETDATE()
           ,@UpdatedBy)

SELECT CAST(SCOPE_IDENTITY() as int)
END