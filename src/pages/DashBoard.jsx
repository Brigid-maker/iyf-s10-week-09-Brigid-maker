import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.username}! 👋
        </h1>
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Posts">
          <p className="text-3xl font-bold text-blue-600">42</p>
          <p className="text-gray-500">Total posts</p>
        </Card>
        <Card title="Followers">
          <p className="text-3xl font-bold text-green-600">128</p>
          <p className="text-gray-500">People following you</p>
        </Card>
        <Card title="Following">
          <p className="text-3xl font-bold text-purple-600">56</p>
          <p className="text-gray-500">People you follow</p>
        </Card>
      </div>
    </div>
  );
}