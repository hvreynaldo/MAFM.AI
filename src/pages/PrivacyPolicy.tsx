import { useScrollToTop } from '../hooks/useScrollToTop';

export function PrivacyPolicy() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-black/30 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-mono text-purple-400 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-purple max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">Introduction</h2>
            <p className="text-gray-300">
              At MAFM.AI, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">Information We Collect</h2>
            <h3 className="text-xl text-purple-300 mb-2">Personal Information</h3>
            <p className="text-gray-300 mb-4">
              We collect information that you voluntarily provide when using our services, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Email address</li>
              <li>Information provided in forms and correspondence</li>
            </ul>

            <h3 className="text-xl text-purple-300 mb-2">Automatically Collected Information</h3>
            <p className="text-gray-300 mb-4">
              When you visit our website, we automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Usage patterns and preferences</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use the collected information for:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Providing and improving our services</li>
              <li>Communicating with you about our services</li>
              <li>Analyzing and optimizing website performance</li>
              <li>Protecting against unauthorized access and fraud</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organizational security measures to protect your 
              personal information. However, no electronic transmission over the internet or information 
              storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">Third-Party Disclosure</h2>
            <p className="text-gray-300">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as required by law or to trusted partners who assist us in 
              operating our website and providing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">Cookie Policy</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>
            <p className="text-gray-300">
              Types of cookies we use:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">Your Rights</h2>
            <p className="text-gray-300 mb-4">
              Under applicable data protection laws, you have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">Contact Information</h2>
            <p className="text-gray-300">
              For any privacy-related questions or concerns, please contact us at:
            </p>
            <ul className="list-none text-gray-300 mt-2">
              <li>Email: privacy@mafm.ai</li>
              <li>Address: [Your Business Address]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-mono text-purple-400 mb-4">Updates to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. The latest version will always be 
              posted on this page with the effective date.
            </p>
            <p className="text-gray-300 mt-4">
              Last updated: March 20, 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}