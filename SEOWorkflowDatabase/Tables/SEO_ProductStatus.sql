CREATE TABLE [dbo].[SEO_ProductStatus](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CompanyId] [int] NULL,
	[ExternalProductId] [nvarchar](50) NULL,
	[ProductStatus] [nvarchar](20) NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [nvarchar](15) NULL,
	[UpdatedOn] [datetime] NULL,
	[UpdatedBy] [nvarchar](15) NULL,
 CONSTRAINT [PK_SEO_ProductStatus] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO