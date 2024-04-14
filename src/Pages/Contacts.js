import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <ul className="text-gray-700">
            <li><strong>Email:</strong> bahabelomgebremedhn2@gmail.com</li>
            <li><strong>Phone:</strong> +251943633664</li>
            <li><strong>Address:</strong> Mekelle,Tigray, Ethiopia</li>
          </ul>
        </div>
        <form className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
