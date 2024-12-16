import { type BlogPost } from '../../types/blog';
import { formatContent } from '../../utils/formatContent';

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  const formattedContent = formatContent(content);
  
  return (
    <div className="prose prose-invert prose-purple max-w-none">
      {formattedContent.map((paragraph, index) => (
        <p key={index} className="mb-6 text-gray-300 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}