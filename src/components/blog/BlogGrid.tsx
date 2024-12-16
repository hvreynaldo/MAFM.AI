import { BlogPost } from './BlogPost';
import { blogPosts } from '../../data/blogPosts';

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogPosts.map(post => (
        <BlogPost key={post.id} {...post} />
      ))}
    </div>
  );
}