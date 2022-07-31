import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Entry from './pages/Entry';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen text-base font-normal text-gray-900 bg-white font-default">
        <Navbar />
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/home" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </div>
    </Provider>
  );
};

export default App;
