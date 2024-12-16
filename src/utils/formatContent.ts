export function formatContent(content: string): string[] {
  // Remove leading/trailing whitespace and split by double newlines
  return content
    .trim()
    .split('\n\n')
    .map(paragraph => paragraph.trim())
    .filter(paragraph => paragraph.length > 0);
}