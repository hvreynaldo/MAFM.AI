import { Terminal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToOffer } from '../../utils/scroll';

export function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Terminal className="w-8 h-8 text-purple-500" />
              <span className="ml-2 text-xl font-mono text-white">MAFM.AI</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/blog" 
              className={`text-gray-300 hover:text-purple-400 font-mono transition-colors ${
                location.pathname === '/blog' ? 'text-purple-400' : ''
              }`}
            >
              _BLOG
            </Link>
            <button 
              onClick={scrollToOffer}
              className="px-4 py-2 bg-purple-600 text-white font-mono rounded hover:bg-purple-500 transition-colors"
            >
              _START
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}