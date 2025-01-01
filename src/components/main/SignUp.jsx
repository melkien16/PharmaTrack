import React from "react";
import Img from "/contactImg/major.png";
import BG from "/contactImg/bg1.png";
import BG2 from "/contactImg/BG2.png";

const SignUp = () => {
  return (
    <div className="p-16 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Ready to Get Started?
      </h1>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Img}
            alt="Sign Up Illustration"
            className="rounded-lg max-w-sm lg:max-w-md z-10"
          />
        </div>
        <div className="w-full lg:w-1/2 p-8 flex flex-col gap-6 items-center justify-center relative">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 z-10 mx-10">
            Join thousands of users finding medicines effortlessly every day
          </h2>
          <img
            src={BG}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <form className="space-y-6 w-3/4 z-10 rounded-lg shadow-2xl p-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label
                htmlFor="passwordConfirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm your password"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <button
                type="submit"
                className="w-full lg:w-auto bg-blue-600 text-white font-medium py-2 px-8 rounded-xl hover:bg-blue-700 transition"
              >
                Sign Up Now
              </button>
              <button
                type="button"
                className="w-full lg:w-auto border-2 border-blue-600 text-blue-600 font-medium py-2 px-8 rounded-xl hover:bg-blue-600 hover:text-white transition"
              >
                Learn More
              </button>
            </div>
            <p className="text-lg text-black mt-4 lg:mt-10">
              Already have an account?{" "}
              <a href="/signin" className="text-blue-600 hover:underline">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
