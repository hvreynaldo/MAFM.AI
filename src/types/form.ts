export interface FormData {
  name: string;
  email: string;
  company: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
}

export interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  errors: FormErrors;
}