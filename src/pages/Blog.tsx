import { BlogSlogan } from '../components/blog/BlogSlogan';
import { FeaturedArticle } from '../components/blog/FeaturedArticle';
import { BlogGrid } from '../components/blog/BlogGrid';
import { BlogSidebar } from '../components/blog/BlogSidebar';
import { BlogPagination } from '../components/blog/BlogPagination';
import { BlogCTA } from '../components/blog/BlogCTA';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function Blog() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-black/30 pt-24">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <BlogSlogan />
        <FeaturedArticle />
        <div className="mt-16 flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <BlogGrid />
            <BlogPagination />
          </div>
          <BlogSidebar className="w-full lg:w-80" />
        </div>
        <BlogCTA />
      </main>
    </div>
  );
}