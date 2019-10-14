using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;
using static SEOWorkflow.Security.ASISecurity;

namespace SEOWorkflow.Controllers
{
    public class Home1Controller : BaseController
    {
        [Authorize]
        public ActionResult Index()
        {
            // Internal SSOs need to explicitly impersonate a company, before they're allowed to view Index()
            if (BaseController.CurrentUserIsInternalUser() &&
                !base.CurrentUserHasImpersonatedACompany())
            {
                return Redirect("EIT");//or whatever route you are using for EIT only dashboard
            }

            var compCookie = Request.Cookies[ASICookies.CompanyIdCookie];

            if (ClaimsPrincipal.Current == null || CurrentUser == null)
                return Redirect(ConfigurationManager.AppSettings["LoginUrl"]);

            ViewBag.MemberTypeCode = CurrentUser.MemberType;
            ViewBag.Greeting = CurrentUser.FirstName; 

            //if (compCookie == null || ClaimsPrincipal.Current == null)
            if (ClaimsPrincipal.Current == null)
            {
                return Redirect(ConfigurationManager.AppSettings["LoginUrl"]);
            }
            else
            {
                if (CurrentUser != null)
                {
                    //ViewBag.LicenseAgreement = GetLicenseAgreementText();

                    if (CurrentUser.IsInternal && (compCookie.Value.StartsWith("***") ))
                    {
                        return Redirect("/eit/#/");
                    }
                }

                return View();
            }
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}