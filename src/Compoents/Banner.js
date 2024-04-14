import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../images/profile.jpeg'
function Banner() {
  return (
    <div className="banner flex justify-between items-center top-0 left-0  bg-gray-100">
        
      <div className="banner-content w-1/2 flex flex-col justify-center px-10">
        <h1 className="banner-title text-4xl font-bold text-gray-800 mb-4">Bahabelom G.</h1> {/* Replace with your name */}
        <h3 className="banner-subtitle text-xl text-gray-700 mb-4">Motivated Computer Science Graduate</h3>
        <p className="banner-description text-base text-gray-600 mb-8">
          An eager and skilled developer with a strong foundation in troubleshooting, software development,
          and communication. Seeking to leverage technical expertise in a Technical Support Specialist
          role at AZ technology PLC.
        </p>
        <div className="banner-buttons flex space-x-2">
          <Link to="/about" className="button px-4 py-2 bg-blue-500 text-white font-bold rounded-md">About Me</Link>
          <Link to="/projects" className="button px-4 py-2 border border-blue-500 text-blue-500 font-bold rounded-md">Projects</Link>
        </div>
      </div>
      <div className="banner-image w-1/2 hidden md:block"> {/* Hide image on small screens */}
      <img
          src={profile}// Replace with your image path
          alt="Bahabelom Gebremedhn"
          className="profile-image rounded-full mx-auto"
          style={{ width: '400px', height: '400px' }}
        />
      </div>
    </div>
  );
}

export default Banner;
