import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <form className="w-1/3 bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="passwordConfirmation"
            className="block text-gray-700 font-bold"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Confirm your password"
          />
        </div>
        <button className="w-full bg-primary-500 text-white p-3 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
