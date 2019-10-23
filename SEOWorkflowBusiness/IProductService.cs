using SEOWorkflowDomain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SEOWorkflowBusiness
{
    public interface IProductService
    {
        Task<Product> GetSeoProductAsync(string externalProductId);
        Task<int> SaveSeoProductAsync(Product product, bool isNewProduct);
        Task<IEnumerable<SEOProductStatus>> GetCompanyProducts(int companyId);
    }
}
