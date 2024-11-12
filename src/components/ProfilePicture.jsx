import React from "react";

const ProfilePicture = ({ profilePicture, onPictureChange }) => {
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onPictureChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-24 h-24 mt-2">
      <img
        src={profilePicture}
        alt="Profile"
        className="w-full h-full rounded-full border border-gray-300"
      />
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="profilePictureInput"
        onChange={handleProfilePictureChange}
      />
      <button
        onClick={() => document.getElementById("profilePictureInput").click()}
        className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full"
      >
        +
      </button>
    </div>
  );
};

export default ProfilePicture;
