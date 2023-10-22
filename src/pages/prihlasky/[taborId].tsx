import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { groq } from 'next-sanity';

import { SanityCamp } from '~/domains';
import { client } from '~/libs';
import { ApplicationsPageScreen } from '~/screens';
import { PageLayout } from '~/ui/components';
import { joinValues } from '~/utils';

interface ApplicationsPageProps
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

export default function ApplicationsPage({ camp }: ApplicationsPageProps) {
  return (
    <PageLayout>
      <ApplicationsPageScreen
        title={joinValues([camp?.title, ' - ', camp?.name])}
        subtitle={camp?.date}
        spreadsheetId={camp?.spreadsheetId}
      />
    </PageLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const currentRoute = context.params?.taborId as string;

  const queryCamp = groq`*[_type == "camp" && targetUrl == "${currentRoute}"][0]{title,name,date,price,discountedPrice,trip,capacity,availability,photo{asset->{...,metadata}},photoAlt,targetUrl,spreadsheetId}`;

  const camp: SanityCamp = await client.fetch(queryCamp);

  if (!camp) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      camp: camp,
    },
  };
}
