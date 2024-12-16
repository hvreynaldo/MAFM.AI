import { Link } from 'react-router-dom';

export function FooterLinks() {
  return (
    <>
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
    </>
  );
}