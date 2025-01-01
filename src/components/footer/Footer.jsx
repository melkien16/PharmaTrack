import React from "react";
import "devicon/devicon.min.css";

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">PharmaTrack</h3>
          <p className="text-sm">
            Your trusted platform to find medicines and locate the nearest
            pharmacies instantly, anytime, anywhere.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            Sign up now and make your search easier than ever
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary-600 text-white font-semibold rounded-md shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/melkien16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-600 hover:text-primary-900"
            >
              <i className="devicon-facebook-plain"></i>
            </a>
            <a
              href="https://twitter.com/melkien_d12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white dark:text-black-100 dark:hover:text-primary-900 hover:text-primary-900"
            >
              <i className="devicon-twitter-original"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/melkie-yilk-08a862297/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-700 hover:text-primary-900"
            >
              <i className="devicon-linkedin-plain"></i>
            </a>
          </div>
          <p className="text-sm">Email: PharmaTrack@gmail.com</p>
          <p className="text-sm">Phone: +251 946 1572 52</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        © {new Date().getFullYear()} PharmaTrack. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
