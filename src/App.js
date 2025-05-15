import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Members from './pages/Members';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <nav className="space-x-4 p-4 bg-gray-100">
        <NavLink to="/" className="text-blue-500">Trang chủ</NavLink>
        <NavLink to="/members" className="text-blue-500">Thành viên</NavLink>
        <NavLink to="/projects" className="text-blue-500">Dự án</NavLink>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
