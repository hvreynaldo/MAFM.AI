import { useState, useEffect, useCallback } from 'react';

export function useConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const handleLinks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a, button');
      
      if (link?.textContent?.toLowerCase().includes('schedule your free consultation')) {
        e.preventDefault();
        openModal();
      }
    };

    document.addEventListener('click', handleLinks);
    return () => document.removeEventListener('click', handleLinks);
  }, [openModal]);

  return {
    isOpen,
    openModal,
    closeModal
  };
}