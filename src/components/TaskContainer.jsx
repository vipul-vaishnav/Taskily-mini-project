import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const TaskContainer = ({ setShowEditTaskWizard }) => {
  const { todos } = useSelector((state) => state.todo);
  return (
    <div className="grid grid-cols-1 gap-3 px-4 py-2 overflow-y-auto max-h-80 md:grid-cols-2 md:gap-4">
      {todos &&
        todos.length > 0 &&
        todos.map((todo, idx) => {
          return <Task key={idx} setShowEditTaskWizard={setShowEditTaskWizard} todo={todo} />;
        })}
    </div>
  );
};

export default TaskContainer;
