import { InferGetStaticPropsType } from 'next';

import { getCampType } from '~/libs';
import { CampResidentialScreen } from '~/screens/camp-residential-page';
import { CampType } from '~/types';
import { PageLayout } from '~/ui/components';
import { urlForImage } from '~/utils';

interface CampResidentialPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function CampResidentialPage({
  campType,
}: CampResidentialPageProps) {
  return (
    <PageLayout>
      <CampResidentialScreen
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
  const campType = await getCampType(CampType.Residential);

  return {
    props: {
      campType,
    },
    revalidate: 60,
  };
};
