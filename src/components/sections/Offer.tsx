import { useState } from 'react';
import { FormInput } from '../form/FormInput';
import { validateFormData } from '../../utils/validation';
import { sendAuditRequest } from '../../utils/email';
import type { FormData, FormErrors, FormState } from '../../types/form';

export function Offer() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: ''
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    errors: {}
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formState.errors[name as keyof FormErrors]) {
      setFormState(prev => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: undefined
        }
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors
      }));
      return;
    }

    // Submit form
    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      errors: {}
    }));

    try {
      await sendAuditRequest(formData);
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true
      }));
      // Reset form
      setFormData({ name: '', email: '', company: '' });
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        errors: {
          submit: 'Failed to submit form. Please try again.'
        }
      }));
    }
  };

  if (formState.isSubmitted) {
    return (
      <section id="offer-section" className="py-24 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-mono text-purple-400 mb-6">
              Thank You!
            </h2>
            <p className="text-xl text-white mb-8">
              Your audit request has been received. We'll be in touch shortly!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="offer-section" className="py-24 bg-black/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-mono text-purple-400 mb-6">
            _LIMITED TIME OFFER
          </h2>
          <p className="text-2xl text-white mb-8">
            Get a Free AI Workflow Audit Worth $1,500
          </p>
          <p className="text-gray-400 mb-12">
            Discover hidden inefficiencies, receive a custom report, and unlock your business's full potential with our comprehensive AI analysis.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <FormInput
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              error={formState.errors.name}
              onChange={handleChange}
            />
            <FormInput
              type="email"
              name="email"
              value={formData.email}
              placeholder="Work Email"
              error={formState.errors.email}
              onChange={handleChange}
            />
            <FormInput
              type="text"
              name="company"
              value={formData.company}
              placeholder="Company Name"
              error={formState.errors.company}
              onChange={handleChange}
            />
            
            {formState.errors.submit && (
              <p className="text-red-500 text-sm text-center">
                {formState.errors.submit}
              </p>
            )}
            
            <button
              type="submit"
              disabled={formState.isSubmitting}
              className={`w-full px-8 py-4 bg-purple-600 text-white font-mono rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                formState.isSubmitting ? 'animate-pulse' : 'hover:bg-purple-500'
              }`}
            >
              {formState.isSubmitting ? 'Submitting...' : 'Claim Your Free Audit'}
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-6">
            * Limited to first 50 companies. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}