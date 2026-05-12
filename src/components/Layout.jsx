import { Outlet, NavLink } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md px-8 py-4 flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'
          }
        >
          Settings
        </NavLink>
        <NavLink
          to="/modal"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'
          }
        >
          Modal
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'
          }
        >
          Contact
        </NavLink>
<NavLink
  to="/components"
  className={({ isActive }) =>
    isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'
  }
>
  Components
</NavLink>
<NavLink
  to="/timer"
  className={({ isActive }) =>
    isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'
  }
>
  Timer
</NavLink>
<NavLink
  to="/search"
  className={({ isActive }) =>
    isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'
  }
>
  Search
</NavLink>
<NavLink
  to="/tabs"
  className={({ isActive }) =>
    isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'
  }
>
  Tabs
</NavLink>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}