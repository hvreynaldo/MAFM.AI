interface FormInputProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormInput({ 
  type, 
  name, 
  value, 
  placeholder, 
  error, 
  onChange 
}: FormInputProps) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors ${
          error ? 'border-red-500' : 'border-purple-500/30'
        }`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}