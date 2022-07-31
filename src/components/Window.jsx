import React, { useState, useEffect } from 'react';
import Logout from './../icons/Logout';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser, reset, updateDisplayName } from './../features/auth/authSlice';
import { toast } from 'react-toastify';

const Window = () => {
  const { user, isSuccess, message } = useSelector((state) => state.auth);
  const [displayName, setDisplayName] = useState(user && user.displayName ? user.displayName : '');
  const [email] = useState(user && user.email);
  const [uid] = useState(user && user.uid);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(signOutUser());
  };

  const updateName = (e) => {
    e.preventDefault();
    dispatch(updateDisplayName(displayName));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);

      if (user === null) navigate('/');
    }

    dispatch(reset());
  }, [isSuccess, message, user, navigate, dispatch]);

  return (
    <div className="absolute top-[105%] right-4 w-72 p-4 text-white bg-gray-900 rounded-lg shadow-2xl shadow-gray-700 sm:w-full sm:max-w-xs">
      <h1 className="pb-3 mb-3 text-xl font-semibold text-center border-b-2 border-white sm:text-2xl">Your Profile</h1>
      <div className="mx-auto mb-4 w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <form>
        <input
          type="text"
          className="w-full px-2 py-3 mb-3 text-gray-900 bg-white border-b border-gray-400 rounded-md font-default focus:outline-none"
          name="displayName"
          value={displayName}
          placeholder="Display Name"
          onChange={(e) => setDisplayName(e.target.value)}
          autoComplete="off"
        />
        <input
          type="text"
          className="w-full px-2 py-3 mb-3 text-gray-900 bg-white border-b border-gray-400 rounded-md cursor-not-allowed opacity-80 font-default focus:outline-none"
          name="displayName"
          value={email}
          placeholder="Display Name"
          readOnly={true}
          autoComplete="off"
        />
        <input
          type="text"
          className="w-full px-2 py-3 mb-3 text-gray-900 bg-white border-b border-gray-400 rounded-md cursor-not-allowed opacity-80 font-default focus:outline-none"
          name="displayName"
          value={uid}
          placeholder="Display Name"
          readOnly={true}
          autoComplete="off"
        />
        <button
          type="submit"
          className="flex items-center justify-center w-full gap-4 py-3 mb-3 font-bold tracking-widest text-center text-gray-900 uppercase transition-all bg-white border-2 border-white rounded-lg"
          onClick={updateName}
        >
          Change Name
        </button>
      </form>
      <hr />
      <button
        onClick={onLogout}
        className="flex items-center justify-center w-full gap-4 py-3 mt-3 font-bold tracking-widest text-center text-white uppercase transition-all bg-transparent border-2 border-white rounded-lg"
      >
        <Logout /> Logout
      </button>
    </div>
  );
};

export default Window;
