import React from 'react';
import TaskContainer from '../components/TaskContainer';

const AllTasks = () => {
  return (
    <section className="mt-8">
      <h1 className="mb-4 text-xl font-semibold">List of all tasks</h1>
      <TaskContainer />
    </section>
  );
};

export default AllTasks;
