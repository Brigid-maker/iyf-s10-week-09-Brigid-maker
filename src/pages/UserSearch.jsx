import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/shared/Input';
import Card from '../components/shared/Card';

export default function UserSearch() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users once on mount
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      setFiltered(data);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  // Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      const results = users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results);
    }, 400);

    return () => clearTimeout(timeout);
  }, [query, users]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">User Search</h1>

      <Input
        name="search"
        placeholder="Search by name or email..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {loading && <p className="text-gray-500">Loading users...</p>}

      {!loading && filtered.length === 0 && (
        <p className="text-gray-500">No users found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(user => (
          <Link to={`/users/${user.id}`} key={user.id}>
            <Card>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <p className="text-sm text-gray-500">{user.phone}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}