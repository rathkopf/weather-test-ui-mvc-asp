#region usings

using DarkSkyApi;
using System.Collections.Generic;
using System.Text;
using System.Web.Http;

#endregion

namespace weather_test_ui_mvc_asp.Controllers
{
    public class ForecastController : ApiController
    {
        #region Constants

        // ReSharper disable once IdentifierTypo
        private const string DARKSKY_API = "7e97f5db2fcf7a432c594a13970ebe6a";

        #endregion

        #region Methods

        public ForecastResult Get(double lat, double lng)
        {
            var client = new DarkSkyService(DARKSKY_API);
            var darkSkyForecast = client.GetWeatherDataAsync(lat, lng).Result;

            var result = new ForecastResult
            {
                CurrentSummary = darkSkyForecast.Currently.Summary,
                CurrentTemp = darkSkyForecast.Currently.Temperature.ToString("0.0")
            };

            foreach (var dsDayForecast in darkSkyForecast.Daily.Days)
            {
                var dayForecast = new DailyForecast
                {
                    LowTemp = dsDayForecast.LowTemperature.ToString("0.0"),
                    HiTemp = dsDayForecast.HighTemperature.ToString("0.0"),
                    Summary = dsDayForecast.Summary,
                    DayOfWeek = dsDayForecast.SunriseTime.ToLocalTime().DayOfWeek.ToString()
                };

                result.Future.Add(dayForecast);
            }
            return result;
        }

        #endregion
    }

    public class DailyForecast
    {
        #region Properties

        public string DayOfWeek { get; set; }

        public string HiTemp { get; set; }

        public string LowTemp { get; set; }

        public string Summary { get; set; }

        #endregion

        #region Methods

        /// <inheritdoc />
        public override string ToString()
        {
            return $"{DayOfWeek}: {Summary} Lo: {LowTemp} Hi: {HiTemp}";
        }

        #endregion
    }

    public class ForecastResult
    {
        #region Properties

        public string CurrentSummary { get; set; }

        public string CurrentTemp { get; set; }

        public List<DailyForecast> Future { get; } = new List<DailyForecast>();

        #endregion

        #region Methods

        /// <inheritdoc />
        public override string ToString()
        {
            var result = new StringBuilder($"Currently: {CurrentTemp} {CurrentSummary}");

            foreach (var limitedForecast in Future)
            {
                result.AppendLine(limitedForecast.ToString());
            }

            return result.ToString();
        }

        #endregion
    }
}
