using DarkSkyApi;
using DarkSkyApi.Models;
using System.Web.Http;

namespace weather_test_ui_mvc_asp.Controllers
{
    public class ForecastController : ApiController
    {
        // ReSharper disable once IdentifierTypo
        private const string DARKSKY_API = "7e97f5db2fcf7a432c594a13970ebe6a";
        public Forecast Get(double lat, double lng)
        {
            var client = new DarkSkyService(DARKSKY_API);
            var result = client.GetWeatherDataAsync(lat, lng).Result;
            return result;
        }
    }
}
