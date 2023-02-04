
export default function Contact() {
  return (
    <div id="contact" className="overflow-hidden py-16 px-6 lg:px-8 lg:py-44">
      <div className="relative mx-auto max-w-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl flex flex-col items-center gap-3">
              Contact
              <div className="w-8 p-1 bg-accent/60" />
            </h2>

            <p className="text-lg mt-3 text-gray-600">
              Get in touch using this form. Alternatively, you can always reach me on my socials or shoot me an email at <span><a className="underline" href="mailto:msalopek@pm.me?title=Hi, Matija!">msalopek@pm.me</a></span>
            </p>
          </div>
        </div>
        <div className="mt-12 border shadow-lg">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 p-8">
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-gray-700">
                Your Name
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full py-3 px-4 shadow-sm focus:border-accent focus:ring-accent"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full  py-3 px-4 shadow-sm focus:border-accent focus:ring-accent"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full  py-3 px-4 shadow-sm focus:border-accent focus:ring-accent"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    <span className="sr-only">Agree to policies</span>
                    By submitting this form, you agree to share your concact information with me and me only.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center border border-transparent bg-accent px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent focus:outline-none focus:ring-2 focus:bg-accent-focus focus:ring-offset-2"
              >
                Let's chat
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
