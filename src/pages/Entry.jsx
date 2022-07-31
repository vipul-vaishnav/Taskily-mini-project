import React, { useState, useEffect } from 'react';
import Spiral from './../images/spiral.png';
import Google from './../images/google.png';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser, loginUser, googleSignIn, reset } from './../features/auth/authSlice';
import { toast } from 'react-toastify';
import Loader from './../components/Loader';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    const data = { email, password };
    dispatch(loginUser(data));
  };

  const onSignUp = (e) => {
    e.preventDefault();
    const data = { email, password };
    dispatch(registerUser(data));
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignIn());
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      setTimeout(() => {
        navigate('/home');
      }, 3000);
    }

    if (isError) {
      let new_message = '';
      if (message.includes('Error')) {
        new_message =
          message.split(' ')[1] +
          ': ' +
          message
            .split(' ')[2]
            .slice(0, -2)
            .slice(1)
            .split('/')[1]
            .split('-')
            .map((e) => e[0].toUpperCase() + e.slice(1))
            .join(' ');
      } else {
        new_message = message.split(':')[1].slice(1).split('(')[0].slice(0, -1);
      }
      toast.error(new_message);
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  return (
    <div className="max-w-5xl px-4 py-4 mx-auto">
      {isLoading && (
        <div className="mb-5 text-center">
          <Loader />
        </div>
      )}
      <section className="max-w-md px-4 py-6 mx-auto bg-gray-100 rounded-sm shadow">
        <div className="mb-3">
          <img src={Spiral} alt="spiral" className="w-16" />
        </div>
        <h1 className="mb-2 text-2xl font-extrabold">Welcome</h1>
        <p className="mb-4 font-medium text-gray-400">
          Already have an account! <span className="text-gray-600">login</span>{' '}
        </p>
        <form>
          <div className="mb-4">
            <input
              className="w-full px-2 py-3 text-gray-900 bg-transparent border-b border-gray-400 focus:rounded-md font-default focus:outline-none focus:bg-white"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-2 py-3 text-gray-900 bg-transparent border-b border-gray-400 focus:rounded-md font-default focus:outline-none focus:bg-white"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            onClick={onLogin}
            className="w-full py-3 mb-3 font-bold tracking-widest text-center text-white uppercase bg-gray-900 border-2 border-gray-900 rounded-lg"
          >
            Login
          </button>
          <p className="mb-4 font-medium text-gray-400">
            Don't have an account yet! <span className="text-gray-600">sign up</span>{' '}
          </p>
          <button
            type="submit"
            onClick={onSignUp}
            className="w-full py-3 mb-3 font-bold tracking-widest text-center text-gray-900 uppercase bg-white border-2 border-gray-900 rounded-lg"
          >
            Sign up
          </button>
        </form>
        <p className="mb-3 font-medium text-center text-gray-400">OR</p>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full gap-4 py-3 font-bold tracking-widest text-center text-gray-900 uppercase bg-white border-2 border-gray-900 rounded-lg"
        >
          <img src={Google} alt="google-icon" className="w-6" />
          Continue with Google
        </button>
      </section>
    </div>
  );
};

export default Entry;
