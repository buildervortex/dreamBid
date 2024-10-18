using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace DreamBid.Extensions
{
    public static class ClaimsExtensions
    {
        public static string GetUserId(this ClaimsPrincipal user)
        {
            // return user.Claims.SingleOrDefault(x => x.Type.Equals(JwtRegisteredClaimNames.NameId))?.Value;
            // return user.FindFirstValue(JwtRegisteredClaimNames.NameId);
            return user.Claims.SingleOrDefault(x=>x.Type.Equals("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")).Value;
        }

        public static string GetUserEmail(this ClaimsPrincipal user)
        {
            // return user.Claims.SingleOrDefault(x => x.Type.Equals(JwtRegisteredClaimNames.Email))?.Value;
            return user.Claims.SingleOrDefault(x=>x.Type.Equals("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress")).Value;
        }

        public static string GetUserName(this ClaimsPrincipal user)
        {

            // return user.Claims.SingleOrDefault(x => x.Type.Equals(JwtRegisteredClaimNames.GivenName))?.Value;
            return user.Claims.SingleOrDefault(x=>x.Type.Equals("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname")).Value;
            // return user.FindFirstValue(JwtRegisteredClaimNames.GivenName);
        }
    }
}