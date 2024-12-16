import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToArticle } from '../../hooks/useScrollToArticle';

export function FeaturedArticle() {
  const scrollToArticle = useScrollToArticle();

  return (
    <article 
      id="article-ai-space-management" 
      className="bg-gray-900/50 rounded-lg border border-purple-500/10 overflow-hidden hover:border-purple-500/30 transition-all"
    >
      <div className="relative h-96">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          alt="AI Innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="text-purple-400 font-mono mb-2 block">FEATURED</span>
          <h2 className="text-3xl font-mono text-white mb-4">
            How AI Streamlines Space & Occupancy Management
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl">
            Discover how AI helps businesses optimize their space usage, reduce costs, and increase 
            efficiency with real-world examples and implementation strategies.
          </p>
          <Link 
            to="/blog/ai-space-management"
            onClick={() => scrollToArticle('article-ai-space-management')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-mono rounded-lg hover:bg-purple-500 transition-all"
          >
            Read the Full Article
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}