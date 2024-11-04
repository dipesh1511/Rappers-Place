// src/components/Leaderboard.jsx
import React from "react";

const Leaderboard = ({ topRappers }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="font-semibold">Top Rappers</h2>
      <ul>
        {topRappers.map((rapper, index) => (
          <li key={index}>
            {index + 1}. {rapper.username} - {rapper.votes} Votes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
