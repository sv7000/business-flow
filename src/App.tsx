import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  PhoneIcon,
  CogIcon,
  NewspaperIcon,
  LockClosedIcon,
  MenuIcon,
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import AdminLogin from "./pages/AdminLogin";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";

const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({
  isOpen,
  toggleSidebar,
}) => {
  const menuItems = [
    { name: "Home", icon: HomeIcon, path: "/" },
    { name: "About Us", icon: UserGroupIcon, path: "/about-us" },
    { name: "Contact Us", icon: PhoneIcon, path: "/contact-us" },
    { name: "Services", icon: CogIcon, path: "/services" },
    { name: "Blog", icon: NewspaperIcon, path: "/blog" },
    { name: "Admin Login", icon: LockClosedIcon, path: "/admin-login" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 bg-gray-800 text-white transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      } lg:relative`}
    >
      <div className="flex items-center justify-between p-4">
        {isOpen && <h2 className="text-2xl font-bold">WebName</h2>}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-9 bg-gray-800 text-white p-1 rounded-full"
        >
          {isOpen ? (
            <ChevronLeftIcon className="w-4 h-4" />
          ) : (
            <ChevronRightIcon className="w-4 h-4" />
          )}
        </button>
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-2 hover:bg-gray-700 ${
                  isOpen ? "" : "justify-center"
                }`}
              >
                <item.icon className={`w-6 h-6 ${isOpen ? "mr-2" : ""}`} />
                {isOpen && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          <header className="bg-gray-100 p-4 flex items-center justify-between">
            <button onClick={toggleSidebar} className="lg:hidden">
              <MenuIcon className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold">Transforming Ideas into Reality: Your Partner in Success</h1>
          </header>
          <main className="p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-dashboard" element={<Dashboard />} /> 
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
