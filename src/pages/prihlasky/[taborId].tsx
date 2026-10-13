import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { getCourseDetailBySlug } from '~/libs';
import { ApplicationsPageScreen } from '~/screens';
import { CampTypeSanityKey } from '~/types';
import { PageLayout } from '~/ui/components';

interface ApplicationsPageProps
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

export default function ApplicationsPage({ camp }: ApplicationsPageProps) {
  return (
    <PageLayout>
      <ApplicationsPageScreen
        courseId={camp?.title}
        name={camp?.name}
        price={String(camp?.discountedPrice || camp?.price)}
        date={camp?.date}
        spreadsheetId={camp?.spreadsheetId}
        capacity={camp?.capacity}
        capacityMale={camp?.capacityMale}
        capacityFemale={camp?.capacityFemale}
        isResidential={camp?.type === CampTypeSanityKey.Residential}
      />
    </PageLayout>
  );
}

//TODO: proc tu nepouzivam staticProps a staticPaths ?????
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const currentRoute = context.params?.taborId as string;

  const camp = await getCourseDetailBySlug(currentRoute);

  if (!camp) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      camp,
    },
  };
}
