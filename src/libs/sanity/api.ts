import { groq } from 'next-sanity';

import { SanitySwimmingCamp, SanityTripCamp } from '~/domains';

import { client } from './config';

export async function getAllSwimmingCamps(): Promise<SanitySwimmingCamp[]> {
  const querySwimmingCamps = groq`*[_type == "camp"]{"id":_id,title,name,date,price,discountedPrice,trip,capacity,availability,image{asset->{...,metadata}},"alt":image.alt,"slug":slug.current,spreadsheetId}|order(title asc)`;

  const course = await client.fetch(querySwimmingCamps);

  return course;
}

export async function getAllTripCamps(): Promise<SanityTripCamp[]> {
  const queryTripCamps = groq`*[_type == "tripCamp"]{"id":_id,title,name,date,price,discountedPrice,capacity,availability,"image":image{asset->{...,metadata}},"alt":image.alt,"slug":slug.current,spreadsheetId}|order(title asc)`;

  const course = await client.fetch(queryTripCamps);

  return course;
}
