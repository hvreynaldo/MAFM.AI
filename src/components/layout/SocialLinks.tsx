import { Github, Linkedin, Twitter } from 'lucide-react';

export function SocialLinks() {
  return (
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
  );
}