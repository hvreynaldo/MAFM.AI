import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-purple-500/10">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-mono text-purple-400">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-purple-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-purple-400" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-400">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does AI improve my existing systems?",
      answer: "Our AI solutions integrate with your current systems to automate repetitive tasks, optimize workflows, and provide data-driven insights for better decision-making."
    },
    {
      question: "Is MAFM.AI compatible with my current tools?",
      answer: "Yes, MAFM.AI is designed to work seamlessly with most modern business tools and platforms. We provide custom integrations to ensure compatibility with your existing infrastructure."
    },
    {
      question: "How long does it take to implement your solutions?",
      answer: "Implementation time varies based on your specific needs, but most clients see initial results within 2-4 weeks. We provide a detailed timeline during your consultation."
    }
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-mono text-purple-400 text-center mb-12">
          _FREQUENTLY ASKED QUESTIONS
        </h2>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}