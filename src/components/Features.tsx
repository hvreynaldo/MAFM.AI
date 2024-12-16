import { Users, Headphones, Database } from 'lucide-react';

const features = [
  {
    title: '_AI LEAD GENERATION',
    description: 'Generate high-quality leads with cutting-edge AI algorithms designed to find, analyze, and engage your ideal audience.',
    icon: Users,
    metrics: [
      { value: '45%', label: 'INCREASE IN CONVERSION' },
      { value: '35%', label: 'REDUCED COST PER LEAD' },
      { value: '3X', label: 'MORE QUALIFIED LEADS' }
    ]
  },
  {
    title: '_CUSTOMER SUPPORT AI',
    description: 'Deliver seamless, 24/7 customer support with intelligent automation that understands, resolves, and delights your customers.',
    icon: Headphones,
    metrics: [
      { value: '70%', label: 'FASTER RESPONSE TIME' },
      { value: '500h', label: 'SAVED PER MONTH' },
      { value: '92%', label: 'CUSTOMER SATISFACTION' }
    ]
  },
  {
    title: '_CRM INTEGRATIONS',
    description: 'Streamline your business processes with AI-powered CRM integrations that connect your data and tools for maximum efficiency.',
    icon: Database,
    metrics: [
      { value: '25%', label: 'TEAM PRODUCTIVITY BOOST' },
      { value: '60%', label: 'FASTER IMPLEMENTATION' },
      { value: '99.9%', label: 'DATA ACCURACY' }
    ]
  }
];

export function Features() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-mono text-purple-400 text-center mb-16">
          _OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-900/50 p-8 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-colors">
              <feature.icon className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-mono text-purple-400 mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-8">{feature.description}</p>
              <div className="grid grid-cols-3 gap-4">
                {feature.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-2xl font-mono text-purple-400">{metric.value}</div>
                    <div className="text-xs text-gray-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}