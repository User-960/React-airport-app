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

// export interface ServerResponse<T> {
//   stat: IStat
//   airports: T[]
// };
