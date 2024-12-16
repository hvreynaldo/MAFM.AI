import { BlogMeta } from './BlogMeta';

interface BlogHeaderProps {
  title: string;
  image: string;
  meta: {
    date: string;
    readTime: string;
    category: string;
    author: string;
  };
}

export function BlogHeader({ title, image, meta }: BlogHeaderProps) {
  return (
    <header className="mb-12">
      <BlogMeta {...meta} />
      <h1 className="text-4xl font-mono text-purple-400 my-6">
        {title}
      </h1>
      <img 
        src={image}
        alt={title}
        className="w-full h-96 object-cover rounded-lg"
      />
    </header>
  );
}