import { type LucideIcon } from 'lucide-react';

interface Metric {
  value: string;
  label: string;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metrics: Metric[];
  features: string[];
}

export function ServiceCard({ icon: Icon, title, description, metrics, features }: ServiceCardProps) {
  return (
    <div className="bg-gray-900/50 p-8 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all">
      <Icon className="w-12 h-12 text-purple-500 mb-6" />
      <h3 className="text-xl font-mono text-purple-400 mb-4">{title}</h3>
      <p className="text-gray-400 mb-8">{description}</p>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="text-2xl font-mono text-purple-400">{metric.value}</div>
            <div className="text-xs text-gray-500">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {features.map((feature) => (
          <div key={feature} className="flex items-center text-sm text-gray-400">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}