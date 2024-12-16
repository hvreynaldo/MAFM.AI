import { Terminal } from 'lucide-react';
import { HeroStats } from './HeroStats';
import { HeroButtons } from './HeroButtons';

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <Terminal className="w-12 h-12 text-purple-500" />
          <span className="ml-3 text-4xl font-mono text-white">MAFM.AI_</span>
        </div>
        
        <h1 className="text-5xl font-mono text-purple-400 mb-6">
          Revolutionize Your Business Operations with AI-Powered Solutions
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 font-mono">
          {'>'} From Space Management to Internal Automation,
          <br />
          {'>'} MAFM.AI delivers smarter workflows that save time and cut costs.
        </p>

        <HeroButtons />
        <HeroStats />
      </div>
    </div>
  );
}