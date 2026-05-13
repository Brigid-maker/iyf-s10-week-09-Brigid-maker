import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Tabs from '../components/shared/Tabs';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';

export default function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        setLoading(true);
        setError(null);

        const [userRes, postsRes, todosRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
          fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        ]);

        const userData = await userRes.json();
        const postsData = await postsRes.json();
        const todosData = await todosRes.json();

        setUser(userData);
        setPosts(postsData);
        setTodos(todosData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, [userId]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <p className="text-gray-500 text-lg">Loading profile...</p>
    </div>
  );

  if (error) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <p className="text-red-500 text-lg">Error: {error}</p>
      <Button onClick={() => window.location.reload()}>Try Again</Button>
    </div>
  );

  const tabs = [
    {
      label: '👤 Info',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Personal">
            <p><span className="font-medium">Name:</span> {user.name}</p>
            <p><span className="font-medium">Email:</span> {user.email}</p>
            <p><span className="font-medium">Phone:</span> {user.phone}</p>
            <p><span className="font-medium">Website:</span> {user.website}</p>
          </Card>
          <Card title="Address">
            <p><span className="font-medium">Street:</span> {user.address.street}</p>
            <p><span className="font-medium">City:</span> {user.address.city}</p>
            <p><span className="font-medium">Zipcode:</span> {user.address.zipcode}</p>
          </Card>
          <Card title="Company">
            <p><span className="font-medium">Name:</span> {user.company.name}</p>
            <p><span className="font-medium">Catchphrase:</span> {user.company.catchPhrase}</p>
          </Card>
        </div>
      )
    },
    {
      label: `📝 Posts (${posts.length})`,
      content: (
        <div className="space-y-4">
          {posts.map(post => (
            <Card key={post.id}>
              <h3 className="font-semibold text-gray-800 capitalize">{post.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{post.body.slice(0, 100)}...</p>
            </Card>
          ))}
        </div>
      )
    },
    {
      label: `✅ Todos (${todos.length})`,
      content: (
        <div className="space-y-2">
          {todos.map(todo => (
            <div
              key={todo.id}
              className={`flex items-center gap-3 p-3 rounded-lg ${
                todo.completed ? 'bg-green-50' : 'bg-gray-50'
              }`}
            >
              <span className="text-xl">
                {todo.completed ? '✅' : '⬜'}
              </span>
              <p className={todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}>
                {todo.title}
              </p>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
          {user.name.charAt(0)}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">{user.company.name}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <Tabs tabs={tabs} />
      </div>

      <Link to="/search">
        <Button variant="secondary">← Back to Users</Button>
      </Link>
    </div>
  );
}