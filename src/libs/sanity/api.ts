import { groq } from 'next-sanity';

import { SanityCamp, SanitySwimmingCamp, SanityTripCamp } from '~/domains';

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

export async function getCourseDetailBySlug(
  slug: string
): Promise<SanitySwimmingCamp> {
  //Checks if the url is either in swimming camps or trip camps and gets its detail
  const queryCamp = groq`
  *[
    (_type == "camp" || _type == "tripCamp") && 
    slug.current == "${slug}"
  ][0]{
    title,
    name,
    date,
    price,
    discountedPrice,
    capacity,
    availability,
    photo{asset->{...,metadata}},
    photoAlt,
    targetUrl,
    spreadsheetId
  }
`;

  const course: SanityCamp = await client.fetch(queryCamp);

  return course;
}
