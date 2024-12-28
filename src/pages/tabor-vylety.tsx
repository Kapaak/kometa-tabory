import { InferGetStaticPropsType } from 'next';

import { getCampType } from '~/libs';
import { CampsTripScreen } from '~/screens/camp-trip-page';
import { CampType } from '~/types';
import { PageLayout } from '~/ui/components';

interface CampTripsPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function CampTripsPage({ campType }: CampTripsPageProps) {
  return (
    <PageLayout>
      <CampsTripScreen title={campType?.title} />
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const campType = await getCampType(CampType.Trip);

  return {
    props: {
      campType,
    },
    revalidate: 10,
  };
};
