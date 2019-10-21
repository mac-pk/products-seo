﻿using Microsoft.AspNetCore.Mvc.Routing;
using Newtonsoft.Json.Serialization;
using SEOWorkflowAPI.DependencyResolution;
using System.Web.Http;
using System.Web.Http.Dispatcher;
using System.Web.Http.Routing;

namespace SEOWorkflowAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            config.Services.Replace(typeof(IHttpControllerActivator), new ServiceActivator(config));

            // Web API routes
            // Web API routes with versioning
            var constraintResolver = new DefaultInlineConstraintResolver
            {
                ConstraintMap =
                {
                    ["apiVersion"] = typeof(ApiVersionRouteConstraint)
                }
            };
            config.MapHttpAttributeRoutes();
            config.AddApiVersioning(options =>
            {
                options.AssumeDefaultVersionWhenUnspecified = true;
            });

            // Remove XML formatter
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new DefaultContractResolver();
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            // Enable CORS
            config.EnableCors();
        }
    }
}
