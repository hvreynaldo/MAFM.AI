import { Share2, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

export function BlogPost({ id, title, excerpt, image, date, readTime, category }: BlogPostProps) {
  const navigate = useNavigate();

  const handleReadMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(`/blog/${id}`);
  };

  return (
    <article className="bg-gray-900/50 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span>{date}</span>
          <span>·</span>
          <span>{readTime}</span>
          <span className="ml-auto text-purple-400">{category}</span>
        </div>
        <h3 className="text-xl font-mono text-purple-400 mb-2">
          <Link 
            to={`/blog/${id}`}
            onClick={handleReadMore}
            className="hover:text-purple-300"
          >
            {title}
          </Link>
        </h3>
        <p className="text-gray-400 mb-6">{excerpt}</p>
        <div className="flex items-center justify-between">
          <Link
            to={`/blog/${id}`}
            onClick={handleReadMore}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Read More
            <span className="sr-only">about {title}</span>
          </Link>
          <div className="flex items-center gap-4">
            <button 
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Share article"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button 
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Comment on article"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}