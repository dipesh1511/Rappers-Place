// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-8 rounded-lg shadow-lg mt-8">
      <h1 className="text-4xl font-bold text-center mb-6">About Rap Battle</h1>
      <p className="text-lg mb-4">
        Welcome to Rap Battle, the ultimate platform for rap enthusiasts and
        aspiring artists! Here, you can challenge your favorite rappers,
        showcase your skills, and engage with a vibrant community of music
        lovers.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg mb-4">
        At Rap Battle, our mission is to empower artists to express their
        creativity and connect with fans worldwide. We believe in the power of
        music to inspire, unite, and entertain.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>🌟 Challenge your favorite rappers in epic battles!</li>
        <li>🎤 Upload your own rap battles and showcase your talent.</li>
        <li>🌍 Connect with other artists and fans from around the globe.</li>
        <li>
          🏆 Track your progress and climb the ranks in the rap community.
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
      <p className="text-lg mb-4">
        Join us today and be part of a growing community of rap enthusiasts!
        Whether you’re an artist or a fan, there's a place for you here. Let's
        make music together!
      </p>
      <div className="flex justify-center mt-6">
        <button className="bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default About;