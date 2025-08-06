// App.jsx
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Wall from "./pages/Wall";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wall" element={<Wall />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </BrowserRouter>
  );
}
