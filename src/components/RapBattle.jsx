import React, { useState } from "react";

// Sample rapper images (you can replace these with actual images)
const rapperImages = {
  "MC Stan": "https://play-lh.googleusercontent.com/1PrF1cahZpucy6N6V6OvCveVZGj8C1ydbp7kUNKfvFwSiMmpwQgn1aRjVPm-UU89nWc=w526-h296-rw",
  "DJ Rohit": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvcYPOKh3Lbz8xznEjeAS4WBPRiZ91UsKBA&s",
  "Gabbar Master":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTvY9n991glp2Es8l70JEaacfq6GzTugpng&s",
  "Rap King": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/KIng_1702883730139_1702883730337.jpg",
  "Baba": "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/11/02/Pictures/baba-sehgal_20d1ecb8-a0f8-11e6-93ed-ab826829dd0b.jpg",
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
