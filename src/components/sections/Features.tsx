import { Maximize2, Shield, Zap } from 'lucide-react';
import { scrollToOffer } from '../../utils/scroll';

const features = [
  {
    icon: Maximize2,
    title: "Space Optimization",
    description: "Save up to 25% on overhead costs with AI-driven space management",
    benefits: [
      "Optimize workspace utilization",
      "Reduce unnecessary space costs",
      "Data-driven space planning"
    ]
  },
  {
    icon: Shield,
    title: "Proactive Maintenance",
    description: "Reduce downtime by 40% with smart CMMS integrations",
    benefits: [
      "Prevent equipment failures",
      "Automated maintenance schedules",
      "Real-time monitoring"
    ]
  },
  {
    icon: Zap,
    title: "AI-Driven Ticketing",
    description: "Resolve internal tickets 2x faster with automated workflows",
    benefits: [
      "Instant ticket routing",
      "Smart priority assignment",
      "Automated follow-ups"
    ]
  }
];

export function Features() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-mono text-purple-400 text-center mb-16">
          _WHY CHOOSE MAFM.AI?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-8 bg-gray-900/50 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all">
              <feature.icon className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-mono text-purple-400 mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={scrollToOffer}
            className="px-8 py-4 bg-purple-600 text-white font-mono rounded-lg hover:bg-purple-500 transition-all transform hover:scale-105"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}