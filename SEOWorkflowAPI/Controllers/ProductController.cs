using SEOWorkflowAPI;
using SEOWorkflowBusiness;
using SEOWorkflowDomain;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SEOProductAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    //[ApiVersion("1.0")]
    [RoutePrefix("product")]
    public class ProductController : ControllerBase
    {
        #region fields

        private readonly IProductService _service;

        #endregion

        #region constructors

        public ProductController(IProductService service)
        {
            _service = service;
        }

        #endregion

        #region actions

        [Route("{externalProductId}")]
        [HttpGet]
        [AllowAnonymous]
        public Task<IHttpActionResult> GetSeoProductAsync(string externalProductId)
        {
            return OkAsync(_service.GetSeoProductAsync(externalProductId));
        }

        [Route("insert")]
        [HttpPost]
        //[Authorize(Roles = "Administrators")]
        [AllowAnonymous]
        public Task<IHttpActionResult> InsertSeoProductAsync(Product product)
        {
            return OkNotFoundAsync(_service.SaveSeoProductAsync(product, true));
        }

        [Route("update")]
        [HttpPut]
        [AllowAnonymous]
        //[Authorize(Roles = "Administrators")]
        public Task<IHttpActionResult> UpdateSeoProductAsync(Product product)
        {
            return OkNotFoundAsync(_service.SaveSeoProductAsync(product, false));
        }

        #endregion
    }
}