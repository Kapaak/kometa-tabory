import { Button, Subheadline } from "@ui-library";
import * as S from "./SectionForm.style";
import { useFormContext } from "react-hook-form";
import { BaseSyntheticEvent } from "react";
import { ControlledInput, ControlledNameInput } from "./ControlledInput";
import { ControlledSelect } from "./ControlledSelect";
import { ControlledCheckbox } from "./ControlledCheckbox";
import { createOption } from "utils/functions";

interface SectionFormProps {
	childId: string;
	onNameChange: (name: string) => void;
}

export const SectionForm = ({ childId, onNameChange }: SectionFormProps) => {
	const onSubmit = (d: any) => {
		console.log(d, "dd");
	};

	const {
		handleSubmit,
		formState: { errors },
	} = useFormContext();

	const handleBlur = (
		e: BaseSyntheticEvent,
		callback: (e: BaseSyntheticEvent) => void
	) => {
		onNameChange(e.target.value);
		callback(e);
	};

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<button type="button" onClick={() => console.log("errors", errors)}>
				show errs
			</button>
			<button
				type="button"
				onClick={() => console.log("errors", errors[childId]?.name.message)}
			>
				nth err
			</button>
			<S.Container>
				<S.FormItem>
					<Subheadline variant="dark">Osobní údaje</Subheadline>
					<S.FormInputContainer>
						<ControlledNameInput
							name={`${childId}.name`}
							placeholder="Jméno dítěte"
							onNameBlur={handleBlur}
							required="Jméno nesmí být prázdné"
						/>
						<S.Label>Jméno dítěte</S.Label>
						<div>{errors[childId]?.name?.message}</div>
					</S.FormInputContainer>
					<S.FormInputContainer>
						<ControlledInput
							name={`${childId}.surname`}
							placeholder="Příjmení dítěte"
							required="Příjmení nesmí být prázdné"
						/>
						<div>{errors[childId]?.surname?.message}</div>
						<S.Label>Příjmení dítěte</S.Label>
					</S.FormInputContainer>
					<S.FormInputContainer>
						<ControlledInput
							name={`${childId}.personal-id-num`}
							placeholder="Rodné číslo"
						/>
						<S.Label>Rodné číslo</S.Label>
					</S.FormInputContainer>
					<div>
						<ControlledSelect
							name={`${childId}.czech-nationality`}
							options={[createOption("Ano", "ano"), createOption("Ne", "ne")]}
							placeholder="Je dítě občanem ČR?"
						/>
					</div>
					<S.FormInputContainer>
						<ControlledInput
							name={`${childId}.date-of-birth`}
							placeholder="Datum narození"
						/>
						<S.Label>Datum narození</S.Label>
					</S.FormInputContainer>

					{/* TODO -> posilat do excelu vypocitany vek ditete v dobe konani taboru */}
					<S.FormInputContainer>
						<ControlledInput
							name={`${childId}.address`}
							placeholder="Adresa a číslo popisné"
						/>
						<S.Label>Adresa a číslo popisné</S.Label>
					</S.FormInputContainer>
					<S.FormInputContainer>
						<ControlledInput name={`${childId}.city`} placeholder="Město" />
						<S.Label>Město</S.Label>
					</S.FormInputContainer>
					<S.FormInputContainer>
						<ControlledInput name={`${childId}.post-code`} placeholder="PSČ" />
						<S.Label>PSČ</S.Label>
					</S.FormInputContainer>
					<S.FormInputContainer>
						<ControlledInput
							name={`${childId}.insurance`}
							placeholder="Pojišťovna"
						/>
						<S.Label>Pojišťovna</S.Label>
					</S.FormInputContainer>
				</S.FormItem>
				<S.FormItem>
					<Subheadline variant="dark">Kontaktní údaje</Subheadline>
					<S.FormInputContainer>
						<ControlledInput name={`${childId}.phone`} placeholder="Telefon" />
						<S.Label>Telefon</S.Label>
					</S.FormInputContainer>
					<S.FormInputContainer>
						<ControlledInput name={`${childId}.email`} placeholder="E-mail" />
						<S.Label>E-mail</S.Label>
					</S.FormInputContainer>
				</S.FormItem>
				<S.FormItem>
					<Subheadline variant="dark">Ostatní</Subheadline>
					<S.FormInputContainer>
						<ControlledInput name={`${childId}.alergy`} placeholder="Alergie" />
						<S.Label>Alergie</S.Label>
					</S.FormInputContainer>
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
					<S.FormInputContainer>
						<ControlledInput
							name={`${childId}.health-issues`}
							placeholder="Upozornění  na zdravotní potíže"
						/>
						<S.Label>Zdravotní potíže</S.Label>
						{/* doplnit vysvetlivku (nejaky podnadpis) */}
					</S.FormInputContainer>

					{/* TODO -> checkbox */}
					<div>
						{/* //tohle asi ani nepotrebuju posilat, spis by to melo byt required jinak je nepustit dal */}
						<ControlledCheckbox name={`${childId}.`}>
							Souhlasím s podmínkami
						</ControlledCheckbox>
						{/* doplnit vysvetlivku (nejaky podnadpis) */}
					</div>
					<S.FormInputContainer>
						<ControlledInput
							name={`${childId}.found-us`}
							placeholder="Jak jste se o nás dozvěděli?"
						/>
						<S.Label>Jak jste se o nás dozvěděli?</S.Label>
						{/* doplnit vysvetlivku (nejaky podnadpis) */}
					</S.FormInputContainer>
				</S.FormItem>
			</S.Container>
			<Button>
				Odeslat vše <S.ArrowRightIcon size={38} />
			</Button>
		</S.Form>
	);
};
