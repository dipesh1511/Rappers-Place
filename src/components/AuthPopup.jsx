import React, { useState } from "react";
import Signup from "./Signup"; // Import Signup component
import Login from "./Login"; // Import Login component

const AuthPopup = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(true); // State to toggle between Signup and Login

  const toggleForm = () => {
    setIsSignup(!isSignup); // Toggle between forms
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        {/* Close button styled to be larger */}
        <button
          onClick={onClose} // This function will close the popup
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl p-2" // Increased font size and added padding
          aria-label="Close"
        >
          &times; {/* Cross symbol for close button */}
        </button>
        {isSignup ? (
          <>
            <Signup />
            <p className="text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-blue-500 hover:underline font-semibold"
              >
                Log In
              </button>
            </p>
          </>
        ) : (
          <>
            <Login />
            <p className="text-center mt-4 text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-blue-500 hover:underline font-semibold"
              >
                Sign Up
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPopup;
