using ASI.Services.Http.Security.Filters;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace SEOWorkflow
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);


            var log4netConfig = ConfigurationManager.AppSettings["log4net.Config"];
            {
                log4net.Config.XmlConfigurator.ConfigureAndWatch(new System.IO.FileInfo(Server.MapPath("~/" + log4netConfig)));
                var _log = log4net.LogManager.GetLogger("Reference");
                var message = "SEOWorkflow " + System.Reflection.Assembly.GetExecutingAssembly().GetName().Version;
                _log.Error(message);
                _log.ErrorFormat("Alice: NOT AN ERROR; INFO ONLY; ENABLED LOG LEVELS: {0} {1} {2} {3} {4}",
                    _log.IsFatalEnabled ? "FATAL" : "",
                    _log.IsErrorEnabled ? "ERROR" : "",
                    _log.IsWarnEnabled ? "WARN" : "",
                    _log.IsInfoEnabled ? "INFO" : "",
                    _log.IsDebugEnabled ? "DEBUG" : "");
            }

            FilterProviders.Providers.EnableJwt(principalTranformer: new SEOWorkflow.Security.PrincipalTransformer(), loginUrl: ConfigurationManager.AppSettings["LoginUrl"]);

        }
    }
}
