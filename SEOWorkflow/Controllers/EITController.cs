using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SEOWorkflow.Controllers
{
    public class EITController : BaseController
    {
        // GET: EIT
        public ActionResult Index()
        {
            ViewBag.Greeting = CurrentUser.FirstName;
            return View();
        }
    }
}