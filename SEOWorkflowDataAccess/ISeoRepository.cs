using SEOWorkflowDomain;

namespace SEOWorkflowDataAccess
{
    public interface ISeoRepository
    {
        int SaveSeoProduct(Product product, bool isNewProduct);
        Product GetSeoProduct(string externalProductId);
    }
}
