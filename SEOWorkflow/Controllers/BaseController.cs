using ASI.Services.Http.Security;
using ASI.Services.Security;
using log4net;
using SEOWorkflow.Models;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;
using static SEOWorkflow.Security.ASISecurity;

namespace SEOWorkflow.Controllers
{
    public class BaseController : Controller
    {
        private AuthenticatedUser _currentUser = null;
        private ILog _logger;
        private Application _currentApplication;

        public BaseController()
        {
            _logger = LogManager.GetLogger(this.GetType());
        }
        public static AuthenticatedUser GetAuthenticatedUser()
        {
            return ClaimsPrincipal.Current.Identity as AuthenticatedUser;
        }
        public static AuthenticatedUser GetAuthenticatedUser(string accessToken)
        {
            AuthenticatedUser ret = null;
            IList<Claim> claims;
            var claimsPrincipal = Token.Validate(accessToken, out claims);
            if (claimsPrincipal != null)
                ret = claimsPrincipal.Identity as AuthenticatedUser;
            return ret;
        }
        public AuthenticatedUser CurrentUser
        {
            get
            {
                if (_currentUser == null)
                {
                    _currentUser = GetAuthenticatedUser();
                    if (_currentUser == null)
                    {
                        var accessCookie = Request.Cookies[AsiCookies.AccessTokenCookie];
                        if (accessCookie != null)
                        {
                            _currentUser = GetAuthenticatedUser(accessCookie.Value);
                        }
                    }
                }
                return _currentUser;
            }
        }
        public static bool CurrentUserIsInternalUser()
        {
            var user = ClaimsPrincipal.Current.Identity as AuthenticatedUser;
            return (user != null && user.IsInternal);
        }

        public static bool CheckAccess(string resource, string action)
        {
            var user = ClaimsPrincipal.Current.Identity as AuthenticatedUser;
            if (user != null)
            {
                return user.HasClaim(resource, action);
            }
            else
            {
                return ClaimsPrincipal.Current.HasClaim(resource, action);
            }
        }

        public static string GetClaimValue(string claimName)
        {
            var claim = ClaimsPrincipal.Current.FindFirst(claimName);
            return claim == null ? "" : claim.Value;
        }

        public static int GetClaimValueInt(string claimName)
        {
            var claim = ClaimsPrincipal.Current.FindFirst(claimName);
            if (claim == null)
                return 0;
            int result;
            Int32.TryParse(claim.Value, out result);
            return result;
        }

        public static bool CurrentUserCanAccessEitDashboard()
        {
            var currentUser = ClaimsPrincipal.Current.Identity as AuthenticatedUser;

            if (ClaimsPrincipal.Current.Identity.IsAuthenticated && ClaimsPrincipal.Current.Identity.AuthenticationType.Equals("AsiMemberAuth") &&
                currentUser != null && currentUser.IsInternal && CheckAccess(EitResources.EspUpdatesPolicyName, EitResources.HomePage))
            {
                return true;
            }

            return false;
        }

        protected bool CurrentUserHasImpersonatedACompany()
        {
            var compCookie = Request.Cookies[ASICookies.CompanyIdCookie];
            if (compCookie == null)
            {
                var user = ClaimsPrincipal.Current.Identity as AuthenticatedUser;
                if (user != null)
                {
                    if (Response == null) return false;
                    if (string.IsNullOrEmpty(ASICookies.CompanyIdCookie)) return false;
                    HttpCookie cookie = new HttpCookie(ASICookies.CompanyIdCookie) { Value = "***-" + user.UserId };
                    Response.Cookies.Add(cookie);
                }
                return false;
            }
            else
            {
                if (compCookie.Value.StartsWith("***"))
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
        }
        public Models.Application CurrentApplication
        {
            get
            {
                if (_currentApplication == null)
                {
                    //var appRepo = new ASI.Jade.ApplicationManagement.PortalApplication();
                    //if (Request.Url != null)
                    //{
                    //    var siteDomain = Request.Url.Host;
                    //    _currentApplication = appRepo.Get(Domain: siteDomain).FirstOrDefault();
                    //}

                    //var result = ASI.Services.Http.SmartLink.Application.RetrieveByDomain(Request.Url.Host);
                    //if (result != null)
                    //{
                    //    Tuple<string, string> obj = result.FirstOrDefault();
                    //    if (obj != null)
                    //    {
                    //        _currentApplication = new Alice.Models.Application();
                    //        _currentApplication.ApplicationCode = obj.Item1;
                    //        _currentApplication.ApplicationVersion = obj.Item2;
                    //    }
                    //}

                    _currentApplication = new Application
                    {
                        ApplicationCode = CurrentUser.ApplicationCode, //ConfigurationManager.AppSettings["ApplicationCode"],
                        ApplicationVersion = CurrentUser.ApplicationVersion // ConfigurationManager.AppSettings["ApplicationVersion"]
                    };
                }
                return _currentApplication;
            }
        }
    }
}