import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import { useDebounce } from '../hook/debounce';
import { useInput } from '../hook/input';
import { IAirport } from '../models/models';

export default function AirportSearch() {
  const navigate = useNavigate();
  const input = useInput('');
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [airports, setAiports] = useState<IAirport[]>([]);
  const debounced = useDebounce<string>(input.value, 400);

  async function searchAiports() {
    const response = await axios.get<IAirport[]>('airports', {
      params: {
        name_like: debounced,
        _limit: 10
      }
    })
    setAiports(response.data);
  };

  useEffect(() => {
    if (debounced.length > 3) {
      searchAiports().then(() => setDropdown(true))
    } else {
      setDropdown(false)
    }
  }, [debounced]);

  return (
    <div className='mb-4 relative'>
      <input
        type="text"
        className='border py-2 px-4 outline-0 w-full h-[42px]'
        placeholder='Type something here...'
        {...input}
      />

      {dropdown && <ul className='list-none absolute left-0 right-0 top-42 h-[200px] shadow-md bg-white overflow-y-scroll'>
        {
          airports.map(airport => (
            <li
              key={airport.id}
              className='py-2 px-4 mb-2 hover:bg-gray-500 hover:transition-colors cursor-pointer hover:text-white'
              onClick={() => navigate(`/airport/${airport.id}`)}
            >
              {airport.name}
            </li>
          ))
        }
      </ul>}
    </div>
  )
};
