using log4net;
using System.Diagnostics;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace SEOWorkflowAPI.Handlers
{
    /// <summary>
    /// Handler which logs request URIs and response status codes.
    /// </summary>
    public class LoggingHandler : DelegatingHandler
    {
        private ILog Log = LogManager.GetLogger(nameof(LoggingHandler));

        protected async override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            var timer = Stopwatch.StartNew();

            if (Log.IsInfoEnabled)
            {
                Log.InfoFormat("[BEGIN] {0} {1}", request.Method, request.RequestUri);
            }

            HttpResponseMessage result = null;

            result = await base.SendAsync(request, cancellationToken).ConfigureAwait(false);

            var elapsedMilliseconds = timer.ElapsedMilliseconds;

            if (Log.IsInfoEnabled)
            {
                Log.InfoFormat("[END] {0} {1} ({2} - {3}) [{4}ms]", request.Method, request.RequestUri, (int)result.StatusCode, result.StatusCode, elapsedMilliseconds);
            }

            return result;
        }
    }
}