import React from 'react';
import Illustration from './../images/illustration.svg';

const NoTaskPlaceholder = () => {
  return (
    <div className="w-full text-center">
      <div className="text-center">
        <img src={Illustration} alt="add-notes illustration" className="w-48 mx-auto" />
      </div>
      <h1 className="my-4 text-xl font-bold sm:text-2xl">No tasks to show!</h1>
      <p className="font-medium text-gray-500">Add tasks to your list</p>
    </div>
  );
};

export default NoTaskPlaceholder;
