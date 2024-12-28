import { InferGetStaticPropsType } from 'next';

import { getCampType } from '~/libs';
import { CampSwimmingScreen } from '~/screens';
import { CampType } from '~/types';
import { PageLayout } from '~/ui/components';
import { urlForImage } from '~/utils';

interface CampSwimmingPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function CampSwimmingPage({ campType }: CampSwimmingPageProps) {
  return (
    <PageLayout>
      <CampSwimmingScreen
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
  const campType = await getCampType(CampType.Swimming);

  return {
    props: {
      campType,
    },
    revalidate: 10,
  };
};
