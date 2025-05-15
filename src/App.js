import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="p-5 bg-gray-100">
        <nav className="mb-5">
          <Link to="/" className="mr-4 text-blue-600">Trang chủ</Link>
          <Link to="/members" className="mr-4 text-blue-600">Thành viên</Link>
          <Link to="/projects" className="text-blue-600">Đề tài</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
