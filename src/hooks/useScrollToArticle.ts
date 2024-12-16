import { useCallback } from 'react';

export function useScrollToArticle() {
  const scrollToArticle = useCallback((articleId: string) => {
    const article = document.getElementById(articleId);
    if (article) {
      const navbarHeight = 64; // Height of the fixed navbar
      const targetPosition = article.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollToArticle;
}