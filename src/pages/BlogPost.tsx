import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { BlogArticle } from '../components/blog/BlogArticle';
import { BlogCTA } from '../components/blog/BlogCTA';
import { NotFound } from './NotFound';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);
  
  // Scroll to top when article loads
  useScrollToTop();

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="pt-24 pb-12">
      <BlogArticle post={post} />
      <BlogCTA />
    </div>
  );
}