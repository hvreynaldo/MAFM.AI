import { Cpu, Zap, Workflow } from 'lucide-react';

interface SolutionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

function Solution({ icon: Icon, title, description, features }: SolutionProps) {
  return (
    <div className="p-8 bg-gray-900/50 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all">
      <Icon className="w-12 h-12 text-purple-500 mb-6" />
      <h3 className="text-xl font-mono text-purple-400 mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-sm text-gray-400">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Solutions() {
  const solutions = [
    {
      icon: Cpu,
      title: "_AI AUTOMATION",
      description: "Transform your business processes with intelligent automation.",
      features: [
        "Smart workflow optimization",
        "Automated decision making",
        "Real-time process monitoring"
      ]
    },
    {
      icon: Zap,
      title: "_RAPID INTEGRATION",
      description: "Seamlessly connect with your existing tools and platforms.",
      features: [
        "Quick deployment",
        "Custom API integrations",
        "Secure data handling"
      ]
    },
    {
      icon: Workflow,
      title: "_SMART WORKFLOWS",
      description: "Create efficient, automated workflows that scale with your business.",
      features: [
        "Process automation",
        "Task orchestration",
        "Performance analytics"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-mono text-purple-400 text-center mb-6">
          _STREAMLINE, OPTIMIZE, AND AUTOMATE
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discover how MAFM.AI transforms your business operations with intelligent solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Solution
              key={solution.title}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              features={solution.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}