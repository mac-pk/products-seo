using System.Data;
using System.Data.SqlClient;

namespace SEOWorkflowDataAccess
{
    public class SeoDataConnection : ISeoDataConnection
    {
        #region fields

        private readonly ISeoConnectionInfo _seoConnectionInfo;

        #endregion

        #region constructors

        public SeoDataConnection(ISeoConnectionInfo seoConnectionInfo)
        {
            _seoConnectionInfo = seoConnectionInfo;
        }

        #endregion

        #region methods

        public IDbConnection CreateSeoDataConnection()
        {
            return new SqlConnection(_seoConnectionInfo.GetConnectionString());
        }

        #endregion
    }
}
