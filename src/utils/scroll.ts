export const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(`#${sectionId}`);
  section?.scrollIntoView({ behavior: 'smooth' });
};

export const scrollToOffer = () => scrollToSection('offer-section');
export const scrollToCoreServices = () => scrollToSection('core-services');