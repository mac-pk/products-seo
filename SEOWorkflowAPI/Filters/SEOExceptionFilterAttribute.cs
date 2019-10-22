using log4net;
using SEOWorkflowAPI.DTOs;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Filters;

namespace SEOWorkflowAPI.Filters
{
    /// <summary>
    /// Filter which intercepts un-caught exceptions in the controller actions; it logs the error and returns it in JSON format.
    /// </summary>
    public class SEOExceptionFilterAttribute : ExceptionFilterAttribute
    {
        private static ILog Log = LogManager.GetLogger(nameof(SEOExceptionFilterAttribute));

        public override void OnException(HttpActionExecutedContext context)
        {
            Log.Error(context.Exception);

            if (context.Exception is InvalidOperationException)
            {
                var ex = context.Exception as InvalidOperationException;
                var errorNumber = 1;

                foreach (var reason in ex.Data.Values)
                {
                    context.ActionContext.ModelState.AddModelError(string.Format("Error_{0}", errorNumber++), Convert.ToString(reason));
                }

                // always return error response in JSON format
                if (context.ActionContext.ModelState.IsValid)
                {
                    context.Response = context.Request.CreateResponse<ExceptionWithStackTraceDTO>(HttpStatusCode.InternalServerError, new ExceptionWithStackTraceDTO(context.Exception.Message, context.Exception.StackTrace), GlobalConfiguration.Configuration.Formatters.JsonFormatter);
                }
                else
                {
                    context.Response = context.Request.CreateResponse<HttpError>(HttpStatusCode.BadRequest, new HttpError(context.ActionContext.ModelState, true), GlobalConfiguration.Configuration.Formatters.JsonFormatter);
                }

                context.Response.ReasonPhrase = GetFirstLine(ex.Message);
            }
            else
            {
                // always return error response in JSON format
                context.Response = context.Request.CreateResponse<ExceptionWithStackTraceDTO>(HttpStatusCode.InternalServerError, new ExceptionWithStackTraceDTO(context.Exception.Message, context.Exception.StackTrace), GlobalConfiguration.Configuration.Formatters.JsonFormatter);
                context.Response.ReasonPhrase = GetFirstLine(context.Exception.Message);
            }
        }

        private static string GetFirstLine(string message)
        {
            var result = message;

            if (message != null)
            {
                if (message.Contains(Environment.NewLine))
                {
                    result = message.Split(Environment.NewLine.ToCharArray())[0];
                }
                else if (message.Contains('\n'))
                {
                    result = message.Split(new char[] { '\n' })[0];
                }
            }

            return result;
        }
    }
}