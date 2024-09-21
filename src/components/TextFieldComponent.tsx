import { ChangeEvent } from 'react';
import { Input } from './ui/input';

interface TextFieldComponentProps {
  label: string;
  required?: boolean;
  inputValue: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldComponent: React.FC<TextFieldComponentProps> = ({
  label,
  required = false,
  inputValue,
  type = 'text',
  placeholder = 'Enter text here',
  errorMessage,
  handleInputChange,
}) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="mb-4 flex w-full flex-col space-y-2">
        <label htmlFor="textfield" className="text-sm font-medium text-gray-700">
          {label}
        </label>
        {/* <input
          required={required}
          id="textfield"
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          className={`w-full border px-4 py-2 ${
            errorMessage ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
        /> */}
        <Input
          type={type}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          required
        />
        {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default TextFieldComponent;
