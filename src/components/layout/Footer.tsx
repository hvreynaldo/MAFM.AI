import { Terminal } from 'lucide-react';
import { FooterLinks } from './FooterLinks';
import { Copyright } from './Copyright';

export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-purple-500/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Terminal className="w-6 h-6 text-purple-500" />
              <span className="ml-2 text-xl font-mono text-white">MAFM.AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionizing business operations with AI-powered solutions.
            </p>
          </div>
          
          <FooterLinks />
        </div>
        
        <Copyright />
      </div>
    </footer>
  );
}