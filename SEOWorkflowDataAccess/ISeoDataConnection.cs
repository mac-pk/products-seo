using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SEOWorkflowDataAccess
{
    public interface ISeoDataConnection
    {
        /// <summary>
        /// Create a connection to the seo database.
        /// </summary>
        /// <returns></returns>
        IDbConnection CreateSeoDataConnection();
    }
}
