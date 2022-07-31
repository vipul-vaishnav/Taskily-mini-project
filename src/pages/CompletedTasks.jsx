import React from 'react';
import TaskContainer from '../components/TaskContainer';
import { useOutletContext } from 'react-router-dom';

const CompletedTasks = () => {
  const setShowEditTaskWizard = useOutletContext();

  return (
    <section className="mt-8">
      <h1 className="mb-4 text-xl font-semibold">List of completed tasks</h1>
      <TaskContainer setShowEditTaskWizard={setShowEditTaskWizard} />
    </section>
  );
};

export default CompletedTasks;
