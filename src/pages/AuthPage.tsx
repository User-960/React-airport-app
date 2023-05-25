import React, { FormEvent } from 'react';
import { useInput } from '../hook/input';

export default function AuthPage() {
  const username = useInput('');
  const password = useInput('');

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
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

      <div className="">
        <label className="block" htmlFor="password">Password</label>
        <input className="border py-1 px-2 w-full" type="password" {...password} id="password" />
      </div>
    </form>
  )
};
