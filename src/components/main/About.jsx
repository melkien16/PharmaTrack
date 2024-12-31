import React from "react";
import IMG0 from "/images/pm0.jpg";
import IMG1 from "/images/pm1.jpg";
import IMG2 from "/images/pm2.jpg";
import DR1 from "/images/dr1.jpg";
import DR2 from "/images/dr2.jpg";
import DR3 from "/images/dr3.jpg";

const About = () => {
  return (
    <div className="p-10 bg-secondary-200">
      <h1 className="text-center text-4xl font-extrabold m-8 text-gray-800">
        Why Choose Us?
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="max-w-sm m-4 p-6 bg-white rounded-lg shadow-lg">
          <img src={DR3} alt="Fast and Reliable" className="rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">
            Fast and Reliable
          </h2>
          <p className="mt-2 text-gray-600">
            Search and find pharmacies with real-time updates
          </p>
        </div>
        <div className="max-w-sm m-4 p-6 bg-white rounded-lg shadow-lg">
          <img src={DR1} alt="Wide Coverage" className="rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">
            Wide Coverage
          </h2>
          <p className="mt-2 text-gray-600">
            Locate pharmacies across multiple cities
          </p>
        </div>
        <div className="max-w-sm m-4 p-6 bg-white rounded-lg shadow-lg">
          <img
            src={DR2}
            alt="Accurate Information"
            className="rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-700">
            Accurate Information
          </h2>
          <p className="mt-2 text-gray-600">
            Up-to-date drug availability and pricing
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
