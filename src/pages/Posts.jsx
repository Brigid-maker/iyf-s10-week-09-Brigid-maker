import { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setPosts(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ borderBottom: '1px solid #ccc', marginBottom: 16 }}>
          <h3>{post.title}</h3>
          <p>{post.body.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;