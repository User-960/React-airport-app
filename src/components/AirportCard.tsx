import React from 'react';
import { IAirport } from '../models/models';

interface AirportCardProps {
  airport: IAirport
};

export default function AirportCard({ airport }: AirportCardProps) {
  return (
    <div>
      {airport.name}
    </div>
  )
};
