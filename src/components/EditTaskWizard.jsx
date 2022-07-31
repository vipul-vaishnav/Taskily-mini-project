import React, { useRef } from 'react';

const EditTaskWizard = ({ setShowEditTaskWizard }) => {
  // For resizing of textarea
  const textArea = useRef(null);
  const handleHeight = (e) => {
    textArea.current.style.height = '100px';
    let scHeight = e.target.scrollHeight;
    textArea.current.style.height = `${scHeight}px`;
  };

  return (
    <div className="absolute z-20 w-11/12 max-w-3xl p-5 text-gray-900 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow top-1/2 left-1/2 sm:p-8 shadow-slate-500">
      <button onClick={() => setShowEditTaskWizard(false)} className="absolute top-5 right-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <h1 className="mb-2 text-xl font-semibold sm:text-3xl">Edit task</h1>
      <p className="mb-4 font-medium text-gray-400">Edit the name and the description of the task</p>
      <hr />
      <form className="mt-4">
        <div className="mb-1">
          <input
            className="w-full py-2 text-xl font-semibold text-gray-900 placeholder-gray-400 align-baseline bg-transparent font-default focus:outline-none"
            type="email"
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Task name here..."
            autoComplete="off"
          />
        </div>
        <div className="mb-1">
          <textarea
            onKeyUp={handleHeight}
            className="w-full py-2 text-gray-900 placeholder-gray-400 align-baseline bg-transparent font-default focus:outline-none max-h-60"
            name="description"
            // value={}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Description"
            autoComplete="off"
            ref={textArea}
            spellCheck={false}
          />
        </div>
        <p className="mb-4 font-medium text-gray-400">Change Task Status</p>
        <select
          className="w-full py-3 text-gray-900 placeholder-gray-400 align-baseline bg-transparent border-2 border-gray-200 rounded-lg font-default focus:outline-none max-h-60"
          name="status"
          // value={gender}
          // onChange={(e) => setGender(e.target.value)}
          required
        >
          <option disabled>Choose a status for this task</option>
          <option value="pending">Pending ⌛</option>
          <option value="completed">Completed ✅</option>
        </select>
        <button className="flex items-center justify-center w-full gap-4 py-3 mt-5 mb-0 font-extrabold tracking-widest text-center text-white uppercase bg-gray-900 border-2 border-gray-900 rounded-lg md:max-w-xs md:ml-auto">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditTaskWizard;
