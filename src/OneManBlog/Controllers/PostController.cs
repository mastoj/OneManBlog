using Microsoft.AspNet.Mvc;
using OneManBlog.Model;

namespace OneManBlog.Controllers
{
    [Route("[controller]")]
    public class PostController : Controller
    {
        private Data _data;

        public PostController(Data data)
        {
            _data = data;
        }

        [Route("{slug}")]
        public IActionResult Index(string slug)
        {
            return View(_data.Get(slug));
        }

        [Route("[action]")]
        public IActionResult Create(PostModel model)
        {
            _data.Add(model);
            return RedirectToAction("Index", new {slug = model.Slug});
        }
    }
}