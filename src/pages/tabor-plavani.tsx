import { InferGetStaticPropsType } from 'next';

import { getCampType } from '~/libs';
import { CampSwimmingScreen } from '~/screens';
import { CampType } from '~/types';
import { PageLayout } from '~/ui/components';

interface CampSwimmingPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function CampSwimmingPage({ campType }: CampSwimmingPageProps) {
  return (
    <PageLayout>
      <CampSwimmingScreen title={campType?.title} />
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const campType = await getCampType(CampType.Swimming);

  return {
    props: {
      campType,
    },
    revalidate: 10,
  };
};
