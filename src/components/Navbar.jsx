import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sun from './../icons/Sun';
import Moon from './../icons/Moon';
import Window from './Window';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [darkMode, setDarkMode] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const navigate = useNavigate();

  const changeMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleClick = () => {
    setShowWindow((prev) => !prev);
  };

  const goToDashboard = () => {
    navigate('/home');
  };

  useEffect(() => {
    if (!user) setShowWindow(false);
  }, [user]);

  return (
    <>
      <header className="relative flex items-center justify-between max-w-5xl px-4 py-4 mx-auto border-b border-gray-200">
        <div>
          <Link to="/" className="text-xl font-extrabold tracking-wider uppercase cursor-default sm:text-2xl">
            Taskily
          </Link>
        </div>
        <nav>
          <ul className="flex items-center justify-between gap-4 sm:gap-8">
            {user && (
              <li>
                <button onClick={goToDashboard} className="text-base font-medium sm:text-lg">
                  Dashboard
                </button>
              </li>
            )}
            {user && (
              <li>
                <button onClick={handleClick} className="text-base font-medium sm:text-lg ">
                  Profile
                </button>
              </li>
            )}
            <li>
              <button onClick={changeMode} className="p-2 text-white align-baseline bg-gray-900 rounded-lg">
                {darkMode ? <Sun /> : <Moon />}
              </button>
            </li>
          </ul>
        </nav>
        {showWindow && <Window />}
      </header>
    </>
  );
};

export default Navbar;
