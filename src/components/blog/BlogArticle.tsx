import { Share2, MessageCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { type BlogPost } from '../../types/blog';
import { BlogHeader } from './BlogHeader';
import { BlogContent } from './BlogContent';
import { useConsultationModal } from '../../hooks/useConsultationModal';

interface BlogArticleProps {
  post: BlogPost;
}

export function BlogArticle({ post }: BlogArticleProps) {
  const navigate = useNavigate();
  const { openModal } = useConsultationModal();

  const handleBack = () => {
    navigate('/blog');
  };

  return (
    <article className="max-w-4xl mx-auto px-4">
      <button
        onClick={handleBack}
        className="mb-8 flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </button>

      <BlogHeader 
        title={post.title}
        image={post.image}
        meta={{
          date: post.date,
          readTime: post.readTime,
          category: post.category,
          author: post.author
        }}
      />

      <BlogContent content={post.content} />

      <footer className="flex items-center justify-between mt-12 pt-8 border-t border-purple-500/10">
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
        <div className="text-gray-400">
          Published on {post.date}
        </div>
      </footer>
    </article>
  );
}