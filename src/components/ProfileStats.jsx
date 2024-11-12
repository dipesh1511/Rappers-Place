import React from "react";

const ProfileStats = ({ posts, followers, following }) => (
  <div className="flex space-x-8 mb-4">
    <div className="text-center">
      <span className="font-bold text-xl">{posts}</span>
      <p className="text-gray-600">Posts</p>
    </div>
    <div className="text-center">
      <span className="font-bold text-xl">{followers}</span>
      <p className="text-gray-600">Followers</p>
    </div>
    <div className="text-center">
      <span className="font-bold text-xl">{following}</span>
      <p className="text-gray-600">Following</p>
    </div>
  </div>
);

export default ProfileStats;
