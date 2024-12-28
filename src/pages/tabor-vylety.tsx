import { InferGetStaticPropsType } from 'next';

import { getCampType } from '~/libs';
import { CampsTripScreen } from '~/screens/camp-trip-page';
import { CampType } from '~/types';
import { PageLayout } from '~/ui/components';
import { urlForImage } from '~/utils';

interface CampTripsPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function CampTripsPage({ campType }: CampTripsPageProps) {
  return (
    <PageLayout>
      <CampsTripScreen
        title={campType?.title}
        description={campType?.description}
        imageUrl={
          campType?.image ? urlForImage(campType.image).url() : undefined
        }
      />
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
