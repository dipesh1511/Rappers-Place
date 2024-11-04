import React, { useState } from "react";

// Sample rapper images (you can replace these with actual images)
const rapperImages = {
  "MC Stan": "https://via.placeholder.com/150/FF0000/FFFFFF?text=MC+Stan",
  "DJ Rohit": "https://via.placeholder.com/150/00FF00/FFFFFF?text=DJ+Rohit",
  "Gabbar Master":
    "https://via.placeholder.com/150/0000FF/FFFFFF?text=Gabbar+Master",
  "Rap King": "https://via.placeholder.com/150/FFFF00/FFFFFF?text=Rap+King",
  Baba: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Baba",
};

const RapBattle = () => {
  const [challenges, setChallenges] = useState([]);
  const rappers = ["MC Stan", "DJ Rohit", "Gabbar Master", "Rap King", "Baba"];

  const challengeRapper = (challenger, challenged) => {
    setChallenges([...challenges, `${challenger} challenges ${challenged}`]);
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg mt-16">
      <h2 className="text-4xl font-bold text-center text-white mb-6">
        Rap Battle Challenges
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rappers.map((rapper) => (
          <div
            key={rapper}
            className="bg-white shadow-lg rounded-lg p-2 transition-transform transform hover:scale-105 flex flex-col items-center w-81" // Set medium width
          >
            <img
              src={rapperImages[rapper]}
              alt={rapper}
              className="w-24 h-24 rounded-full mb-4 border-2 border-blue-500"
            />
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              {rapper}
            </h3>
            <p className="text-gray-700 mb-4 text-center">
              Are you ready to battle? Click below to challenge!
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
              onClick={() => challengeRapper("Dipesh", rapper)}
            >
              Challenge {rapper}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h4 className="text-3xl font-bold text-white mb-4">Challenges Sent:</h4>
        <ul className="list-disc list-inside text-white">
          {challenges.length > 0 ? (
            challenges.map((challenge, index) => (
              <li key={index} className="text-lg">
                {challenge}
              </li>
            ))
          ) : (
            <li className="text-lg">No challenges sent yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RapBattle;
