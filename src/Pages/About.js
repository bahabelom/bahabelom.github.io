import React from 'react';
import profile from '../images/profile.jpeg';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg flex flex-col justify-center items-center md:items-start">
          <img
            className="w-48 h-48 rounded-full object-cover mb-4"
            src={profile}
            alt="Bahabelom"
          />
          <div className="p-6 text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Bahabelom G.</h2>
            <p className="text-gray-700">
              Hi! I'm Bahabelom. I'm a Software Developer with two years of experience in software development. I'm passionate about creating elegant solutions to complex problems and always eager to learn new technologies.
            </p>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Interests & Hobbies</h2>
            <p className="text-gray-700">
              In my free time, I enjoy working on personal projects, exploring new programming languages, and keeping up with the latest trends in technology. I'm also an avid reader and love to travel and explore new places.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
