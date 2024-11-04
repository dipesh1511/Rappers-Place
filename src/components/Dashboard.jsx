import React from "react";
import UserProfile from "./UserProfile";

const Dashboard = ({ user, onUpdate, uploadedBattles, leaderboard }) => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-800">
        Your Dashboard
      </h2>

      {/* User Profile Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <UserProfile user={user} onUpdate={onUpdate} />
      </div>

      {/* Recent Uploads Section */}
      <div className="mb-6">
        <h3 className="text-3xl font-semibold text-purple-600 mb-4">
          Recent Uploads
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {uploadedBattles.length > 0 ? (
            uploadedBattles.map((battle, index) => (
              <li
                key={index}
                className="p-4 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-bold">{battle.title}</h4>
                <p className="text-sm text-gray-600 mb-2">
                  {battle.description}
                </p>
                <audio
                  controls
                  src={battle.file}
                  className="w-full mt-2 rounded-lg"
                />
              </li>
            ))
          ) : (
            <p className="text-center text-gray-300">
              No battles uploaded yet.
            </p>
          )}
        </ul>
      </div>

      {/* Rap Battle Management Section */}
      <div className="mb-6">
        <h3 className="text-3xl font-semibold text-purple-600 mb-4">
          Rap Battle Management
        </h3>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-2">
            Manage your rap battles seamlessly.
          </p>
          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
            Invite for Battle
          </button>
          <p className="mt-3 text-sm text-gray-500">
            Select battle mode, set a timer, and organize your matches!
          </p>
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="mb-6">
        <h3 className="text-3xl font-semibold text-purple-600 mb-4">
          Leaderboard
        </h3>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <ul className="space-y-2">
            {leaderboard && leaderboard.length > 0 ? (
              leaderboard.map((rapper, index) => (
                <li key={index} className="flex justify-between">
                  <span className="font-semibold">{rapper.username}</span>
                  <span className="text-gray-500">Votes: {rapper.votes}</span>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-300">
                No rankings available.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
