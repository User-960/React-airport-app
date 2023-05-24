import React from 'react';
import { useAppSelector } from '../hook/redux';

export default function AirportFilter() {
  const { types, regions, countries, loading } = useAppSelector(state => state.handbook);

  if (loading) return <p className='text-center'>Loading...</p>

  return (
    <div className='border py-2 px-4 mb-2'>
      <span className='font-bold mr-2'>Filter</span>

      <select name="types" className='mr-2 border py-1 px-2'>
        {types.map(t => <option key={t}>{t}</option>)}
      </select>

      <select name="countries" className='mr-2 border py-1 px-2'>
        {countries.map(c => <option key={c}>{c}</option>)}
      </select>

      <select name="regions" className='border py-1 px-2'>
        {regions.map(r => <option key={r}>{r}</option>)}
      </select>
    </div>
  )
};
