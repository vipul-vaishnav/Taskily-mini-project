import React from 'react';
import Task from './Task';

const TaskContainer = ({ setShowEditTaskWizard }) => {
  return (
    <div className="grid grid-cols-1 gap-3 px-4 py-2 overflow-y-auto max-h-80 md:grid-cols-2 md:gap-4">
      <Task setShowEditTaskWizard={setShowEditTaskWizard} />
      <Task setShowEditTaskWizard={setShowEditTaskWizard} />
      <Task setShowEditTaskWizard={setShowEditTaskWizard} />
      <Task setShowEditTaskWizard={setShowEditTaskWizard} />
      <Task setShowEditTaskWizard={setShowEditTaskWizard} />
    </div>
  );
};

export default TaskContainer;
