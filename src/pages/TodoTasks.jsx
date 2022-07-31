import React from 'react';
import TaskContainer from './../components/TaskContainer';

const TodoTasks = () => {
  return (
    <section className="mt-8">
      <h1 className="mb-4 text-xl font-semibold">List of pending tasks</h1>
      <TaskContainer />
    </section>
  );
};

export default TodoTasks;
