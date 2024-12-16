import { Clock, Target, TrendingDown } from 'lucide-react';

interface PainPointProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function PainPoint({ icon: Icon, title, description }: PainPointProps) {
  return (
    <div className="p-6 bg-gray-900/50 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all">
      <Icon className="w-12 h-12 text-purple-500 mb-4" />
      <h3 className="text-xl font-mono text-purple-400 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export function PainPoints() {
  const painPoints = [
    {
      icon: Clock,
      title: "Wasted Time",
      description: "Hours spent on manual prospecting and repetitive tasks that could be automated."
    },
    {
      icon: Target,
      title: "Poor Targeting",
      description: "Difficulty identifying and reaching ideal customers effectively."
    },
    {
      icon: TrendingDown,
      title: "Low ROI",
      description: "High costs with unpredictable results and inefficient resource allocation."
    }
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-mono text-purple-400 text-center mb-6">
          _THE PROBLEM WITH TRADITIONAL PROCESSES
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Manual processes are holding your business back. Here's why:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point) => (
            <PainPoint
              key={point.title}
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}