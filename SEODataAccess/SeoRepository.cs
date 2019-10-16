using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using SEODataAccess;
using SEODomain;

namespace SEODataAccess
{
    public class SeoRepository : ISeoRepository
    {
        #region fields

        private readonly IDbConnection _database;

        #endregion

        #region constructor

        public SeoRepository()
        {
            _database = new SqlConnection(ConfigurationManager.ConnectionStrings["SeoConnection"].ConnectionString);
        }

        #endregion

        #region methods

        public Product GetSeoProduct(string externalProductId)
        {
            var param = new DynamicParameters();

            param.Add("ExternalProductId", externalProductId);

            return this._database.Query<Product>("[dbo].[Seo.Product.Retrieve]", param, null, true, 0, CommandType.StoredProcedure).FirstOrDefault();
        }

        public bool SaveSeoProduct(Product product, bool isNewProduct)
        {
            var param = new DynamicParameters();
            var spName = string.Empty;

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

            _database.ExecuteScalar(spName, param, null, 0, CommandType.StoredProcedure);

            return true;
        }

        #endregion
    }
}
