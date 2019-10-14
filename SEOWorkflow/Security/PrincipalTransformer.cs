using ASI.Services.Http.Security;
using ASI.Services.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;

namespace SEOWorkflow.Security
{
    public class PrincipalTransformer : IPrincipalTransfomer
    {
        readonly log4net.ILog _log = log4net.LogManager.GetLogger(typeof(PrincipalTransformer));

        public ClaimsPrincipal Transform(ClaimsPrincipal principal, AuthenticatedUser user)
        {
            //var claims = ASI.Services.Http.SmartLink.SignOn.GetPermissions(user, user.ApplicationCode, user.ApplicationVersion);
            //((ClaimsIdentity)principal.Identity).AddClaims(claims);

            return principal;
        }

        public ClaimsPrincipal Transform(ClaimsPrincipal principal, IEnumerable<Claim> claims)
        {
            ((ClaimsIdentity)principal.Identity).AddClaims(claims);
            return principal;
        }
    }
}