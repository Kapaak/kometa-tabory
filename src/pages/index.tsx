import { InferGetServerSidePropsType } from 'next';
import { groq } from 'next-sanity';

import { SanityContextProvider } from '~/contexts';
import {
  SanityActuality,
  SanityCamp,
  SanityDocument,
  SanityFaq,
  SanityInfoBar,
  SanityTestimonial,
} from '~/domains';
import { client } from '~/libs';
import { HomePageScreen } from '~/screens';
import { PageLayout } from '~/ui/components';

interface Props
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

export default function Home({
  actualities,
  documents,
  faqs,
  infoBar,
  testimonial,
  camps,
  spreadSheetsIds,
}: Props) {
  return (
    <SanityContextProvider
      sanityData={{
        actualities,
        documents,
        faqs,
        testimonial,
        camps,
        spreadSheetsIds,
      }}
    >
      <PageLayout infoBar={infoBar}>
        <HomePageScreen />
      </PageLayout>
    </SanityContextProvider>
  );
}

export const getServerSideProps = async () => {
  const queryActualities = groq`*[_type == "home" && visibility == true]{text,order,title}|order(order asc)`;
  const queryFAQ = groq`*[_type == "faq"]{title,order,faqItems[]{icon,text,title}}|order(order asc)`;
  const queryDocument = groq`*[_type == "doc"]{title,order,file{asset->{url}}}|order(order asc)`;
  const queryInfoBar = groq`*[_type == "infoBar" && visibility == true][0]{title,visibility,text}`;
  const queryTestimonial = groq`*[_type == "testimonial"]{title,text,origin}`;
  const queryCamp = groq`*[_type == "camp"]{title,name,date,price,discountedPrice,trip,capacity,availability,photo{asset->{...,metadata}},photoAlt,targetUrl,spreadsheetId}|order(title asc)`;

  const actualities: SanityActuality[] = await client.fetch(queryActualities);
  const faqs: SanityFaq[] = await client.fetch(queryFAQ);
  const documents: SanityDocument[] = await client.fetch(queryDocument);
  const infoBar: SanityInfoBar = await client.fetch(queryInfoBar);
  const testimonial: SanityTestimonial[] = await client.fetch(queryTestimonial);
  const camps: SanityCamp[] = await client.fetch(queryCamp);

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
    },
  };
};
