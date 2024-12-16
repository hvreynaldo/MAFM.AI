import { scrollToOffer } from '../../utils/scroll';

export function BlogCTA() {
  return (
    <div className="text-center py-24">
      <h2 className="text-3xl font-mono text-purple-400 mb-6">
        Ready to Transform Your Business with AI?
      </h2>
      <button
        onClick={scrollToOffer}
        className="px-8 py-4 bg-purple-600 text-white font-mono rounded-lg hover:bg-purple-500 transition-all transform hover:scale-105"
      >
        Schedule Your Free Consultation
      </button>
    </div>
  );
}