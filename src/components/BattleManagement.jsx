// src/components/BattleManagement.jsx
import React, { useState } from "react";

const BattleManagement = ({ onInvite }) => {
  const [opponent, setOpponent] = useState("");
  const [mode, setMode] = useState("freestyle");
  const [timer, setTimer] = useState(3); // in minutes

  const handleInvite = () => {
    onInvite({ opponent, mode, timer });
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="font-semibold">Battle Management</h2>
      <input
        type="text"
        value={opponent}
        onChange={(e) => setOpponent(e.target.value)}
        placeholder="Enter opponent username"
        className="p-2 border rounded w-full mb-2"
      />
      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      >
        <option value="freestyle">Freestyle</option>
        <option value="theme-based">Theme-based</option>
        <option value="timed">Timed rounds</option>
      </select>
      <input
        type="number"
        value={timer}
        onChange={(e) => setTimer(e.target.value)}
        placeholder="Set battle timer (minutes)"
        className="p-2 border rounded w-full mb-2"
      />
      <button
        onClick={handleInvite}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Send Battle Invite
      </button>
    </div>
  );
};

export default BattleManagement;
