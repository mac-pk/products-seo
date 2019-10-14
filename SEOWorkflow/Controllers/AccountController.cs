using ASI.Services.Http.Security;
using ASI.Services.Security;
using SEOWorkflow.Helpers;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using static SEOWorkflow.Security.ASISecurity;

namespace SEOWorkflow.Controllers
{
    public class AccountController : BaseController
    {
        private readonly string _loginUrlBase = ConfigurationManager.AppSettings["LoginUrl"];
        private readonly string _loginUrl;

        public AccountController()
        {
            _loginUrl = _loginUrlBase + "?fromAppCode=" + ConfigurationManager.AppSettings["ApplicationCode"];
        }


        [HttpPost]
        public ActionResult LogOff()
        {
            SignOff();

            string logoutUrl = _loginUrlBase + "/Home/Signout";

            return Redirect(logoutUrl);
        }

        public void SignOff()
        {
            FormsAuthentication.SignOut();
            ASIHttpHelper.RemoveCookies(FormsAuthentication.FormsCookieName);
            ASIHttpHelper.RemoveCookies(ASICookies.CompanyIdCookie);
            ASIHttpHelper.RemoveCookies(ASICookies.HelperAccessToken); // this is a cookie that Doorman sets to cache inter-application 
            ASIHttpHelper.RemoveCookies(AsiCookies.AccessTokenCookie);
            HttpContext.Request.Cookies.Clear();
        }

    }
}