import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';

export default function Login() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!username.trim()) {
      setError('Username is required');
      return;
    }
    login(username);
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Login</h1>

        <Input
          label="Username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          error={error}
          required
        />

        <Button fullWidth onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
}