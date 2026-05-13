import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = (e) => {
    e.preventDefault(); // prevent Link navigation
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <Link to={`/posts/${post.id}`}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
        
        {/* Post Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            {post.userId}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">User {post.userId}</p>
            <p className="text-xs text-gray-400">Post #{post.id}</p>
          </div>
        </div>

        {/* Post Content */}
        <h3 className="font-semibold text-gray-800 capitalize mb-2">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm">
          {post.body.slice(0, 100)}...
        </p>

        {/* Post Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 text-sm font-medium transition-colors
              ${liked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
          >
            {liked ? '❤️' : '🤍'} {likes} Likes
          </button>
          <span className="text-blue-500 text-sm font-medium">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}