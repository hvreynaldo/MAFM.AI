import { useState } from 'react';
import { Modal } from '../modal/Modal';
import { FormInput } from '../form/FormInput';
import { validateFormData } from '../../utils/validation';
import { sendAuditRequest } from '../../utils/email';
import type { FormData, FormState } from '../../types/form';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
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
    if (formState.errors[name as keyof FormData]) {
      setFormState(prev => ({
        ...prev,
        errors: { ...prev.errors, [name]: undefined }
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({ ...prev, errors }));
      return;
    }

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
      setTimeout(() => {
        onClose();
        setFormData({ name: '', email: '', company: '' });
        setFormState(prev => ({ ...prev, isSubmitted: false }));
      }, 2000);
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        errors: { submit: 'Failed to submit form. Please try again.' }
      }));
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Schedule Your Free Consultation"
    >
      {formState.isSubmitted ? (
        <div className="text-center">
          <p className="text-green-400 mb-4">
            Thank you! Your consultation request has been received.
          </p>
          <p className="text-gray-400">
            We'll be in touch with you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className={`w-full px-6 py-3 bg-purple-600 text-white font-mono rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
              formState.isSubmitting ? 'animate-pulse' : 'hover:bg-purple-500'
            }`}
          >
            {formState.isSubmitting ? 'Submitting...' : 'Request Consultation'}
          </button>
        </form>
      )}
    </Modal>
  );
}