import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogSidebarProps {
  className?: string;
}

export function BlogSidebar({ className = '' }: BlogSidebarProps) {
  const categories = [
    'AI Workflows',
    'Case Studies',
    'Automation Trends',
    'Implementation Guides',
    'Industry Insights'
  ];

  const popularPosts = [
    {
      id: 'ai-cost-reduction',
      title: '5 Ways AI Reduces Operational Costs',
      views: '2.5k reads'
    },
    {
      id: 'future-ai-automation',
      title: 'The Future of AI in Business Automation',
      views: '1.8k reads'
    },
    {
      id: 'ai-ticket-automation',
      title: 'AI-Powered Ticket Automation',
      views: '1.2k reads'
    }
  ];

  return (
    <aside className={`space-y-8 ${className}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
        />
        <Search className="absolute right-3 top-2.5 text-gray-500 w-5 h-5" />
      </div>

      <div>
        <h3 className="text-lg font-mono text-purple-400 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <Link
              key={category}
              to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 px-3 py-2 rounded transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-mono text-purple-400 mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block group"
            >
              <h4 className="text-gray-300 group-hover:text-purple-400 transition-colors mb-1">
                {post.title}
              </h4>
              <span className="text-sm text-gray-500">{post.views}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}