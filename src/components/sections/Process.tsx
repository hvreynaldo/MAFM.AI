import { ClipboardList, Cpu, Zap } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ElementType;
  step: string;
  title: string;
  description: string;
}

function ProcessStep({ icon: Icon, step, title, description }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-purple-400" />
        </div>
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs text-white">
          {step}
        </span>
      </div>
      <h3 className="text-xl font-mono text-purple-400 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export function Process() {
  const steps = [
    {
      icon: ClipboardList,
      step: "1",
      title: "Schedule Consultation",
      description: "Book a free consultation to assess your needs and discover opportunities for automation."
    },
    {
      icon: Cpu,
      step: "2",
      title: "Custom AI Plan",
      description: "Receive a tailored AI integration plan designed specifically for your business needs."
    },
    {
      icon: Zap,
      step: "3",
      title: "Transform & Scale",
      description: "Watch your business workflows transform with intelligent automation that scales."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-mono text-purple-400 text-center mb-6">
          _HOW IT WORKS
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Get started with MAFM.AI in three simple steps
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <ProcessStep
              key={step.title}
              icon={step.icon}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}