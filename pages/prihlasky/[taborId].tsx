import { PagePrihlasky } from "@/components";
import { IService } from "../../components/Pages/PageHome/ServiceSection/ServiceSection.interface";
import { GetStaticPropsContext } from "next";
import { getCampByName, getAllCamps } from "@/utils";

interface PrihlaskyProps {
	camp: IService;
}

const Prihlasky = ({ camp }: PrihlaskyProps) => {
	return (
		<main>
			<PagePrihlasky camp={camp} />
		</main>
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
	const paths = getAllCamps()?.map(camp => ({
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
