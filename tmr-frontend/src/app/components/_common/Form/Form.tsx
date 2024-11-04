'use client';
import React, { createContext, useContext } from 'react';

interface FormContextType {
  isSubmitting: boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormComposition {
  Field: typeof FormField;
  Submit: typeof FormSubmit;
}

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  isSubmitting?: boolean;
}

export const Form: React.FC<FormProps> & FormComposition = ({
  children,
  isSubmitting = false,
  ...props
}) => {
  return (
    <FormContext.Provider value={{ isSubmitting }}>
      <form {...props} className="space-y-6 w-full">
        {children}
      </form>
    </FormContext.Provider>
  );
};

// Form.Field component
const FormField: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="space-y-2">{children}</div>;
};

// Form.Submit component
const FormSubmit: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('Form.Submit must be used within a Form');
  }

  return <div className="flex justify-end">{children}</div>;
};

Form.Field = FormField;
Form.Submit = FormSubmit;
