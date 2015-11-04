using Microsoft.AspNet.Mvc;

namespace OneManBlog.Controllers
{
    [Route("[controller]"), Route("/")]
    public class HomeController : Controller
    {
        [Route("[action]"), Route("")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("[action]"), Route("")]
        public IActionResult React()
        {
            return View();
        }
    }
}