export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-mono text-purple-400 mb-4">404: Page Not Found</h1>
        <p className="text-gray-400">The page you're looking for doesn't exist or has been moved.</p>
      </div>
    </div>
  );
}