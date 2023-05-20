import React, { useEffect } from 'react';
import AirportCard from '../components/AirportCard';
import AirportFilter from '../components/AirportFilter';
import AirportSearch from '../components/AirportSearch';
import { useAppDispatch } from '../hook/redux';
import { fetchAirports } from '../store/actions/airportActions';

export default function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAirports());
  }, [])

  return (
    <div className="container mx-auto max-w-[760px] pt-5">
      <AirportSearch />
      <AirportFilter />
      <AirportCard />
    </div>
  )
};
