import { InferGetServerSidePropsType } from 'next';
import { SanityDocument, groq } from 'next-sanity';

import { SanityContextProvider } from '~/contexts';
import { SanityActuality, SanityFaq, SanityInfoBar } from '~/domains';
import { client } from '~/libs';
import { HomePageScreen } from '~/screens';
import { PageLayout } from '~/ui/components';

interface Props
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

export default function Home({ actualities, documents, faqs, infoBar }: Props) {
  return (
    //@ts-ignore TODO: fix this
    <SanityContextProvider sanityData={{ actualities, documents, faqs }}>
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

  const actualities: SanityActuality[] = await client.fetch(queryActualities);
  const faqs: SanityFaq[] = await client.fetch(queryFAQ);
  const documents: SanityDocument[] = await client.fetch(queryDocument);
  const infoBar: SanityInfoBar = await client.fetch(queryInfoBar);

  return {
    props: {
      actualities,
      faqs,
      documents,
      infoBar,
    },
  };
};
