import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInput } from '../hook/input';
import { useAppDispatch } from '../hook/redux';
import { register } from '../store/actions/authActions';

export default function AuthPage() {
  const username = useInput('');
  const password = useInput('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isFormValid = () => username.value && password.value;

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (isFormValid()) {
      dispatch(register({
        id: new Date().toISOString(),
        username: username.value,
        password: password.value
      })).then(() => {
        navigate('/')
      })
    } else {
      alert("INVALID FORM PLZ CHANGE FAST")
    }
  };

  return (
    <form
      className="container mx-auto max-w-[500px] pt-8"
      onSubmit={submitHandler}
    >
      <div className="mb-2">
        <label className="block" htmlFor="username">Username</label>
        <input className="border py-1 px-2 w-full" type="text" {...username} id="username" />
      </div>

      <div className="mb-2">
        <label className="block" htmlFor="password">Password</label>
        <input className="border py-1 px-2 w-full" type="password" {...password} id="password" />
      </div>

      <button className="py-2 px-4 bg-blue-700 border text-white" type="submit" onClick={submitHandler}>Register</button>
    </form>
  )
};
