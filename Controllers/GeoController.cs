#region usings

using RestSharp;
using System.Web;
using System.Web.Http;

#endregion

namespace weather_test_ui_mvc_asp.Controllers
{
    public class GeoController : ApiController
    {
        #region Constants

        const string GEOCODIO_API = "555a56c0a00e1f67aac65eae056ac15f1ef0e0e";

        #endregion

        #region Methods

        public string Get(string address)
        {
            var encodedAddress = HttpUtility.UrlEncode(address);
            var restClient = new RestClient("https://api.geocod.io/v1.4/");

            var request = new RestRequest("geocode");
            request.AddParameter("api_key", GEOCODIO_API);
            request.AddParameter("q", encodedAddress);
            var result = restClient.Execute(request);

            return result.Content;

        }

        #endregion
    }
}
