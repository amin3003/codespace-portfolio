'use client';
import React from 'react';
import TextField from '../TextField/TextField';
import clsx from 'clsx';
import { submitRequest } from '../../../actions/formAction';
import { useRef } from 'react';
const Form = () => {
    const ref = useRef<HTMLFormElement>(null)
    
  return (
    <div>
      <form
        ref={ref}
        action={async (formData) => {
          await submitRequest(formData);
          ref.current?.reset();
        }}
        method="post"
        name="contact-form"
        className={clsx('flex flex-row')}
      >
        <div className="gap-4 flex flex-col flex-[4]">
          <TextField
            name="fullname"
            placeholder="fullname"
            className="w-full"
          />
          <TextField name="email" placeholder="email" className="w-full" />
          <textarea
            name="desc"
            className={clsx(
              'textarea textarea-md textarea-bordered resize-none h-[200px] w-full',
              'text-white'
            )}
            placeholder="write-about"
          />
          <button type="submit" className="btn btn-primary">
            send
          </button>
        </div>
        <div className="flex-[5] hidden md:flex justify-center">
          <div
            className={clsx(
              'p-5 text-justify bg-base-300 w-[60%] w-max-[500px]',
              'border-t-2 border-t-primary'
            )}
          >
            contact-text
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
