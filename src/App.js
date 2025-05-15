import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

const Home = () => (
  <div className="p-4 text-center">
    <h1 className="text-3xl font-bold mb-4">Nhóm Nghiên Cứu XYZ</h1>
    <p className="text-xl">Chào mừng bạn đến với trang web của nhóm nghiên cứu XYZ!</p>
  </div>
);

const Members = () => (
  <div className="p-4">
    <h2 className="text-2xl font-semibold">Thành viên nhóm</h2>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-xl">
        <img src="/assets/member1.jpg" alt="Member 1" className="w-32 h-32 mx-auto rounded-full" />
        <h3 className="text-xl font-medium">Dr. Nguyễn Văn A</h3>
        <p>Vật liệu từ, Điện hóa</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-xl">
        <img src="/assets/member2.jpg" alt="Member 2" className="w-32 h-32 mx-auto rounded-full" />
        <h3 className="text-xl font-medium">Dr. Trần Thị B</h3>
        <p>Hóa học vật liệu, Ứng dụng</p>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="p-4">
    <h2 className="text-2xl font-semibold">Dự án nghiên cứu</h2>
    <ul className="list-disc ml-6">
      <li>Dự án A: Phát triển vật liệu mới</li>
      <li>Dự án B: Ứng dụng điện hóa trong y sinh</li>
    </ul>
  </div>
);

const App = () => (
  <Router>
    <div className="text-center p-4">
      <nav className="space-x-4">
        <NavLink to="/" className="text-blue-600">Trang chủ</NavLink>
        <NavLink to="/members" className="text-blue-600">Thành viên</NavLink>
        <NavLink to="/projects" className="text-blue-600">Dự án</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  </Router>
);

export default App;
