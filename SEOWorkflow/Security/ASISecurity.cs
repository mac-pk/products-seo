using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SEOWorkflow.Security
{
    public class ASISecurity
    {
        public static class ASIConstants
        {
            public static string ApplicationCode = "ApplicationCode";
            public static string ApplicationVersion = "ApplicationVersion";
            public static string AppLicenses = "AppLicenses";
            public static int LogomallCustomSiteSuiteId = 37;
            public const string TRUE = "Y";
            public const string FALSE = "N";
            public static int IntegrationSuiteId = 48;
        }

        public static class ASISecurityClaims
        {
            public static string InternalUser = "http://asicentral.com/claims/internaluser";
            public static string AuthorizationTime = "http://asicentral.com/claims/authtime";
            public static string SSOId = "http://asicentral.com/claims/ssoid";
            public static string MMSSessionId = "http://asicentral.com/claims/MMSSessionId";
            //public static string AsiOAuthToken = "http://asicentral.com/claims/AsiOAuthToken";
        }


        public static class EitResources
        {
            //Policy ESPUpdatesPermission
            public static string EspUpdatesPolicyName = "ESPUpdatesPermission";

            //Bits for ESPUpdatesPermission
            public static string HomePage = "HomePage";

            //Policy CompMemberTypeAdmin
            public static string PolicyCompanyMemberTypeAdmin = "CompMemberTypeAdmin";

        }

        public static class ASICookies
        {
            public static string CompanyIdCookie = "asicmp";
            public static string LoginUrlCookie = "asiloginurl";
            public static string HelperAccessToken = "asihlprtkn";
        }
    }
}