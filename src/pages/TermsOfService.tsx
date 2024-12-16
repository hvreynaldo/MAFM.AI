import { useScrollToTop } from '../hooks/useScrollToTop';

export function TermsOfService() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-black/30 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-mono text-purple-400 mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert prose-purple max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300">
              By accessing or using MAFM.AI's services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you 
              are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">2. Use License</h2>
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily access our services for personal, non-commercial use. 
              This license does not include:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Modifying or copying our materials</li>
              <li>Using materials for commercial purposes</li>
              <li>Attempting to reverse engineer any software</li>
              <li>Removing any copyright or proprietary notations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">3. Service Description</h2>
            <p className="text-gray-300 mb-4">
              MAFM.AI provides AI-powered business automation solutions. We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Modify or discontinue services without notice</li>
              <li>Limit service availability to any user or jurisdiction</li>
              <li>Restrict access to or use of any features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">4. User Obligations</h2>
            <p className="text-gray-300 mb-4">Users agree to:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of their account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Use services only for lawful purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-300">
              All content, features, and functionality of our services are owned by MAFM.AI and are 
              protected by international copyright, trademark, patent, trade secret, and other 
              intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-300">
              MAFM.AI shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages resulting from your use or inability to use our services. This includes 
              but is not limited to damages for loss of profits, data, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">7. Termination</h2>
            <p className="text-gray-300">
              We may terminate or suspend your access to our services immediately, without prior notice 
              or liability, for any reason, including breach of these Terms. Upon termination, your 
              right to use our services will cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">8. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of [Your 
              Jurisdiction], without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify or replace these Terms at any time. Material changes will 
              be notified through our website at least 30 days prior to implementation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-mono text-purple-400 mb-4">10. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For any questions regarding these Terms, please contact us at:
            </p>
            <ul className="list-none text-gray-300">
              <li>Email: legal@mafm.ai</li>
              <li>Address: [Your Business Address]</li>
            </ul>
            <p className="text-gray-300 mt-8">
              Version: 1.0<br />
              Last updated: March 20, 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}