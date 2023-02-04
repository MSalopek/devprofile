'use client';

import { useForm, ValidationError } from '@formspree/react';
import { AnimatedSuccesCheckmark } from './Icons';


export default function Contact() {
  const fspree = process.env.NEXT_PUBLIC_FORMSPREE_ID || ""
  const [state, handleSubmit] = useForm(fspree);

  return (
    <div id="contact" className="w-full h-screen lg:h-screen py-16 px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl flex flex-col items-center gap-3">
              Contact
              <div className="w-8 p-1 bg-accent/60" />
            </h2>

            <p className="text-lg mt-3 text-gray-600 dark:text-gray-300">
              Get in touch using this form. Alternatively, you can always reach me on my socials or shoot me an email at{' '}
              <span><a className="underline" href="mailto:msalopek@pm.me?title=Hi, Matija!">msalopek@pm.me</a></span>
            </p>
          </div>
        </div>
        {state.succeeded
          ? <AnimatedSuccesCheckmark />
          : (
            <form onSubmit={handleSubmit} className="mt-12 border dark:border-gray-500 shadow-lg bg-base-300">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 p-8">
                <div className="sm:col-span-2">
                  <div className="mt-1 hidden">
                    <input
                      id="type"
                      name="type"
                      type="text"
                      required
                      defaultValue={"contact"}
                    />
                  </div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="block w-full py-3 px-4 shadow-sm focus:border-accent focus:ring-accent dark:bg-base-100"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full py-3 px-4 shadow-sm focus:border-accent focus:ring-accent dark:bg-base-100"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="block w-full py-3 px-4 shadow-sm focus:border-accent focus:ring-accent dark:bg-base-100"
                      defaultValue={''}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex items-start">
                    <div className="ml-3">
                      <p className="text-base text-gray-500 dark:text-gray-300">
                        <span className="sr-only">Agree to policies</span>
                        By submitting this form, you agree to share your concact information with me and me only.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex w-full items-center justify-center border border-transparent bg-accent px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent focus:outline-none focus:ring-2 focus:bg-accent-focus focus:ring-offset-2"
                  >
                    {state.submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting
                      </>
                    ) : "Let's chat"
                    }
                  </button>
                </div>
              </div>
            </form>
          )}
      </div>
    </div>
  )
}
