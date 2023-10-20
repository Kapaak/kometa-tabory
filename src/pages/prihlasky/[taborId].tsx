import { GetStaticPropsContext } from "next";

import { ApplicationsPageScreen } from "~/screens";
// import { IService } from "../../components/Pages/PageHome/ServiceSection/ServiceSection.interface";
import { PageLayout } from "~/ui/components";
import { getCampByName, getAllCamps } from "~/utils";

interface PrihlaskyProps {
  camp: any;
  // camp: IService;
}

const Prihlasky = ({ camp }: PrihlaskyProps) => {
  return (
    <PageLayout>
      <ApplicationsPageScreen camp={camp} />
    </PageLayout>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const currentRoute = context.params?.taborId as string;

  return {
    props: {
      camp: getCampByName(currentRoute),
    },
  };
}

export const getStaticPaths = async () => {
  const paths = getAllCamps()?.map((camp) => ({
    params: {
      taborId: camp?.url,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Prihlasky;
