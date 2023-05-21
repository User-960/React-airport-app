import React from 'react';
import { IAirport } from '../models/models';

interface AirportCardProps {
  airport: IAirport
};

export default function AirportCard({ airport }: AirportCardProps) {
  return (
    <div className="border rounded-md py-4 px-6 mb-2 cursor-pointer hover:shadow-md hover:transition-all">
      <p className='text-lg font-bold'>{airport.name}</p>
      <p>{airport?.region}</p>
      <p>{airport?.type}</p>
      <p>{airport?.country}</p>
      <p>{airport?.local_code}</p>
      <p>{airport?.ident}</p>
    </div>
  )
};
