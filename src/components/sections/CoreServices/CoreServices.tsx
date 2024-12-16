import { FileText, WrenchIcon, TicketIcon } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { scrollToOffer } from '../../../utils/scroll';

const services = [
  {
    icon: FileText,
    title: "_INVOICE & LEASE MANAGEMENT",
    description: "Optimize space allocation and streamline lease management with AI-powered solutions that keep you ahead of renewals and compliance.",
    metrics: [
      { value: "40%", label: "REDUCED PROCESSING TIME" },
      { value: "95%", label: "ACCURACY RATE" },
      { value: "30d", label: "ADVANCE NOTIFICATIONS" }
    ],
    features: [
      "Automated lease renewal tracking",
      "Space utilization optimization",
      "Proactive compliance monitoring"
    ]
  },
  {
    icon: WrenchIcon,
    title: "_CMMS INTEGRATIONS",
    description: "Transform your maintenance operations with AI-driven workflows that prevent downtime and optimize resource allocation.",
    metrics: [
      { value: "60%", label: "REDUCED DOWNTIME" },
      { value: "45%", label: "COST SAVINGS" },
      { value: "24/7", label: "MONITORING" }
    ],
    features: [
      "Predictive maintenance scheduling",
      "Real-time equipment monitoring",
      "Automated work order management"
    ]
  },
  {
    icon: TicketIcon,
    title: "_INTERNAL TICKET AUTOMATION",
    description: "Streamline issue resolution with AI-powered ticketing that prioritizes, tracks, and resolves problems automatically.",
    metrics: [
      { value: "85%", label: "FASTER RESOLUTION" },
      { value: "100%", label: "TICKET TRACKING" },
      { value: "50%", label: "REDUCED WORKLOAD" }
    ],
    features: [
      "Real-time status updates",
      "Smart priority assignment",
      "Automated ticket routing"
    ]
  }
];

export function CoreServices() {
  return (
    <section className="py-24 bg-black" id="core-services">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-mono text-purple-400 text-center mb-6">
          _CORE SERVICES
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Discover how our AI-powered solutions transform your operations with measurable results
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              metrics={service.metrics}
              features={service.features}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={scrollToOffer}
            className="px-8 py-4 bg-purple-600 text-white font-mono rounded-lg hover:bg-purple-500 transition-all transform hover:scale-105"
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}