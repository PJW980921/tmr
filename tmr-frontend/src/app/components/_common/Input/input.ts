export type InputType = 'email' | 'password' | 'text';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  label: string;
  error?: string;
}
