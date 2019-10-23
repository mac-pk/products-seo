using SEOWorkflowDomain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SEOWorkflowDataAccess
{
    public interface IProductRepository
    {
        Task<int> SaveSeoProductAsync(Product product, bool isNewProduct);
        Task<Product> GetSeoProductAsync(string externalProductId);
        Task<IEnumerable<SEOProductStatus>> GetCompanyProducts(int companyId);
    }
}
