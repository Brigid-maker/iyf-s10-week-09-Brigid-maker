import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import { useState, useEffect } from 'react';

export default function Home() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecent() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setRecentPosts(data.slice(0, 3));
      setLoading(false);
    }
    fetchRecent();
  }, []);

  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <div className="text-center py-16 bg-white rounded-lg shadow-md">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          CommunityHub
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          A place to share your thoughts, discover new ideas and connect with others.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/posts">
            <Button size="large">Browse Posts</Button>
          </Link>
          <Link to="/create">
            <Button size="large" variant="outline">Create Post</Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 text-center">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-4xl font-bold text-blue-600">100</p>
          <p className="text-gray-500 mt-1">Posts</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-4xl font-bold text-green-600">10</p>
          <p className="text-gray-500 mt-1">Users</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-4xl font-bold text-purple-600">500</p>
          <p className="text-gray-500 mt-1">Comments</p>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Recent Posts</h2>
          <Link to="/posts" className="text-blue-500 hover:text-blue-600 font-medium">
            View all →
          </Link>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading recent posts...</p>
        ) : (
          <div className="space-y-4">
            {recentPosts.map(post => (
              <Link to={`/posts/${post.id}`} key={post.id}>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-800 capitalize mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {post.body.slice(0, 80)}...
                  </p>
                  <p className="text-blue-500 text-sm font-medium mt-2">
                    Read more →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}