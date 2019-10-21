using System.Configuration;

namespace SEOWorkflowDataAccess
{
    public class SeoConnectionInfo : ISeoConnectionInfo
    {
        public SeoConnectionInfo()
        {

        }
        public string GetConnectionString()
        {
            return ConfigurationManager.ConnectionStrings["SeoConnection"].ConnectionString;
        }
    }
}
