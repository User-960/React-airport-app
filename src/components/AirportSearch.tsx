import React, { useEffect } from 'react';
import { useDebounce } from '../hook/debounce';
import { useInput } from '../hook/input';

export default function AirportSearch() {
  const input = useInput('');

  const debounced = useDebounce<string>(input.value, 400);

  useEffect(() => {
    if (debounced.length > 3) { }
    console.log("debounced", debounced);
  }, [debounced]);

  return (
    <div className='mb-4 relative'>
      <input
        type="text"
        className='border py-2 px-4 outline-0 w-full h-[42px]'
        placeholder='Type something here...'
        {...input}
      />

      {/* <div className='absolute left-0 right-0 top-42 h-[200px] shadow-md'></div> */}
    </div>
  )
};
