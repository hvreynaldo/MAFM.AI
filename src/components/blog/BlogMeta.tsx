interface BlogMetaProps {
  date: string;
  readTime: string;
  category: string;
  author: string;
}

export function BlogMeta({ date, readTime, category, author }: BlogMetaProps) {
  return (
    <div className="flex items-center gap-4 text-sm text-gray-400">
      <span>{date}</span>
      <span>·</span>
      <span>{readTime}</span>
      <span>·</span>
      <span>By {author}</span>
      <span className="ml-auto text-purple-400">{category}</span>
    </div>
  );
}