import { MaxWidth } from "@ui-library";
import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { IService } from "../PageHome/ServiceSection/ServiceSection.interface";
import { ChildrenList } from "./ChildrenList";
import { ChildData } from "./PagePrihlasky.interface";
import { SectionForm } from "./SectionForm";
import * as S from "./PagePrihlasky.style";

const initialState = {
	id: "fajapfa13asd",
	name: "Dítě 1",
};

const initialFormState = {
	address: "",
	alergy: "",
	city: "",
	"czech-nationality": "",
	"date-of-birth": "",
	email: "",
	"found-us": "",
	"health-issues": "",
	insurance: "",
	name: "",
	"personal-id-num": "",
	phone: "",
	"post-code": "",
	surname: "",
	"swimming-abilities": "",
	gender: "",
};

interface PagePrihlaskyProps {
	camp: IService | undefined;
}

export const PagePrihlasky = ({ camp }: PagePrihlaskyProps) => {
	const [activeChildren, setActiveChildren] = useState<Array<ChildData>>([
		initialState,
	]);

	const [selectedChildId, setSelectedChildId] = useState(initialState?.id);

	const form = useForm();
	const { unregister, setValue } = form;

	useEffect(() => {
		setSelectedChildId(activeChildren[activeChildren.length - 1]?.id);
	}, [activeChildren.length]);

	const handleAddChild = (child: ChildData) => {
		setActiveChildren(prev => [...prev, child]);
		//have to reset value for inputs in new child
		setValue(child?.id, initialFormState);
	};

	const handleSelectChild = (selected: ChildData) => {
		setSelectedChildId(selected?.id);
	};

	const handleChildRemove = (child: ChildData) => {
		if (activeChildren.length > 1) {
			setActiveChildren(prev => prev?.filter(p => p !== child));
			unregister(child?.id);
		}
	};

	useEffect(() => {
		unregister(selectedChildId, { keepValue: true });
	}, [selectedChildId, unregister, camp]);

	const handleChildNameChange = (name: string) => {
		const activeChild = activeChildren.find(v => v.id === selectedChildId);

		if (activeChild?.name !== name && name.length > 0) {
			setActiveChildren(prev =>
				prev.map(child => {
					if (child?.id === selectedChildId) child.name = name;
					return child;
				})
			);
		}
	};

	return (
		<div>
			<MaxWidth>
				<S.Headline>{camp?.headline}</S.Headline>
				<S.Subheadline>{camp?.info?.date}</S.Subheadline>
				<ChildrenList
					activeChildren={activeChildren}
					selectedChildId={selectedChildId}
					onRemoveChild={handleChildRemove}
					onAddChild={handleAddChild}
					onSelectChild={handleSelectChild}
				/>

				<FormProvider {...form}>
					<SectionForm
						childId={selectedChildId}
						onNameChange={handleChildNameChange}
					/>
				</FormProvider>
			</MaxWidth>
		</div>
	);
};
