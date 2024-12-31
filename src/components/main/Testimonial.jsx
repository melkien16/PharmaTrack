import React from "react";
import Img from "/images/testimonial.jpg";

const Testimonial = () => {
  return (
    <div className="bg-secondary-200 p-28">
      <h1 className="text-4xl font-bold text-center mb-14">
        What Our Users Say
      </h1>
      <div className="flex justify-center space-x-5">
        <div className="w-1/3 p-5 bg-white rounded-lg shadow-lg hover:scale-110 transition-transform duration-500 ease-in-out">
          <p className="text-lg italic text-gray-700">
            <q>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              dignissim, eros sit amet varius tincidunt, odio nunc dictum elit,
              nec fermentum libero nunc sit amet nunc. Nulla facilisi. Nullam
              nec lectus.{" "}
            </q>
          </p>
          <div className="flex items-center mt-5 space-x-5">
            <img
              src={Img}
              alt="Testimonial"
              className="w-20 h-20 rounded-full mr-3"
            />
            <div>
              <h2 className="text-lg font-bold text-gray-900">Jane Doe</h2>
              <p className="text-sm text-gray-600">CTO of Company</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-5 bg-white rounded-lg shadow-lg hover:scale-110 transition-transform duration-500 ease-in-out">
          <p className="text-lg italic text-gray-700">
            <q>
              {"  "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              dignissim, eros sit amet varius tincidunt, odio nunc dictum elit,
              nec fermentum libero nunc sit amet nunc. Nulla facilisi. Nullam
              nec lectus.{"  "}
            </q>
          </p>
          <div className="flex items-center mt-5 space-x-5">
            <img
              src={Img}
              alt="Testimonial"
              className="w-20 h-20 rounded-full mr-3"
            />
            <div>
              <h2 className="text-lg font-bold text-gray-900">Jane Doe</h2>
              <p className="text-sm text-gray-600">CTO of Company</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-5 bg-white rounded-lg shadow-lg hover:scale-110 transition-transform duration-500 ease-in-out">
          <p className="text-lg italic text-gray-700">
            <q>
              {"  "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              dignissim, eros sit amet varius tincidunt, odio nunc dictum elit.
              {"  "}
            </q>
          </p>
          <div className="flex items-center mt-5 space-x-5">
            <img
              src={Img}
              alt="Testimonial"
              className="w-20 h-20 rounded-full mr-3"
            />
            <div>
              <h2 className="text-lg font-bold text-gray-900">Jane Doe</h2>
              <p className="text-sm text-gray-600">CTO of Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
