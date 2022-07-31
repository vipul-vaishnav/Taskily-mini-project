import { useState, useEffect } from 'react';
import { auth } from './../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from './../features/auth/authSlice';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const payload = { email: user.email, displayName: user.displayName, uid: user.uid };
        dispatch(setUser(payload));
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });
  });

  return { loggedIn, checkingStatus };
};
