import React from 'react';
import LabelCompleted from './LabelCompleted';

const Task = ({ setShowEditTaskWizard }) => {
  return (
    <div className="p-4 rounded-lg shadow bg-gray-50">
      <LabelCompleted />
      <h1 className="mt-4 mb-2 text-2xl font-semibold">Task Name</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere deleniti obcaecati animi assumenda, rerum
        ipsum dolorum aut error nostrum.
      </p>
      <div className="flex items-center justify-between mt-4">
        <p className="font-semibold text-gray-400">
          Create At: <span>{new Date().toLocaleDateString()}</span>
        </p>
        <div className="flex gap-4">
          <button onClick={() => setShowEditTaskWizard(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
