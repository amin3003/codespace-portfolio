'use client';

import React, { useState, useRef, useEffect } from 'react';
import TextField from '../TextField/TextField';
import clsx from 'clsx';
import { submitRequest, CustomFormData } from '../../../actions/formAction';
import { useLocale } from 'next-intl';
import { defaultLocale, localeNames } from '@/i18nConfig';
import Button from '../Button/Button';
import Image from 'next/image';

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);
  const locale = useLocale();
  const currentLocaleName = localeNames[locale] || localeNames[defaultLocale];

  const [formData, setFormData] = useState<any>({
    fullname: undefined,
    email: undefined,
    desc: undefined,
  });

  const [errors, setErrors] = useState<Partial<CustomFormData>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitRequest(formData);
    ref.current?.reset();
    setFormData({
      fullname: undefined,
      email: undefined,
      desc: undefined,
    });
  };

  const isValidEmail = (email: string) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  useEffect(() => {
    // Validation
    const newErrors: Partial<CustomFormData> = {};
    if (formData.fullname != undefined && formData.fullname.trim() === '') {
      newErrors.fullname = 'Full name is required';
    }
    if (formData.email != undefined) {
      if (formData.email.trim() === '') {
        newErrors.email = 'Email is required';
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
    }
    if (formData.desc != undefined && formData.desc.trim() === '') {
      newErrors.desc = 'Description is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [formData]);

  return (
    <div>
      <form
        ref={ref}
        onSubmit={handleSubmit}
        method="post"
        name="contact-form"
        className={clsx('flex flex-row')}
      >
        <div className="gap-4 flex flex-col flex-[4]">
          <TextField
            name="fullname"
            value={formData.fullname??""}
            onChange={handleInputChange}
            placeholder={`${
              currentLocaleName === 'English' ? 'Full Name' : 'Adınız Soyadınız'
            }`}
            className={clsx('w-full', errors.fullname && 'border-red-500')}
          />
          {errors.fullname && (
            <span className="text-red-500">{errors.fullname}</span>
          )}
          <TextField
            name="email"
            value={formData.email??""}
            onChange={handleInputChange}
            placeholder={`${
              currentLocaleName === 'English' ? 'Email' : 'E-posta'
            }`}
            className={clsx('w-full', errors.email && 'border-red-500')}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <textarea
            name="desc"
            value={formData.desc??""}
            onChange={handleInputChange}
            className={clsx(
              'textarea textarea-md textarea-bordered resize-none h-[200px] w-full',
              'text-white',
              errors.desc && 'border-red-500'
            )}
            placeholder={`${
              currentLocaleName === 'English'
                ? "Welcome to code space, where we're dedicated to providing top-notch services tailored to your needs. Our team is committed to delivering exceptional results and exceeding your expectations."
                : "İhtiyaçlarınıza göre uyarlanmış birinci sınıf hizmetler sunmaya kendimizi adadığımız code space'a hoş geldiniz. Ekibimiz olağanüstü sonuçlar sunmaya ve beklentilerinizi aşmaya kendini adamıştır."
            }`}
          />
          {errors.desc && <span className="text-red-500">{errors.desc}</span>}
          <Button
            disabled={
              Object.keys(errors).length > 0 ||
              !formData.fullname ||
              !formData.email ||
              !formData.desc
            }
          />
        </div>
        <div className="flex-[5] hidden md:flex justify-center">
          <Image
            style={{ maxWidth: '70%' }}
            src={`/images/contact.svg`}
            width={400}
            height={400}
            alt="contact"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
