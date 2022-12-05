import { Button, Subheadline } from "@ui-library";
import * as S from "./SectionForm.style";
import { useFormContext } from "react-hook-form";
import { BaseSyntheticEvent } from "react";
import { ControlledInput, ControlledNameInput } from "./ControlledInput";
import { ArrowCircleRight, ArrowRight } from "phosphor-react";
import { ControlledSelect } from "./ControlledSelect";
import { createOption } from "utils/functions";

interface SectionFormProps {
	childId: string;
	onNameChange: (name: string) => void;
}

export const SectionForm = ({ childId, onNameChange }: SectionFormProps) => {
	const onSubmit = (d: any) => {
		console.log(d, "dd");
	};

	const { handleSubmit, register } = useFormContext();

	const handleBlur = (
		e: BaseSyntheticEvent,
		callback: (e: BaseSyntheticEvent) => void
	) => {
		onNameChange(e.target.value);
		callback(e);
	};

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<S.Container>
				<S.FormItem>
					<Subheadline variant="dark">Osobní údaje</Subheadline>
					<div>
						{/* <label htmlFor="">Jméno dítěte</label> */}
						<ControlledNameInput
							name={`${childId}.name`}
							placeholder="Jméno dítěte"
							onNameBlur={handleBlur}
						/>
					</div>
					<div>
						{/* <label htmlFor="">Příjmení dítěte</label> */}
						<ControlledInput
							name={`${childId}.surname`}
							placeholder="Příjmení dítěte"
						/>
					</div>
					<div>
						{/* <label htmlFor="">Rodné číslo</label> */}
						<ControlledInput
							name={`${childId}.personal-id-num`}
							placeholder="Rodné číslo"
						/>
					</div>
					{/* to bude select ANO / NE */}
					<div>
						{/* <label htmlFor="">Je dítě občanem ČR?</label> */}
						<ControlledSelect
							name={`${childId}.czech-nationality`}
							options={[createOption("Ano", "ano"), createOption("Ne", "ne")]}
							placeholder="Je dítě občanem ČR?"
						/>
					</div>
					<div>
						<ControlledInput
							name={`${childId}.date-of-birth`}
							placeholder="Datum narození"
						/>
					</div>

					{/* TODO -> posilat do excelu vypocitany vek ditete v dobe konani taboru */}

					<div>
						{/* <label htmlFor="">Adresa a číslo popisné</label> */}
						<ControlledInput
							name={`${childId}.address`}
							placeholder="Adresa a číslo popisné"
						/>
					</div>
					<div>
						{/* <label htmlFor="">Město</label> */}
						<ControlledInput name={`${childId}.city`} placeholder="Město" />
					</div>
					<div>
						{/* <label htmlFor="">PSČ</label> */}
						<ControlledInput name={`${childId}.post-code`} placeholder="PSČ" />
					</div>
					<div>
						{/* <label htmlFor="">Pojišťovna</label> */}
						<ControlledInput
							name={`${childId}.insurance`}
							placeholder="Pojišťovna"
						/>
					</div>
				</S.FormItem>
				<S.FormItem>
					<Subheadline variant="dark">Kontaktní údaje</Subheadline>
					<div>
						{/* <label htmlFor="">Telefon</label> */}
						<ControlledInput name={`${childId}.phone`} placeholder="Telefon" />
					</div>
					<div>
						{/* <label htmlFor="">E-mail</label> */}
						<ControlledInput name={`${childId}.email`} placeholder="E-mail" />
					</div>
				</S.FormItem>
				<S.FormItem>
					<Subheadline variant="dark">Ostatní</Subheadline>
					<div>
						{/* <label htmlFor="">Alergie</label> */}
						<ControlledInput name={`${childId}.alergy`} placeholder="Alergie" />
					</div>
					{/* TODO -> select  PLAVEC / NEPLAVEC */}
					<div>
						{/* <label htmlFor="">Plavecké schopnosti</label> */}
						<ControlledSelect
							name={`${childId}.swimming-abilities`}
							placeholder="Plavecké schopnosti"
							options={[
								createOption("Plavec", "plavec"),
								createOption("Neplavec", "neplavec"),
							]}
						/>
					</div>
					<div>
						{/* <label htmlFor="">Poznámky</label> */}
						<ControlledInput
							name={`${childId}.health-issues`}
							placeholder="Upozornění  na zdravotní potíže"
						/>
						{/* doplnit vysvetlivku (nejaky podnadpis) */}
					</div>

					{/* TODO -> checkbox */}
					<div>
						{/* <label htmlFor="">Souhlas s podmínkami</label> */}
						{/* <S.FormInput
							{...register(`${childId}.constent`)}
							type="text"
							placeholder="Souhlas s podmínkami"
						/> */}
						<input
							placeholder="Souhlas s podmínkami"
							type="checkbox"
							name=""
							id=""
						/>
						{/* doplnit vysvetlivku (nejaky podnadpis) */}
					</div>
					<div>
						{/* <label htmlFor="">Jak jste se o nás dozvěděli?</label> */}
						<ControlledInput
							name={`${childId}.found-us`}
							placeholder="Jak jste se o nás dozvěděli?"
						/>
						{/* doplnit vysvetlivku (nejaky podnadpis) */}
					</div>
				</S.FormItem>
			</S.Container>
			<Button>
				Odeslat vše <S.ArrowRightIcon size={38} />
			</Button>
		</S.Form>
	);
};
