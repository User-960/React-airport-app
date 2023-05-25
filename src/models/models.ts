export interface IAirport {
  id: number
  name: string
  ident: string
  local_code: string
  region: string
  type: string
  country: string
};

export interface IStat {
  count: number
  next: number
  previous: number
}

export interface ServerResponse<T> {
  airports: T[]
};

export type TAirportType = string;
export type TAirportRegion = string;
export type TAirportCountry = string;

export interface IFilter {
  type: TAirportType
  region: TAirportRegion
  country: TAirportCountry
};

export interface IAirportDetail {
  id: number
  continent: string
  coordinates: string
  country: string
  elevation_ft: string
  gps_code: string
  iata_code: string
  ident: string
  local_code: string
  municipality: string
  name: string
  region: string
  type: string
};
