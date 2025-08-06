import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    `px-4 py-2 rounded-xl text-white hover:-translate-y-0.5 transition-transform duration-150 ${
      pathname === path ? "bg-indigo-500" : "bg-indigo-400"
    }`;

  return (
    <nav className="bg-indigo-600 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">GoalWall 🎯</h1>
      <div className="flex gap-4">
        <Link to="/" className={linkStyle("/")}>Home</Link>
        <Link to="/wall" className={linkStyle("/wall")}>Wall</Link>
        <Link to="/about" className={linkStyle("/about")}>About</Link>
      </div>
    </nav>
  );
}
