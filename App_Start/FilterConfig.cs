using System.Web;
using System.Web.Mvc;

namespace weather_test_ui_mvc_asp
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
