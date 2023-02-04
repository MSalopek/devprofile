import { socialLinks } from "./Nav";

export default function Footer() {
  return (
    <footer className="bg-base-200 w-full border-t border-gray-100/30" aria-labelledby="footer-heading" >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-6 pb-8 pt-16 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">Subscribe to my newsletter</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Get notified about my activities, blog posts, software development tips and tricks and more.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 bg-base-100 appearance-none leading-7 text-gray-900 placeholder-gray-400 shadow-sm focus:border-accent focus:ring-accent sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <button
                type="submit"
                className="btn bg-accent rounded-none text-white"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-10 border-t border-gray-100/30 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; 2020-2023 MSalopek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
