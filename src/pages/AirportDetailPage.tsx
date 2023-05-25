import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { IAirportDetail } from '../models/models';

export default function AirportDetailPage() {
  const params = useParams<'id'>();
  const [airport, setAirport] = useState<IAirportDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchDeatailAirport() {
    const response = await axios.get<IAirportDetail>(`airports-detail/${params.id}`);
    setAirport(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchDeatailAirport();
  }, []);

  if (loading) return <p className='text-center text-lg text-blue-600 mt-5'>Loading...</p>

  return (
    <div className='container mx-auto pt-5 max-w-[760px]'>
      <h1 className='text-center text-2xl mb-4'>Airport {airport?.name || "-"}</h1>
      <p className='text-center mb-4'><span className='font-semibold'>Type:</span> {airport?.type || "-"}</p>
      <p className='text-center mb-4'><span className='font-semibold'>Country:</span> {airport?.country || "-"}</p>
      <p className='text-center mb-4'><span className='font-semibold'>Region:</span> {airport?.region || "-"}</p>
      <p className='text-center mb-4'><span className='font-semibold'>Municipality:</span> {airport?.municipality || "-"}</p>
      <p className='text-center mb-4'><span className='font-semibold'>Coordinates:</span> {airport?.coordinates || "-"}</p>
      <p className='text-center mb-4'><span className='font-semibold'>Gps:</span> {airport?.gps_code || "-"}</p>
      <p className='text-center mb-4'><span className='font-semibold'>Iata:</span> {airport?.iata_code || "-"}</p>
      <p className='text-center mb-4'><span className='font-semibold'>Local:</span> {airport?.local_code || "-"}</p>
    </div>
  )
};
