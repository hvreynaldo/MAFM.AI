import { ChevronLeft, ChevronRight } from 'lucide-react';

export function BlogPagination() {
  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      <button className="p-2 text-gray-400 hover:text-purple-400 transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      {[1, 2, 3].map(page => (
        <button
          key={page}
          className={`px-4 py-2 rounded-lg transition-colors ${
            page === 1
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:text-purple-400 hover:bg-purple-500/10'
          }`}
        >
          {page}
        </button>
      ))}
      <button className="p-2 text-gray-400 hover:text-purple-400 transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}