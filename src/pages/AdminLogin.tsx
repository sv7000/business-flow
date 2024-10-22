import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Credentials {
  username: string;
  password: string;
}

const AdminLogin: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement authentication logic
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      navigate('/admin-dashboard'); // Redirect to a dashboard where admins can manage the site
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Admin Login</h1>
      <form onSubmit={handleLogin} className="space-y-4 mt-4">
        <Input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className="border p-2 w-1/2"
        />
        <Input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="border p-2 w-1/2"
        />
        <p>For viewing purposes, use the username: "admin" and password: "admin".</p>
        <Button type="submit" className="bg-blue-500 text-white py-2 px-4 w-[100px]">
          Login
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
