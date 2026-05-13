import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from './Layout/Footer.jsx';

export default function Layout() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white shadow-md px-8 py-4 flex gap-6 items-center">
        <span className="font-bold text-blue-600 text-lg mr-4">CommunityHub</span>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}>Home</NavLink>
        <NavLink to="/posts" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}>Posts</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}>About</NavLink>
        <NavLink to="/create" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}>Create Post</NavLink>

        <div className="ml-auto flex gap-4 items-center">
          {user ? (
            <>
              <span className="text-gray-600">👤 {user.username}</span>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}>Dashboard</NavLink>
            </>
          ) : (
            <NavLink to="/login" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}>Login</NavLink>
          )}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 flex-1 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}