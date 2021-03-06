﻿CREATE TABLE [dbo].[SEO_ProductOptimization](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CompanyId] [int] NULL,
	[ExternalProductId] [nvarchar](50) NULL,
	[ProductNumber] [nvarchar](15) NULL,
	[ProductName] [nvarchar](100) NULL,
	[ProductStatusID] [int] NOT NULL,
	[OptimizedDescription] [nvarchar](800) NULL,
	[OptimizedSummary] [nvarchar](130) NULL,
	[Categories] [nvarchar](1000) NULL,
	[Keywords] [nvarchar](1000) NULL,
	[Themes] [nvarchar](1000) NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [nvarchar](15) NULL,
	[UpdatedOn] [datetime] NULL,
	[UpdatedBy] [nvarchar](15) NULL,
 CONSTRAINT [PK_SEO_ProductOptimization] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[SEO_ProductOptimization]  WITH CHECK ADD  CONSTRAINT [FK_SEO_ProductOptimization_SEO_ProductStatus] FOREIGN KEY([ProductStatusID])
REFERENCES [dbo].[SEO_ProductStatus] ([ID])
GO

ALTER TABLE [dbo].[SEO_ProductOptimization] CHECK CONSTRAINT [FK_SEO_ProductOptimization_SEO_ProductStatus]
GO