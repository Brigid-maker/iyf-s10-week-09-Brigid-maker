import { useState, useEffect } from 'react';
import PostList from '../components/Post/PostList';
import Input from '../components/shared/Input';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Search filter
  useEffect(() => {
    const timeout = setTimeout(() => {
      const results = posts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results);
    }, 400);
    return () => clearTimeout(timeout);
  }, [query, posts]);

  if (loading) return (
    <div className="flex justify-center py-12">
      <p className="text-gray-500 text-lg">Loading posts...</p>
    </div>
  );

  if (error) return (
    <div className="flex justify-center py-12">
      <p className="text-red-500">Error: {error}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Posts</h1>
        <span className="text-gray-500">{filtered.length} posts</span>
      </div>

      <Input
        name="search"
        placeholder="Search posts..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <PostList posts={filtered} />
    </div>
  );
}