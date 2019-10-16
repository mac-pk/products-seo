using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SEODomain;

namespace SEODataAccess
{
    public interface ISeoRepository
    {
        bool SaveSeoProduct(Product product, bool isNewProduct);
        Product GetSeoProduct(string externalProductId);
    }
}
