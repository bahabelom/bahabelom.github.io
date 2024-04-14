import React from 'react';
import p1 from '../images/1.png'; // Import the image


const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
       
          <div className="bg-gray-800 text-white px-4 py-2">
            <h2 className="text-xl font-semibold">Tigrigna Encryption App</h2>
          </div>
          <img
            className="w-full h-80 object-cover object-center py-4"
            src={p1}
            alt="Tigrigna Encryption App"
          />
          <div className="p-6">
            <p className="text-gray-700">
              A mobile application that encrypts and decrypts Tigrigna messages to characters and vice versa.
            </p>
            <a href="/tigrigna-encryption" className="text-blue-500 font-semibold hover:text-blue-700">Learn more</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
       
          <div className="bg-gray-800 text-white px-4 py-2">
            <h2 className="text-xl font-semibold">Instructors Evaluation System</h2>
          </div>
          <img
            className="w-full h-80 object-cover object-center py-4"
            src="https://th.bing.com/th/id/OIP.8AWUm9f7zVt9hQ2vsd9NOQHaFS?w=284&h=203&c=7&r=0&o=5&pid=1.7"
            alt="Instructors Evaluation System"
          />
          <div className="p-6">
            <p className="text-gray-700">
              Web-based application using Laravel framework (MVC concept). Developed features for user registration, login, data entry, and report generation.
            </p>
            <a href="/instructors-evaluation-system" className="text-blue-500 font-semibold hover:text-blue-700">Learn more</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-800 text-white px-4  py-4">
            <h2 className="text-xl font-semibold">Online Healthcare System</h2>
          </div>
          <img
            className="w-full h-80 object-cover object-center py-4"
            src="https://th.bing.com/th/id/OIP.gxWMS8-emSD47L61IjRjEgHaD6?w=324&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Online Healthcare System"
          />
          <div className="p-6">
            <p className="text-gray-700">
            An Android application for booking appointments, accessing medical records, and contacting healthcare providers.
            </p>
            <a href="/online-healthcare-system" className="text-blue-500 font-semibold hover:text-blue-700">Learn more</a>
          </div>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
