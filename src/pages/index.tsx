import { InferGetStaticPropsType } from 'next';
import { groq } from 'next-sanity';

import { SanityContextProvider } from '~/contexts';
import {
  SanityActuality,
  SanityDocument,
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
  infoBar,
  testimonial,
  photoGallery,
  videos,
}: HomePageProps) {
  return (
    <SanityContextProvider
      sanityData={{
        actualities,
        documents,
        testimonial,
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
  const queryDocument = groq`*[_type == "doc"]{title,order,file{asset->{url}}}|order(order asc)`;
  const queryInfoBar = groq`*[_type == "infoBar" && visibility == true][0]{title,visibility,text}`;
  const queryTestimonial = groq`*[_type == "testimonial"]{title,text,origin}`;

  const queryPhotoGallery = groq`*[_type == "gallery"]{title,alt,image{asset->{...,metadata}}}`;
  const queryVideo = groq`*[_type == "video"]{title,videoFile{asset->{url}}}`;

  const actualities: SanityActuality[] = await client.fetch(queryActualities);
  const documents: SanityDocument[] = await client.fetch(queryDocument);
  const infoBar: SanityInfoBar = await client.fetch(queryInfoBar);
  const testimonial: SanityTestimonial[] = await client.fetch(queryTestimonial);
  const photoGallery: SanityPhotoGallery[] =
    await client.fetch(queryPhotoGallery);
  const videos: SanityVideo[] = await client.fetch(queryVideo);

  return {
    props: {
      actualities,
      documents,
      infoBar,
      testimonial,
      photoGallery,
      videos,
    },
    revalidate: 10,
  };
};
