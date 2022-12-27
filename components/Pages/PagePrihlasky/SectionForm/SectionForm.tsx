import { Button, Subheadline } from "@ui-library";
import * as S from "./SectionForm.style";
import { FormProvider, useForm } from "react-hook-form";
import { ControlledInput, ControlledNameInput } from "./ControlledInput";
import { ControlledSelect } from "./ControlledSelect";
import { createOption } from "utils/functions";
import { IconButton } from "components/Shared";
import { useState } from "react";
import { useRouter } from "next/router";
import { SuccessModal } from "./SuccessModal";
import { CircleWavyCheck } from "phosphor-react";
import { appendSpreadsheet } from "lib/google";
import dayjs from "dayjs";
import { FormValues } from "../PagePrihlasky.interface";

interface SectionFormProps {
	spreadsheet: string;
}

export const SectionForm = ({ spreadsheet }: SectionFormProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const router = useRouter();

	const onSubmit = async (d: any) => {
		const newVals = normalizeSelectInputs(d);
		handleExcelUpload(newVals);
		setIsOpen(true);
	};

	//todo select input vraci {label:"...",value:"..."}, ja chci ale jen "...", to se nastavuje uvnitr toho selectu nejak
	const normalizeSelectInputs = (data: any) => {
		const newData = { ...data };
		newData.czechNationality = data?.czechNationality?.value;
		newData.gender = data?.gender?.value;
		newData.insurance = data?.insurance?.value;
		newData.swimmingAbilities = data?.swimmingAbilities?.value;

		return newData;
	};

	const form = useForm<FormValues>();

	const {
		handleSubmit,
		formState: { errors },
		reset,
	} = form;

	const resetAll = () => {
		//ty select pole se neresetovaly, kdyz jsem dal reset()
		reset({
			gender: "",
			czechNationality: "",
			insurance: "",
			swimmingAbilities: "",
		});
		setIsOpen(false);
	};

	const redirectHome = () => {
		router.push("/");
	};

	const handleExcelUpload = async (d: FormValues) => {
		const currentDateTime = dayjs().format("DD-MM-YYYY hh:mm");
		await appendSpreadsheet(
			{
				"Časová značka": currentDateTime,
				Jméno: d?.firstName,
				Příjmení: d?.lastName,
				Pohlaví: d?.gender,
				"Rodné číslo": d?.personalIdNum,
				"Je dítě občan ČR": d?.czechNationality,
				"Datum narození": d?.dateOfBirth,
				"Zdravotní pojišťovna": d?.insurance,
				Telefon: d?.phone,
				Email: d?.email,
				"Adresa a číslo popisné": d?.address,
				Město: d?.city,
				PSČ: d?.postCode,
				Alergie: d?.alergy,
				"Plavecké schopnosti": d?.swimmingAbilities,
				"Zdravotní potíže": d?.healthIssues,
				"Jak jste se o nás dozvěděli": d?.foundUs,
			},
			spreadsheet
		);
	};

	return (
		<FormProvider {...form}>
			{/* <button onClick={handleExcelUpload}>check excel</button> */}
			<IconButton iconAfter={CircleWavyCheck}>icon</IconButton>
			<SuccessModal
				isOpen={isOpen}
				addChild={resetAll}
				redirect={redirectHome}
			/>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<S.Container>
					<S.FormItem>
						<Subheadline variant="dark">Osobní údaje</Subheadline>
						<S.FormInputContainer>
							<ControlledNameInput
								name={`firstName`}
								placeholder="Jméno dítěte"
								required="Jméno nesmí být prázdné"
							/>
							<S.Label>Jméno dítěte</S.Label>
							<S.ErrorContainer>{errors?.firstName?.message}</S.ErrorContainer>
						</S.FormInputContainer>
						<S.FormInputContainer>
							<ControlledInput
								name={`lastName`}
								placeholder="Příjmení dítěte"
								required="Příjmení nesmí být prázdné"
							/>
							<S.Label>Příjmení dítěte</S.Label>
							<S.ErrorContainer>{errors?.lastName?.message}</S.ErrorContainer>
						</S.FormInputContainer>
						<div>
							<ControlledSelect
								name={`gender`}
								placeholder="Pohlaví"
								options={[
									createOption("Muž", "muž"),
									createOption("Žena", "žena"),
								]}
								required="Pohlaví musí být vyplněno"
							/>
							<S.ErrorContainer>{errors?.gender?.message}</S.ErrorContainer>
						</div>
						<S.FormInputContainer>
							<ControlledInput
								name={`personalIdNum`}
								placeholder="Rodné číslo dítěte (př. 045421/1234)"
								pattern={/\d{4}([.,\/]\d{4})/}
								required="Rodné číslo v nesprávném formátu. Příklad: 045421/1234."
							/>
							<S.Label>Rodné číslo</S.Label>
							<S.ErrorContainer>
								{errors?.personalIdNum?.message}
							</S.ErrorContainer>
						</S.FormInputContainer>
						<div>
							<ControlledSelect
								name={`czechNationality`}
								options={[createOption("Ano", "ano"), createOption("Ne", "ne")]}
								placeholder="Je dítě občanem ČR?"
								required="Národnost musí být vyplněna"
							/>
							<S.ErrorContainer>
								{errors?.czechNationality?.message}
							</S.ErrorContainer>
						</div>
						<S.FormInputContainer>
							<ControlledInput
								name={`dateOfBirth`}
								placeholder="Datum narození dítěte"
								required="Datum narození musí být vyplněno."
							/>
							<S.Label>Datum narození dítěte</S.Label>
							<S.ErrorContainer>
								{errors?.dateOfBirth?.message}
							</S.ErrorContainer>
						</S.FormInputContainer>

						{/* TODO -> posilat do excelu vypocitany vek ditete v dobe konani taboru */}

						<S.FormInputContainer>
							<ControlledSelect
								name={`insurance`}
								options={[
									createOption(
										"Všeobecná zdravotní pojišťovna",
										"všeobecná zdravotní pojišťovna"
									),
									createOption("Vojenská zdravotní pojišťovna", "vojenská"),
									createOption(
										"Česká průmyslová zdravotní pojišťovna",
										"česká průmyslová zdravotní pojišťovna"
									),
									createOption(
										"Oborová zdravotní pojišťovna",
										"oborová zdravotní pojišťovna"
									),
									createOption(
										"Zaměstnanecká pojišťovna Škoda",
										"zaměstnanecká pojišťovna škoda"
									),
									createOption(
										"Zdravotní pojišťovna ministerstva vnitra",
										"zdravotní pojišťovna ministerstva vnitra"
									),
									createOption(
										"Revírní bratrská pokladna zdravotní pojišťovna",
										"revírní bratrská pokladna zdravotní pojišťovna"
									),
									createOption("Jiná", "jiná"),
									createOption("Žádná", "žádná"),
								]}
								placeholder="Zdravotní pojišťovna"
								required="Zdravotní pojišťovn musí být vyplněna"
							/>
							<S.ErrorContainer>{errors?.insurance?.message}</S.ErrorContainer>
						</S.FormInputContainer>
					</S.FormItem>
					<S.FormItem>
						<Subheadline variant="dark">Kontaktní údaje</Subheadline>
						<S.FormInputContainer>
							<ControlledInput
								name={`phone`}
								placeholder="Telefon"
								required="Telefon musí být vyplněn"
							/>
							<S.Label>Telefon</S.Label>
							<S.ErrorContainer>{errors?.phone?.message}</S.ErrorContainer>
						</S.FormInputContainer>
						<S.FormInputContainer>
							<ControlledInput
								name={`email`}
								placeholder="E-mail"
								pattern={/\S+@\S+\.\S+/}
								required="Platný email musí obsahovat @ (př. novak.filip@email.cz)."
							/>
							<S.Label>E-mail</S.Label>
							<S.ErrorContainer>{errors?.email?.message}</S.ErrorContainer>
						</S.FormInputContainer>
						<S.FormInputContainer>
							<ControlledInput
								name={`address`}
								placeholder="Adresa a číslo popisné"
								required="Adresa musí být vyplněna"
							/>
							<S.Label>Adresa a číslo popisné</S.Label>
							<S.ErrorContainer>{errors?.address?.message}</S.ErrorContainer>
						</S.FormInputContainer>
						<S.FormInputContainer>
							<ControlledInput
								name={`city`}
								placeholder="Město"
								required="Město musí být vyplněno"
							/>
							<S.Label>Město</S.Label>
							<S.ErrorContainer>{errors?.city?.message}</S.ErrorContainer>
						</S.FormInputContainer>
						<S.FormInputContainer>
							<ControlledInput
								name={`postCode`}
								placeholder="PSČ"
								required="PSČ musí být vyplněno"
							/>
							<S.Label>PSČ</S.Label>
							<S.ErrorContainer>{errors?.postCode?.message}</S.ErrorContainer>
						</S.FormInputContainer>
					</S.FormItem>
					<S.FormItem>
						<Subheadline variant="dark">Ostatní</Subheadline>
						<S.FormInputContainer>
							<ControlledInput name={`alergy`} placeholder="Alergie" />
							<S.Label>Alergie</S.Label>
						</S.FormInputContainer>
						<div>
							{/* <label htmlFor="">Plavecké schopnosti</label> */}
							<ControlledSelect
								name={`swimmingAbilities`}
								placeholder="Plavecké schopnosti"
								options={[
									createOption("Plavec", "plavec"),
									createOption("Neplavec", "neplavec"),
								]}
								required="Plavecké schopnosti musí být vyplněny."
							/>
							<S.ErrorContainer>
								{errors?.swimmingAbilities?.message}
							</S.ErrorContainer>
						</div>
						<S.FormInputContainer>
							<ControlledInput
								name={`healthIssues`}
								placeholder="Upozornění  na zdravotní potíže"
							/>
							<S.Label>Zdravotní potíže</S.Label>
							{/* doplnit vysvetlivku (nejaky podnadpis) */}
						</S.FormInputContainer>

						<S.FormInputContainer>
							<ControlledInput
								name={`foundUs`}
								placeholder="Jak jste se o nás dozvěděli?"
							/>
							<S.Label>Jak jste se o nás dozvěděli?</S.Label>
							{/* doplnit vysvetlivku (nejaky podnadpis) */}
						</S.FormInputContainer>
					</S.FormItem>
				</S.Container>
				<S.SubmitContainer>
					<S.Text>
						Odesláním přihlášky potvrzuji, že jsem se seznámil(a) s{" "}
						<S.UnderlinedInput
							href="/files/VSEOBECNE-PODMINKY.pdf"
							rel="noopener noreferrer"
							target="_blank"
						>
							podmínkami přijetí
						</S.UnderlinedInput>
						. S podmínkami souhlasím a moje dítě je splňuje.
					</S.Text>
					<Button>
						Odeslat <S.ArrowRightIcon size={38} />
					</Button>
				</S.SubmitContainer>
			</S.Form>
		</FormProvider>
	);
};
