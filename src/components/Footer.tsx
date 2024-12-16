import { Terminal, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-purple-500/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Terminal className="w-6 h-6 text-purple-500" />
              <span className="ml-2 text-xl font-mono text-white">MAFM.AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionizing business operations with AI-powered solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-purple-400 font-mono mb-4">Quick Links</h3>
            <div className="space-y-2">
              <div><Link to="/blog" className="text-gray-300 hover:text-purple-400 font-mono transition-colors">Blog</Link></div>
              <div><a href="#core-services" className="text-gray-300 hover:text-purple-400 font-mono transition-colors">Services</a></div>
              <div><a href="#offer-section" className="text-gray-300 hover:text-purple-400 font-mono transition-colors">Contact</a></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-purple-400 font-mono mb-4">Legal</h3>
            <div className="space-y-2">
              <div><Link to="/privacy" className="text-gray-300 hover:text-purple-400 font-mono transition-colors">Privacy Policy</Link></div>
              <div><Link to="/terms" className="text-gray-300 hover:text-purple-400 font-mono transition-colors">Terms of Service</Link></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-purple-400 font-mono mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-500/10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} MAFM.AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}