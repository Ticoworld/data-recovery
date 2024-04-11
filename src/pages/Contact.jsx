import React from "react";
import { FiMail, FiSend } from "react-icons/fi";
import { FaTelegram, FaTwitter, FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="">
      <div className="cont-showcase bg-gray-800 text-white py-20 px-8 xl:px-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-center">Contact Us</h2>         
        </div>
        <div className="px-8 pt-7">
          <p className="py-3 text-lg text-blue-900">follow us on</p>
        <div className="flex items-center mb-4 space-x-4">
        <FiMail className="text-xl" />
        <FaTelegram className="text-xl" />
        <FaTwitter className="text-xl" />
        <FaInstagram className="text-xl" />
        <FaFacebook className="text-xl" />
        <FaDiscord className="text-xl" />
      </div>
      <p className="mb-4">
        Need assistance or have a question? Don't hesitate to reach out to us through any of the channels above. We're here to help!
      </p>

      <h3 className="text-xl font-bold mb-4">Send us a message</h3>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6 flex justify-between items-center"
            type="button"
          >
            <FiSend className="mr-2" />
            Send
          </button>
        </div>
                  <p className="text-gray-600 text-sm italic pb-3">Your message will be received. We'll get back to you as soon as possible!</p>
      </form>
        </div>
    </div>
  );
};

export default Contact;
