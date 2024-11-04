// src/components/SocialEngagement.jsx
import React from "react";

const SocialEngagement = ({ comments, onComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleComment = () => {
    onComment(newComment);
    setNewComment("");
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="font-semibold">Comments & Reactions</h2>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
        className="p-2 border rounded w-full mb-2"
      ></textarea>
      <button
        onClick={handleComment}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Post Comment
      </button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default SocialEngagement;
