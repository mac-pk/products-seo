using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SEOWorkflowDataAccess;
using SEOWorkflowDomain;

namespace SEOWorkflowBusiness
{
    public interface ISeoService
    {
        Product GetSeoProduct(string externalProductId);

        bool SaveSeoProduct(Product product, bool isNewProduct);
    }
}
