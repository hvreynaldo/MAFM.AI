import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SplineBackground } from './background/SplineBackground';
import { Navbar } from './navigation/Navbar';
import { Footer } from './layout/Footer';
import { Blog } from '../pages/Blog';
import { BlogPost } from '../pages/BlogPost';
import { HomePage } from '../pages/HomePage';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { TermsOfService } from '../pages/TermsOfService';
import { ConsultationModal } from './consultation/ConsultationModal';
import { useConsultationModal } from '../hooks/useConsultationModal';

export function App() {
  const { isOpen, closeModal } = useConsultationModal();

  return (
    <Router>
      <div className="bg-black/30 min-h-screen relative">
        <SplineBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
        <ConsultationModal isOpen={isOpen} onClose={closeModal} />
      </div>
    </Router>
  );
}