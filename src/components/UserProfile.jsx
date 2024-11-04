// src/components/UserProfile.jsx
import React, { useState } from "react";

const UserProfile = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(user.username);
  const [newBio, setNewBio] = useState(user.bio);
  const [newProfilePicture, setNewProfilePicture] = useState(
    user.profilePicture
  );

  const handleEdit = () => {
    onUpdate({
      ...user,
      username: newUsername,
      bio: newBio,
      profilePicture: newProfilePicture,
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-3xl font-bold mb-4">{user.username}'s Profile</h2>
      <div className="flex items-center mb-4">
        <img
          src={newProfilePicture || "default-avatar.png"}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4 border-2 border-blue-500"
        />
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setNewProfilePicture(URL.createObjectURL(e.target.files[0]))
            }
            className="hidden"
            id="profilePictureInput"
          />
        )}
        <label
          htmlFor="profilePictureInput"
          className="cursor-pointer text-blue-500 underline"
        >
          Change Profile Picture
        </label>
      </div>

      {isEditing ? (
        <>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="Edit your name"
          />
          <h3 className="text-xl font-semibold mb-2">Edit Bio:</h3>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleEdit}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p className="text-gray-600 mb-2">
            {user.bio || "No bio available."}
          </p>
          <h3 className="text-xl font-semibold">
            Rapper Name: {user.username}
          </h3>
          <h3 className="text-xl font-semibold">
            Number of Uploads: {user.uploads}
          </h3>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
