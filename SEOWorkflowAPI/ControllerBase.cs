using System.Threading.Tasks;
using System.Web.Http;

namespace SEOWorkflowAPI
{
    public abstract class ControllerBase : ApiController
    {
        /// <summary>
        /// Returns Ok
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="task"></param>
        /// <returns></returns>
        protected async Task<IHttpActionResult> OkAsync<T>(Task<T> task)
        {
            T taskResult = await task.ConfigureAwait(false);

            return Ok(taskResult);
        }

        /// <summary>
        /// Returns Ok or NotFound
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="task"></param>
        /// <returns></returns>
        protected async Task<IHttpActionResult> OkNotFoundAsync<T>(Task<T> task)
        {
            T taskResult = await task.ConfigureAwait(false);

            if (taskResult == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(taskResult);
            }
        }
    }
}