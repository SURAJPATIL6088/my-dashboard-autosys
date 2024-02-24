import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import About from "./About.jsx";
import Charts from "./charts.jsx";
import Home from "./Home.jsx";
import DashboardWidgets from "./Widget.jsx";

function Header() {
  return (
    <Router>
      <div className="w-full h-full bg-gradient-to-r from-green-200 to-blue-300 text-gray-800 overflow-auto">
        <nav className=" bg-gradient-to-r from-green-300 to-blue-400 p-4 m-3 sm:p-6 md:p-8 lg:p-10 flex justify-between items-center rounded-md">
          <NavLink className="text-black text-2xl font-bold">
            My Dashboard
          </NavLink>
          <ul className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `text-black hover:text-white ${
                    isActive ? "text-red-600" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/charts"
                className={({ isActive }) =>
                  `text-black hover:text-white ${
                    isActive ? "text-red-600" : ""
                  }`
                }
              >
                Charts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/widgets"
                className={({ isActive }) =>
                  `text-black hover:text-white ${
                    isActive ? "text-red-600" : ""
                  }`
                }
              >
                Widgets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-black hover:text-white and ${
                    isActive ? "text-red-600" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/widgets" element={<DashboardWidgets />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Header;
