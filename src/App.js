import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES AND COMPONENTS
import Entry from './pages/Entry';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Overlay from './components/Overlay';
import NewTaskWizard from './components/NewTaskWizard';
import CompletedTasks from './pages/CompletedTasks';
import TodoTasks from './pages/TodoTasks';
import AllTasks from './pages/AllTasks';
import EditTaskWizard from './components/EditTaskWizard';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './app/store';
import { Provider } from 'react-redux';

const App = () => {
  const [showTaskWizard, setShowTaskWizard] = useState(false);
  const [showEditTaskWizard, setShowEditTaskWizard] = useState(true);

  return (
    <Provider store={store}>
      <div className="relative min-h-screen text-base font-normal text-gray-900 bg-white font-default">
        <Navbar />
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/home" element={<PrivateRoute />}>
            <Route
              path="/home"
              element={<Home setShowEditTaskWizard={setShowEditTaskWizard} setShowTaskWizard={setShowTaskWizard} />}
            >
              <Route index element={<AllTasks />} />
              <Route path="all" element={<AllTasks />} />
              <Route path="todo" element={<TodoTasks />} />
              <Route path="completed" element={<CompletedTasks />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {(showTaskWizard || showEditTaskWizard) && (
          <Overlay
            showTaskWizard={showTaskWizard}
            showEditTaskWizard={showEditTaskWizard}
            setShowTaskWizard={setShowTaskWizard}
            setShowEditTaskWizard={setShowEditTaskWizard}
          />
        )}
        {showTaskWizard && <NewTaskWizard setShowTaskWizard={setShowTaskWizard} />}
        {showEditTaskWizard && <EditTaskWizard setShowEditTaskWizard={setShowEditTaskWizard} />}
        <ToastContainer />
      </div>
    </Provider>
  );
};

export default App;
