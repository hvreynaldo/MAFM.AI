import { Terminal } from 'lucide-react';
import { HeroStats } from './hero/HeroStats';
import { HeroButtons } from './hero/HeroButtons';

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c')] opacity-10 bg-cover bg-center" />
      
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