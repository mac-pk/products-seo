using SEOWorkflowDomain;

namespace SEOWorkflowBusiness
{
    public interface ISeoService
    {
        Product GetSeoProduct(string externalProductId);

        int SaveSeoProduct(Product product, bool isNewProduct);
    }
}
