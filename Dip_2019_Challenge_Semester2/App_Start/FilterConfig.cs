using System.Web;
using System.Web.Mvc;

namespace Dip_2019_Challenge_Semester2
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
