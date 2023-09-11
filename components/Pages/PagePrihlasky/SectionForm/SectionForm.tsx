import { Danger, Subheadline } from "@ui-library";
import * as S from "./SectionForm.style";
import { FormProvider, useForm } from "react-hook-form";
import { ControlledInput, ControlledNameInput } from "./ControlledInput";
import { ControlledSelect } from "./ControlledSelect";
import { createOption } from "utils/functions";
import { IconButton } from "components/Shared";
import { useState } from "react";
import { useRouter } from "next/router";
import { SuccessModal } from "./SuccessModal";
import { appendSpreadsheet } from "lib/google";
import dayjs from "dayjs";
import { FormValues } from "../PagePrihlasky.interface";
import axios from "axios";

interface SectionFormProps {
  spreadsheet: string;
}

export const SectionForm = ({ spreadsheet }: SectionFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (d: any) => {
    const newVals = normalizeSelectInputs(d);
    setIsLoading(true);
    try {
      await handleExcelUpload(newVals);
      axios.post("/api/email", { email: d?.email });
    } catch (e) {
      console.log("cant send email or create user");
    } finally {
      setIsOpen(true);
      setIsLoading(false);
    }
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
                name="firstName"
                placeholder="Jméno dítěte"
                required="Jméno nesmí být prázdné"
              />
              <S.Label>Jméno dítěte</S.Label>
              <Danger>{errors?.firstName?.message}</Danger>
            </S.FormInputContainer>
            <S.FormInputContainer>
              <ControlledInput
                name="lastName"
                placeholder="Příjmení dítěte"
                required="Příjmení nesmí být prázdné"
              />
              <S.Label>Příjmení dítěte</S.Label>
              <Danger>{errors?.lastName?.message}</Danger>
            </S.FormInputContainer>
            <div>
              <ControlledSelect
                name="gender"
                placeholder="Pohlaví"
                options={[
                  createOption("Muž", "muž"),
                  createOption("Žena", "žena"),
                ]}
                required="Pohlaví musí být vyplněno"
              />
              <Danger>{errors?.gender?.message}</Danger>
            </div>
            <S.FormInputContainer>
              <ControlledInput
                name="personalIdNum"
                placeholder="Rodné číslo dítěte (př. 045421/1234)"
                pattern={{
                  value: /\d{4}([.,\/]\d{4})/,
                  message:
                    "Rodné číslo v nesprávném formátu. Příklad: 045421/1234.",
                }}
                required="Rodné číslo musí být vyplněno."
              />
              <S.Label>Rodné číslo</S.Label>
              <Danger>{errors?.personalIdNum?.message}</Danger>
            </S.FormInputContainer>
            <div>
              <ControlledSelect
                name="czechNationality"
                options={[createOption("Ano", "ano"), createOption("Ne", "ne")]}
                placeholder="Je dítě občanem ČR?"
                required="Národnost musí být vyplněna"
              />
              <Danger>{errors?.czechNationality?.message}</Danger>
            </div>
            <S.FormInputContainer>
              <ControlledInput
                name="dateOfBirth"
                placeholder="Datum narození dítěte"
                required="Datum narození musí být vyplněno."
              />
              <S.Label>Datum narození dítěte</S.Label>
              <Danger>{errors?.dateOfBirth?.message}</Danger>
            </S.FormInputContainer>
            <S.FormInputContainer>
              <ControlledSelect
                name="insurance"
                options={[
                  createOption(
                    "Všeobecná zdravotní pojišťovna",
                    "všeobecná zdravotní pojišťovna"
                  ),
                  createOption(
                    "Vojenská zdravotní pojišťovna",
                    "vojenská zdravotní pojišťovna"
                  ),
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
              <Danger>{errors?.insurance?.message}</Danger>
            </S.FormInputContainer>
          </S.FormItem>
          <S.FormItem>
            <Subheadline variant="dark">Kontaktní údaje</Subheadline>
            <S.FormInputContainer>
              <ControlledInput
                name="phone"
                placeholder="Telefon"
                required="Telefon musí být vyplněn"
              />
              <S.Label>Telefon</S.Label>
              <Danger>{errors?.phone?.message}</Danger>
            </S.FormInputContainer>
            <S.FormInputContainer>
              <ControlledInput
                name="email"
                placeholder="E-mail"
                pattern={{
                  value: /\S+@\S+\.\S+/,
                  message:
                    "Platný email musí obsahovat @ (př. novak.filip@email.cz).",
                }}
                required="Email musí být vyplněn."
              />
              <S.Label>E-mail</S.Label>
              <Danger>{errors?.email?.message}</Danger>
            </S.FormInputContainer>
            <S.FormInputContainer>
              <ControlledInput
                name="address"
                placeholder="Adresa a číslo popisné"
                required="Adresa musí být vyplněna"
              />
              <S.Label>Adresa a číslo popisné</S.Label>
              <Danger>{errors?.address?.message}</Danger>
            </S.FormInputContainer>
            <S.FormInputContainer>
              <ControlledInput
                name="city"
                placeholder="Město"
                required="Město musí být vyplněno"
              />
              <S.Label>Město</S.Label>
              <Danger>{errors?.city?.message}</Danger>
            </S.FormInputContainer>
            <S.FormInputContainer>
              <ControlledInput
                name="postCode"
                placeholder="PSČ"
                required="PSČ musí být vyplněno"
              />
              <S.Label>PSČ</S.Label>
              <Danger>{errors?.postCode?.message}</Danger>
            </S.FormInputContainer>
          </S.FormItem>
          <S.FormItem>
            <Subheadline variant="dark">Ostatní</Subheadline>
            <S.FormInputContainer>
              <ControlledInput name="alergy" placeholder="Alergie" />
              <S.Label>Alergie</S.Label>
            </S.FormInputContainer>
            <div>
              <ControlledSelect
                name="swimmingAbilities"
                placeholder="Plavecké schopnosti"
                options={[
                  createOption("Plavec", "plavec"),
                  createOption("Neplavec", "neplavec"),
                ]}
                required="Plavecké schopnosti musí být vyplněny."
              />
              <Danger>{errors?.swimmingAbilities?.message}</Danger>
            </div>
            <S.FormInputContainer>
              <ControlledInput
                name="healthIssues"
                placeholder="Upozornění  na zdravotní potíže"
              />
              <S.Label>Zdravotní potíže</S.Label>
            </S.FormInputContainer>

            <S.FormInputContainer>
              <ControlledInput
                name="foundUs"
                placeholder="Jak jste se o nás dozvěděli?"
              />
              <S.Label>Jak jste se o nás dozvěděli?</S.Label>
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

          <IconButton
            isLoading={isLoading}
            disabled={isLoading}
            iconAfter={S.ArrowRightIcon}
          >
            Odeslat
          </IconButton>
        </S.SubmitContainer>
      </S.Form>
    </FormProvider>
  );
};
