export interface InputProps {
  value: string;
  onChange: (event: React.ReactEventHandler) => void;
  placeholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  maxLength?: number;
  pattern?: string;
  errorMessage?: string;
  onValidate?: (target: HTMLInputElement) => boolean;
  onError?: (boolean) => void;
}
