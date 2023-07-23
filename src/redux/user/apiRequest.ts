import axios from 'axios';
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logOutFailed,
  logOutStart,
  logOutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from './authSlice';

export const loginUser = async (user, dispatch, router) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:3001/auth/login', user, {
      withCredentials: true,
    });
    dispatch(loginSuccess(res.data));
    router.push('/');
  } catch (err: any) {
    dispatch(loginFailed(err.response.data.message));
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post('http://localhost:3001/auth/register', user);
    dispatch(registerSuccess());
    navigate('/login');
    return true;
  } catch (err) {
    dispatch(registerFailed());
    return false;
  }
};

export const logOut = async (dispatch, id, router, accessToken, axiosJWT) => {
  dispatch(logOutStart());
  try {
    const eror = await axiosJWT.post('http://localhost:3001/auth/logout', id, {
      withCredentials: true,
      headers: { token: `Bearer ${accessToken}` },
    });
    console.log(eror);
    dispatch(logOutSuccess());
    router.push('/');
  } catch (err) {
    dispatch(logOutFailed());
  }
};
