import { Terminal } from 'lucide-react';

export function BlogSlogan() {
  return (
    <div className="text-center max-w-4xl mx-auto mb-16">
      <div className="flex items-center justify-center mb-6">
        <Terminal className="w-8 h-8 text-purple-500" />
        <span className="ml-2 text-2xl font-mono text-white">MAFM.AI_INSIGHTS</span>
      </div>
      <h1 className="text-4xl font-mono text-purple-400 mb-4">
        Insights on AI Innovation for Businesses
      </h1>
      <h2 className="text-xl text-gray-300 mb-6">
        Explore how AI is revolutionizing business operations, optimizing workflows, and driving growth.
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        From AI-powered workflows to internal ticket automation, our blog dives into the latest trends 
        and actionable insights to help businesses thrive in the digital era.
      </p>
    </div>
  );
}