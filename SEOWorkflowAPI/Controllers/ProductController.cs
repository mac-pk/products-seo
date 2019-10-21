using SEOWorkflowBusiness;
using SEOWorkflowDomain;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SEOProductAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    //[ApiVersion("1.0")]
    [RoutePrefix("product")]
    public class ProductController : ApiController
    {
        #region fields

        private readonly ISeoService _service;

        #endregion

        #region constructors

        public ProductController(ISeoService service)
        {
            _service = service;
        }

        #endregion

        #region actions

        // GET: api/Product/9207-550876635
        [Route("{externalProductId}")]
        [HttpGet]
        [AllowAnonymous]
        public IHttpActionResult GetSeoProduct(string externalProductId)
        {
            return Ok(_service.GetSeoProduct(externalProductId));
        }

        // POST: api/product/insert
        [Route("insert")]
        [HttpPost]
        //[Authorize(Roles = "Administrators")]
        [AllowAnonymous]
        public IHttpActionResult InsertSeoProduct(Product product)
        {
            return Ok(_service.SaveSeoProduct(product, true));
        }

        // PUT: api/product/update
        [Route("update")]
        [HttpPut]
        [AllowAnonymous]
        //[Authorize(Roles = "Administrators")]
        public IHttpActionResult UpdateSeoProduct(Product product)
        {
            return Ok(_service.SaveSeoProduct(product, false));
        }

        #endregion
    }
}