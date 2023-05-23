import React from 'react';
import { useInput } from '../hook/input';

export default function AirportSearch() {
  const input = useInput('');

  return (
    <div className='mb-4'>
      <input
        type="text"
        className='border py-2 px-4 outline-0 w-full'
        placeholder='Type something here...'
        {...input}
      />
    </div>
  )
};
