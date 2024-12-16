interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-purple-400 font-mono transition-colors"
    >
      {children}
    </a>
  );
}