import React from 'react';
import { defaultLocale, localeNames } from '@/i18nConfig';
import { useLocale } from 'next-intl';
import { useFormStatus } from 'react-dom';

interface ButtonProps {
  disabled?: boolean; // Define the type of disabled prop explicitly
}

const Button: React.FC<ButtonProps> = ({ disabled }) => {
  const { pending } = useFormStatus();
  const locale = useLocale();
  const currentLocaleName = localeNames[locale] || localeNames[defaultLocale];

  return (
    <button 
      type="submit" 
      aria-disabled={pending || disabled} 
      className="btn btn-primary"
      disabled={disabled} 
    >
      {pending ? (
       <span className="loading loading-dots loading-lg text-white"></span>
      ) : (
        `${currentLocaleName==="English"? "Send":"Gönder"}`
      )}
    </button>
  );
};

export default Button;
