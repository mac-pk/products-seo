﻿using System.Web.Optimization;

namespace SEOWorkflow
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/libs/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/libs/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/libs/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/libs/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
            
            bundles.Add(new ScriptBundle("~/bundles/Angular").Include(
                    "~/Scripts/asi/polyfills.*",
                    "~/Scripts/asi/styles.*",
                    "~/Scripts/asi/vendor.*",
                    "~/Scripts/asi/runtime.*",
                    "~/Scripts/asi/main.*"));

            bundles.Add(new StyleBundle("~/Content/Angular").Include(
                      "~/Scripts/asi/styles.*"));
        }
    }
}
