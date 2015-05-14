using System.Collections.Generic;

namespace OneManBlog.Model
{
    public class Data
    {
        private Dictionary<string, PostModel> _posts = new Dictionary<string, PostModel>();

        public Data()
        {
            
        }

        public void Add(PostModel post)
        {
            _posts.Add(post.Slug, post);
        }

        public PostModel Get(string id)
        {
            return _posts[id];
        }

        public IEnumerable<PostModel> GetPosts()
        {
            return _posts.Values;
        }
    }
}