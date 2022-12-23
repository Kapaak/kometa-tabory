import { PagePrihlasky } from "@/components";
import { IService } from "../../components/Pages/PageHome/ServiceSection/ServiceSection.interface";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { data } from "../../components/Pages/PageHome/ServiceSection/ServiceSection.data";

const Prihlasky = () => {
	const [camp, setCamp] = useState<IService | undefined>();
	const router = useRouter();

	const getCampByName = () => {
		const currentUrl = router.query.taborId;
		return data.find(val => val.url === currentUrl);
	};

	useEffect(() => {
		setCamp(getCampByName());
	}, [router]);

	return (
		<main>
			<PagePrihlasky camp={camp} />
		</main>
	);
};

export default Prihlasky;
