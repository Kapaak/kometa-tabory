import { groq } from 'next-sanity';

import {
  SanityCamp,
  SanityCampType,
  SanitySwimmingCamp,
  SanityTripCamp,
} from '~/domains';

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

export async function getAllTripFaqs(): Promise<SanityCampType> {
  const queryTripFAQs = groq`*[_type == "tripFaq"]{title,order,faqItems[]{icon,text,title}}|order(order asc)`;

  const tripFaqs = await client.fetch(queryTripFAQs);

  return tripFaqs;
}

export async function getAllSwimmingFaqs(): Promise<SanityCampType> {
  const querySwimmingFAQs = groq`*[_type == "faq"]{title,order,faqItems[]{icon,text,title}}|order(order asc)`;

  const swimmingFaqs = await client.fetch(querySwimmingFAQs);

  return swimmingFaqs;
}

export async function getAllCampTypes(): Promise<SanityCampType> {
  const queryCampTypes = groq`*[_type == "campType"]{"id":_id,title,"image":image{asset->{...,metadata}},"alt":image.alt,value,order,description,price,swimmingFrequency,age}|order(order asc)`;

  const campTypes = await client.fetch(queryCampTypes);

  return campTypes;
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
