import { scrollToOffer, scrollToCoreServices } from '../../utils/scroll';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ variant, children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 font-mono rounded-lg transition-all transform hover:scale-105 backdrop-blur-sm ${
        variant === 'primary'
          ? 'bg-purple-600/90 text-white hover:bg-purple-500/90'
          : 'bg-black/20 border border-purple-500/50 text-purple-400 hover:bg-purple-900/20'
      }`}
    >
      {children}
    </button>
  );
}

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <Button variant="primary" onClick={scrollToOffer}>
        {'>'}_START
      </Button>
      <Button variant="secondary" onClick={scrollToCoreServices}>
        Learn More
      </Button>
    </div>
  );
}