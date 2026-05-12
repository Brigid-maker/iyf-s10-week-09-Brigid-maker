import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import Settings from './pages/Settings';
import ModalTest from './pages/ModalTest';
import ContactForm from './pages/ContactForm';
import ComponentsDemo from './pages/ComponentsDemo';
import Timer from './pages/Timer';
import UserSearch from './pages/UserSearch';
import TabsDemo from './pages/TabsDemo';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="about" element={<About />} />
        <Route path="settings" element={<Settings />} />
        <Route path="modal" element={<ModalTest />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="components" element={<ComponentsDemo />} />
        <Route path="timer" element={<Timer />} />
        <Route path="search" element={<UserSearch />} />
        <Route path="tabs" element={<TabsDemo />} />
      </Route>
    </Routes>
  );
}