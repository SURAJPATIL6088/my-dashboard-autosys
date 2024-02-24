import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4">
      <div className="container mx-auto">
        <div className="sm:flex sm:justify-between">
          <div className="text-center text-black sm:text-left py-4 sm:py-0">
            <h2 className="text-xl font-semibold">My Dashboard</h2>
            <p className="text-sm">
              Your one-stop solution for managing your tasks efficiently.
            </p>
            <p className="text-sm">
              Stay organized and improve productivity with My Dashboard.
            </p>
          </div>
          <div className="text-sm mt-4 sm:mt-0 text-center text-black sm:text-right">
            <a
              href="https://www.linkedin.com/in/suraj-patil-692451205"
              target="_blank"
              className="hover:text-white mr-3 cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SURAJPATIL6088"
              target="_blank"
              className="mr-3 hover:text-white cursor-pointer"
            >
              Github
            </a>
            <a
              href="https://leetcode.com/SurajPatil6088"
              target="_blank"
              className="mr-3 hover:text-white cursor-pointer"
            >
              LeetCode
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/surajpatil3941"
              target="_blank"
              className="hover:text-white cursor-pointer"
            >
              GeeksForGeeks
            </a>
          </div>
        </div>
        <div className="mt-4 m-2 text-center cursor-pointer">
          <a href="/home" className="text-black text-sm mr-2 hover:text-white">
            Home
          </a>
          <a
            href="/charts"
            className="text-black text-sm mr-2 hover:text-white"
          >
            Charts
          </a>
          <a
            href="/widgets"
            className="text-black text-sm mr-2 hover:text-white"
          >
            Widgets
          </a>
          <a href="/about" className="text-black text-sm hover:text-white ">
            About
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
