import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileStats from "./ProfileStats";
import EditProfileModal from "./EditProfileModal";

const Dashboard = ({ user, onUpdate, uploadedBattles, leaderboard }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-800">
        Your Dashboard
      </h2>

      {/* Profile Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col items-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold">{user.username}</h3>
          <ProfilePicture
            profilePicture={user.profilePicture}
            onPictureChange={(newPicture) =>
              onUpdate({ ...user, profilePicture: newPicture })
            }
          />
          <h4 className="text-xl font-semibold mt-2">{user.name}</h4>
          <p className="text-gray-600 mb-4">{user.bio}</p>
        </div>

        {/* Stats Section */}
        <ProfileStats
          posts={user.posts}
          followers={user.followers}
          following={user.following}
        />

        {/* Profile Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => setIsEditing(true)}
            className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Edit Profile
          </button>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300">
            Share Profile
          </button>
        </div>
      </div>

      {/* Recent Uploads Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
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

      {/* Leaderboard Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold text-purple-600 mb-4">
          Leaderboard
        </h3>
        <ul className="space-y-2">
          {leaderboard && leaderboard.length > 0 ? (
            leaderboard.map((rapper, index) => (
              <li key={index} className="flex justify-between">
                <span className="font-semibold">{rapper.username}</span>
                <span className="text-gray-500">Votes: {rapper.votes}</span>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-300">No rankings available.</p>
          )}
        </ul>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <EditProfileModal
          user={user}
          onClose={() => setIsEditing(false)}
          onSave={(updatedUser) => {
            onUpdate(updatedUser);
            setIsEditing(false);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
