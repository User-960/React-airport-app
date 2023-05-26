import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { logout } from '../store/slices/authSlice';

export default function Navigation() {
  const { username, isAuth } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    dispatch(logout())
    navigate('/auth')
  };

  return (
    <nav className="flex justify-between px-5 h-[50px] bg-gray-200 items-center shadow-md">
      <Link to="/">Airport</Link>

      {!isAuth && <Link to="/auth">Authentication</Link>}
      {isAuth &&
        <>
          <span className="font-bold" >{username}</span>
          <a href="#" onClick={logoutHandler}>Logout</a>
        </>}
    </nav>
  )
};
