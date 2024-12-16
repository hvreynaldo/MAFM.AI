const RECIPIENTS = ['rafa@mafm.pro', 'julian@mafm.pro', 'reynaldo@mafm.pro'];

export async function sendAuditRequest(formData: {
  name: string;
  email: string;
  company: string;
}): Promise<void> {
  // In a real application, this would make an API call to your backend
  // For demo purposes, we'll log the data
  console.log('Sending audit request to:', RECIPIENTS);
  console.log('Form data:', formData);
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
}