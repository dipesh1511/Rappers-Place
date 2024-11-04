import React, { useState } from "react";

const UploadBattle = ({ onUpload }) => {
  // Accept onUpload prop
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      setUploading(true);
      setTimeout(() => {
        setUploading(false);
        setMessage("Upload successful!");
        // Call the onUpload function with the new battle data
        onUpload({ title, description, file: URL.createObjectURL(file) });
        // Reset form fields
        setTitle("");
        setDescription("");
        setFile(null);
        setPreview(null);
      }, 2000);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Upload a Rap Battle
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="title">
              Title
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-semibold"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="file">
              Upload File
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              id="file"
              accept=".mp3,.wav,.mp4"
              onChange={handleFileChange}
              required
            />
            {/* Preview Section */}
            {preview && (
              <div className="mt-4">
                <p className="text-sm text-gray-500">File Preview:</p>
                <audio
                  controls
                  src={preview}
                  className="w-full mt-2 rounded-lg shadow"
                ></audio>
              </div>
            )}
          </div>
          <button
            className={`w-full py-3 rounded-lg ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 transition duration-300"
            } text-white font-semibold`}
            type="submit"
            disabled={uploading}
          >
            {uploading ? (
              <div className="flex items-center justify-center">
                <span className="loader"></span> {/* Loading spinner */}
                <span className="ml-2">Uploading...</span>
              </div>
            ) : (
              "Upload Battle"
            )}
          </button>
          {/* Upload Status Message */}
          {message && (
            <p
              className={`mt-4 text-center ${
                message.includes("successful")
                  ? "text-green-500"
                  : "text-red-500"
              } font-semibold`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default UploadBattle;
