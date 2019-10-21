using Dapper;
using log4net;
using SEOWorkflowDomain;
using System;
using System.Data;
using System.Linq;

namespace SEOWorkflowDataAccess
{
    public class SeoRepository : ISeoRepository
    {
        #region fields

        private static readonly ILog Log = LogManager.GetLogger(typeof(SeoRepository));
        private readonly SeoDataConnection _seoDataConnection;

        #endregion

        #region constructor

        public SeoRepository(SeoDataConnection seoDataConnection)
        {
            _seoDataConnection = seoDataConnection;
        }

        #endregion

        #region methods

        public Product GetSeoProduct(string externalProductId)
        {
            var param = new DynamicParameters();
            Product product = null;

            param.Add("ExternalProductId", externalProductId);

            using (var connection = _seoDataConnection.CreateSeoDataConnection())
            {
                try
                {
                    connection.Open();
                    product = connection.Query<Product>("[dbo].[Seo.Product.Retrieve]", param, null, true, 0, CommandType.StoredProcedure).FirstOrDefault();
                }
                catch (Exception ex)
                {
                    Log.Error("An error occurred retreiving product", ex);
                    throw;
                }
            }

            return product;
        }

        public int SaveSeoProduct(Product product, bool isNewProduct)
        {
            var param = new DynamicParameters();
            var spName = string.Empty;
            var productId = 0;

            if (isNewProduct)
            {
                param.Add("CompanyId", product.CompanyId);
                param.Add("ProductNumber", product.AsiProdNo);
                param.Add("ProductName", product.Name);

                spName = "[dbo].[Seo.Product.Create]";
            }
            else
            {
                spName = "[dbo].[Seo.Product.Update]";
            }

            param.Add("ExternalProductId", product.ExternalProductId);
            param.Add("ProductStatus", product.SEOStatus);
            param.Add("OptimizedDescription", product.Description);
            param.Add("OptimizedSummary", product.Summary);
            param.Add("Categories", product.Categories);
            param.Add("Keywords", product.Keywords);
            param.Add("Themes", product.Themes);
            param.Add("UpdatedBy", "NoumanQureshi");


            using (var connection = _seoDataConnection.CreateSeoDataConnection())
            {
                try
                {
                    connection.Open();
                    productId = connection.ExecuteScalar<int>(spName, param, null, 0, CommandType.StoredProcedure);
                }
                catch (Exception ex)
                {
                    Log.Error("An error occurred saving product", ex);
                    throw;
                }
            }

            return productId;
        }

        #endregion
    }
}
