using Microsoft.AspNet.Mvc;
using OneManBlog.Model;

namespace OneManBlog.ViewComponents
{
    public class PostListViewComponent : ViewComponent
    {
        private readonly Data _data;

        public PostListViewComponent(Data data)
        {
            _data = data;
        }

        public IViewComponentResult Invoke(string title)
        {
            ViewBag.Title = title;
            return View(_data.GetPosts());
        }
    }
}