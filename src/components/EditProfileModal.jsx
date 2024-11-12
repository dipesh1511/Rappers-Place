import React, { useState } from "react";

const EditProfileModal = ({ user, onClose, onSave }) => {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...user, name, bio });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-2xl font-bold mb-4">Edit Profile</h3>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 mb-4 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            className="w-full p-2 mb-4 border rounded-lg"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
