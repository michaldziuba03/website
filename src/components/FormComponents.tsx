import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  className?: string;
}

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder: string;
  className?: string;
}

const baseInputClasses = "bg-white p-4 rounded-lg focus:border-primary border-gray-300 focus:ring-primary focus:outline-none border-2";
const baseTextareaClasses = "bg-white border-gray-300 p-4 w-full rounded-lg focus:border-primary focus:ring-primary focus:outline-none border-2 resize-y";

export function FormInput({ className = '', ...props }: FormInputProps) {
  return (
    <input
      className={`${baseInputClasses} ${className}`}
      {...props}
    />
  );
}

export function FormTextarea({ className = '', ...props }: FormTextareaProps) {
  return (
    <textarea
      className={`${baseTextareaClasses} ${className}`}
      {...props}
    />
  );
}
