import React, { useState } from "react";
import AuthPopup from "./AuthPopup";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  // Sample data for rap battles
  const rapBattles = [
    {
      id: 1,
      title: "Epic Battle of the Year",
      description: "An epic showdown between two legends in the rap game.",
      author: "MC Flow",
      date: "October 30, 2024",
      image: "../assets/event.jpg",
    },
    {
      id: 2,
      title: "Rap Battle: Street Kings",
      description: "The streets are alive with this intense rap battle.",
      author: "DJ Beats",
      date: "November 1, 2024",
      image: "../assets/rapper2.jpg",
    },
    {
      id: 3,
      title: "Rhyme Warriors: Clash of Titans",
      description: "Two titans clash in this ultimate rap showdown.",
      author: "Rhythm Master",
      date: "November 2, 2024",
      image: "../assets/rapper1.jpg",
    },
    {
      id: 4,
      title: "The Underdog's Rise",
      description: "Witness the journey of an underdog in the rap world.",
      author: "Lyrical Genius",
      date: "November 3, 2024",
      image: "../assets/rapper3.jpg",
    },
    {
      id: 5,
      title: "Battle of the Generations",
      description: "Old school meets new school in this epic clash.",
      author: "Old Skool",
      date: "November 4, 2024",
      image: "../assets/rapper4.jpg",
    },
    {
      id: 6,
      title: "Rap Royalty: Kings vs. Queens",
      description: "The ultimate showdown between rap's finest.",
      author: "Queen Bee",
      date: "November 5, 2024",
      image: "../assets/rapper5.jpg",
    },
    {
      id: 7,
      title: "The Realest vs. The Fake",
      description: "A battle that separates the real from the fake.",
      author: "Real Talk",
      date: "November 6, 2024",
      image: "../assets/rapper6.jpg",
    },
    {
      id: 8,
      title: "Barz Over Everything",
      description: "A lyrical battle to prove who reigns supreme.",
      author: "Bar King",
      date: "November 7, 2024",
      image: "../assets/rapper7.jpg",
    },
    {
      id: 9,
      title: "Verses of Valor",
      description: "In this battle, courage speaks louder than words.",
      author: "Valor MC",
      date: "November 8, 2024",
      image: "../assets/rapper8.jpg",
    },
    {
      id: 10,
      title: "Unleashed Rhymes",
      description: "Unfiltered and raw, this battle showcases true talent.",
      author: "Raw Spitter",
      date: "November 9, 2024",
      image: "../assets/rapper9.jpg",
    },
    {
      id: 11,
      title: "The Beatdown",
      description: "An intense competition with heavy beats and tight rhymes.",
      author: "Beat Master",
      date: "November 10, 2024",
      image: "../assets/rapper10.jpg",
    },
    {
      id: 12,
      title: "Hip Hop's Finest",
      description: "Celebrating the best in the rap industry.",
      author: "Hip Hop Legend",
      date: "November 11, 2024",
      image: "../assets/rapper11.jpg",
    },
    {
      id: 13,
      title: "Rhythm & Rhyme",
      description: "Where rhythm meets rhyme for an unforgettable battle.",
      author: "Rhythm Artist",
      date: "November 12, 2024",
      image: "../assets/rapper12.jpg",
    },
    {
      id: 14,
      title: "Words That Win",
      description: "A battle to see who can deliver the best lines.",
      author: "Wordsmith",
      date: "November 13, 2024",
      image: "../assets/rapper13.jpg",
    },
    {
      id: 15,
      title: "Sound Clash: The Finale",
      description: "A grand finale to determine the ultimate champion.",
      author: "Champion MC",
      date: "November 14, 2024",
      image: "../assets/rapper14.jpg",
    },
  ];

  const handleShowPopup = () => {
    setShowPopup(true); // Show the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="container mx-auto p-4 mt-16 scroll-smooth">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-700 to-blue-500 text-white text-center shadow-lg rounded-lg p-10 mb-12">
        <h1 className="text-6xl font-extrabold mb-4 animate-fadeInDown">
          Join the Rap Battle Revolution!
        </h1>
        <p className="text-lg mb-6 max-w-lg animate-fadeInUp">
          Showcase your skills, battle with the best, and become a legend in the
          rap world.
        </p>
        <button
          onClick={handleShowPopup}
          className="bg-white text-blue-600 px-8 py-4 rounded-full shadow-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105 font-semibold"
          aria-label="Get Started"
        >
          Get Started
        </button>
      </div>
      {/* Recent Rap Battles Section */}
      <h2 className="text-4xl font-bold text-center text-gray-800 my-10">
        Recent Rap Battles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {rapBattles.map((battle) => (
          <div
            key={battle.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={battle.image}
              alt={battle.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">
                {battle.title}
              </h3>
              <p className="text-gray-700 mb-4">{battle.description}</p>
              <div className="text-gray-500 text-sm mt-2">
                <span className="font-semibold">{battle.author}</span> <br />
                <span>{battle.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Popup */}
      {showPopup && <AuthPopup onClose={handleClosePopup} />}{" "}
      {/* Render the popup if showPopup is true */}
    </div>
  );
};

export default Home;
