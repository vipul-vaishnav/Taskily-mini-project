import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Plus from './../icons/Plus';
import { useSelector } from 'react-redux';

const Home = ({ setShowTaskWizard }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="max-w-5xl px-4 py-6 mx-auto">
      <h1 className="mb-2 text-xl font-semibold sm:text-3xl">
        Welcome back! <span className="text-gray-400">{user && user.displayName ? user.displayName : 'User'}</span>{' '}
      </h1>
      <p className="mb-8 font-medium text-gray-400 md:mb-4">Here are all your tasks!</p>
      <section className="md:items-center md:justify-between md:flex md:flex-row-reverse md:gap-20">
        <button
          onClick={() => setShowTaskWizard(true)}
          className="flex items-center justify-center w-full gap-4 py-3 mb-4 font-extrabold tracking-widest text-center text-white uppercase bg-gray-900 border-2 border-gray-900 rounded-lg md:max-w-xs md:mb-0"
        >
          <Plus /> Add new task
        </button>
        <div className="w-full mb-4 md:max-w-md">
          <ul className="flex items-center justify-between border-b-2 border-gray-200">
            <li className="w-full text-center">
              <NavLink
                to="/home/all"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-3 font-semibold uppercase border-gray-900 border-b-4'
                    : 'block py-3 font-semibold uppercase text-gray-400'
                }
              >
                All
              </NavLink>
            </li>
            <li className="w-full text-center">
              <NavLink
                to="/home/todo"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-3 font-semibold uppercase border-gray-900 border-b-4'
                    : 'block py-3 font-semibold uppercase text-gray-400'
                }
              >
                Todo
              </NavLink>
            </li>
            <li className="w-full text-center">
              <NavLink
                to="/home/completed"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-3 font-semibold uppercase border-gray-900 border-b-4'
                    : 'block py-3 font-semibold uppercase text-gray-400'
                }
              >
                Completed
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <Outlet />
    </div>
  );
};

export default Home;
