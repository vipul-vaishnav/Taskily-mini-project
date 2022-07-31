import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl px-4 py-12 mx-auto">
      <h1 className="font-extrabold text-center text-9xl">404.</h1>
      <p className="text-4xl font-semibold text-center text-gray-600">Oooooooops!</p>
      <button
        onClick={() => navigate('/')}
        className="block w-full max-w-md py-3 mx-auto mt-8 font-bold tracking-widest text-center text-white uppercase bg-gray-900 border-2 border-gray-900 rounded-lg"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
