using Dapper;
using log4net;
using SEOWorkflowDomain;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace SEOWorkflowDataAccess
{
    public class ProductRepository : IProductRepository
    {
        #region fields

        private static readonly ILog Log = LogManager.GetLogger(typeof(ProductRepository));
        private readonly SeoDataConnection _seoDataConnection;

        #endregion

        #region constructor

        public ProductRepository(SeoDataConnection seoDataConnection)
        {
            _seoDataConnection = seoDataConnection;
        }

        #endregion

        #region methods

        public async Task<Product> GetSeoProductAsync(string externalProductId)
        {
            var param = new DynamicParameters();
            Product product = null;

            param.Add("ExternalProductId", externalProductId);

            using (var connection = _seoDataConnection.CreateSeoDataConnection())
            {
                try
                {
                    connection.Open();
                    product = (await connection.QueryAsync<Product>("[dbo].[Seo.Product.Retrieve]", param, null, Constants.DefaultCommandTimeout, CommandType.StoredProcedure).ConfigureAwait(false)).FirstOrDefault();
                }
                catch (Exception ex)
                {
                    Log.Error("An error occurred retreiving product", ex);
                    throw;
                }
            }

            return product;
        }

        public async Task<int> SaveSeoProductAsync(Product product, bool isNewProduct)
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
                    productId = await connection.ExecuteScalarAsync<int>(spName, param, null, 0, CommandType.StoredProcedure).ConfigureAwait(false);
                }
                catch (Exception ex)
                {
                    Log.Error("An error occurred saving product", ex);
                    throw;
                }
            }

            return productId;
        }

        public async Task<IEnumerable<SEOProductStatus>> GetCompanyProducts(int companyId)
        {
            var sql = "[dbo].[Seo.Product.GetCompanyProducts]";
            var queryParams = new DynamicParameters();

            queryParams.Add("CompanyId", companyId);

            using (var connection = _seoDataConnection.CreateSeoDataConnection())
            {
                try
                {
                    connection.Open();
                    return (await connection.QueryAsync<SEOProductStatus>(sql, queryParams, null, Constants.DefaultCommandTimeout, CommandType.StoredProcedure).ConfigureAwait(false)).AsEnumerable();
                }
                catch (Exception ex)
                {
                    Log.Error("An error occurred retreiving product", ex);
                    throw;
                }
            }
        }

        #endregion
    }
}
