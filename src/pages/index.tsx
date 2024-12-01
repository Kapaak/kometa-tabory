import { InferGetStaticPropsType } from 'next';
import { groq } from 'next-sanity';

import { SanityContextProvider } from '~/contexts';
import {
  SanityActuality,
  SanityCamp,
  SanityDocument,
  SanityFaq,
  SanityInfoBar,
  SanityPhotoGallery,
  SanityTestimonial,
  SanityVideo,
} from '~/domains';
import { client } from '~/libs';
import { HomePageScreen } from '~/screens';
import { PageLayout } from '~/ui/components';

interface HomePageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function HomePage({
  actualities,
  documents,
  faqs,
  infoBar,
  testimonial,
  camps,
  spreadSheetsIds,
  photoGallery,
  videos,
}: HomePageProps) {
  return (
    <SanityContextProvider
      sanityData={{
        actualities,
        documents,
        faqs,
        testimonial,
        camps,
        spreadSheetsIds,
        photoGallery,
        videos,
      }}
    >
      <PageLayout infoBar={infoBar}>
        <HomePageScreen />
      </PageLayout>
    </SanityContextProvider>
  );
}

export const getStaticProps = async () => {
  const queryActualities = groq`*[_type == "home" && visibility == true]{text,order,title}|order(order asc)`;
  const queryFAQ = groq`*[_type == "faq"]{title,order,faqItems[]{icon,text,title}}|order(order asc)`;
  const queryDocument = groq`*[_type == "doc"]{title,order,file{asset->{url}}}|order(order asc)`;
  const queryInfoBar = groq`*[_type == "infoBar" && visibility == true][0]{title,visibility,text}`;
  const queryTestimonial = groq`*[_type == "testimonial"]{title,text,origin}`;

  //TODO: REMOVE CAMP
  const queryCamp = groq`*[_type == "camp"]{title,name,date,price,discountedPrice,trip,capacity,availability,photo{asset->{...,metadata}},alt,targetUrl,spreadsheetId}|order(title asc)`;
  const queryPhotoGallery = groq`*[_type == "gallery"]{title,alt,image{asset->{...,metadata}}}`;
  const queryVideo = groq`*[_type == "video"]{title,videoFile{asset->{url}}}`;

  const actualities: SanityActuality[] = await client.fetch(queryActualities);
  const faqs: SanityFaq[] = await client.fetch(queryFAQ);
  const documents: SanityDocument[] = await client.fetch(queryDocument);
  const infoBar: SanityInfoBar = await client.fetch(queryInfoBar);
  const testimonial: SanityTestimonial[] = await client.fetch(queryTestimonial);
  const camps: SanityCamp[] = await client.fetch(queryCamp);
  const photoGallery: SanityPhotoGallery[] =
    await client.fetch(queryPhotoGallery);
  const videos: SanityVideo[] = await client.fetch(queryVideo);

  const spreadSheetsIds: number[] = (camps ?? [])
    .map((camp) => camp?.spreadsheetId)
    //we are taking care so that id:0 is not filtered out
    .filter((id: number | undefined) => typeof id === 'number') as number[];

  return {
    props: {
      actualities,
      faqs,
      documents,
      infoBar,
      testimonial,
      camps,
      spreadSheetsIds,
      photoGallery,
      videos,
    },
    revalidate: 10,
  };
};
