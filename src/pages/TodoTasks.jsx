import React, { useEffect } from 'react';
import TaskContainer from './../components/TaskContainer';
import { useOutletContext } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPendingTodos } from './../features/todo/todoSlice';
import NoTaskPlaceholder from './../components/NoTaskPlaceholder';

const TodoTasks = () => {
  const setShowEditTaskWizard = useOutletContext();

  const { todos, isLoading } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPendingTodos());
  }, [dispatch]);

  if (isLoading) {
    return <NoTaskPlaceholder />;
  }

  if (todos.length === 0) {
    return <NoTaskPlaceholder />;
  }

  return (
    <section className="mt-8">
      <h1 className="mb-4 text-xl font-semibold">List of pending tasks</h1>
      <TaskContainer setShowEditTaskWizard={setShowEditTaskWizard} />
    </section>
  );
};

export default TodoTasks;
