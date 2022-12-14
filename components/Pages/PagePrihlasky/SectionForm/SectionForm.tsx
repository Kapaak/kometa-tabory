import { Subheadline } from "@ui-library";
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
        "??asov?? zna??ka": currentDateTime,
        Jm??no: d?.firstName,
        P????jmen??: d?.lastName,
        Pohlav??: d?.gender,
        "Rodn?? ????slo": d?.personalIdNum,
        "Je d??t?? ob??an ??R": d?.czechNationality,
        "Datum narozen??": d?.dateOfBirth,
        "Zdravotn?? poji????ovna": d?.insurance,
        Telefon: d?.phone,
        Email: d?.email,
        "Adresa a ????slo popisn??": d?.address,
        M??sto: d?.city,
        PS??: d?.postCode,
        Alergie: d?.alergy,
        "Plaveck?? schopnosti": d?.swimmingAbilities,
        "Zdravotn?? pot????e": d?.healthIssues,
        "Jak jste se o n??s dozv??d??li": d?.foundUs,
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
            <Subheadline variant="dark">Osobn?? ??daje</Subheadline>
            <S.FormInputContainer>
              <ControlledNameInput
                name={`firstName`}
                placeholder="Jm??no d??t??te"
                required="Jm??no nesm?? b??t pr??zdn??"
              />
              <S.Label>Jm??no d??t??te</S.Label>
              <S.ErrorContainer>{errors?.firstName?.message}</S.ErrorContainer>
            </S.FormInputContainer>
            <S.FormInputContainer>
              <ControlledInput
                name={`lastName`}
                placeholder="P????jmen?? d??t??te"
                required="P????jmen?? nesm?? b??t pr??zdn??"
              />
              <S.Label>P????jmen?? d??t??te</S.Label>
              <S.ErrorContainer>{errors?.lastName?.message}</S.ErrorContainer>
            </S.FormInputContainer>
            <div>
              <ControlledSelect
                name={`gender`}
                placeholder="Pohlav??"
                options={[
                  createOption("Mu??", "mu??"),
                  createOption("??ena", "??ena"),
                ]}
                required="Pohlav?? mus?? b??t vypln??no"
              />
              <S.ErrorContainer>{errors?.gender?.message}</S.ErrorContainer>
            </div>
            <S.FormInputContainer>
              <ControlledInput
                name={`personalIdNum`}
                placeholder="Rodn?? ????slo d??t??te (p??. 045421/1234)"
                pattern={/\d{4}([.,\/]\d{4})/}
                required="Rodn?? ????slo v nespr??vn??m form??tu. P????klad: 045421/1234."
              />
              <S.Label>Rodn?? ????slo</S.Label>
              <S.ErrorContainer>
                {errors?.personalIdNum?.message}
              </S.ErrorContainer>
            </S.FormInputContainer>
            <div>
              <ControlledSelect
                name={`czechNationality`}
                options={[createOption("Ano", "ano"), createOption("Ne", "ne")]}
                placeholder="Je d??t?? ob??anem ??R?"
                required="N??rodnost mus?? b??t vypln??na"
              />
              <S.ErrorContainer>
                {errors?.czechNationality?.message}
              </S.ErrorContainer>
            </div>
            <S.FormInputContainer>
              <ControlledInput
                name={`dateOfBirth`}
                placeholder="Datum narozen?? d??t??te"
                required="Datum narozen?? mus?? b??t vypln??no."
              />
              <S.Label>Datum narozen?? d??t??te</S.Label>
              <S.ErrorContainer>
                {errors?.dateOfBirth?.message}
              </S.ErrorContainer>
            </S.FormInputContainer>
            <S.FormInputContainer>
              <ControlledSelect
                name={`insurance`}
                options={[
                  createOption(
                    "V??eobecn?? zdravotn?? poji????ovna",
                    "v??eobecn?? zdravotn?? poji????ovna"
                  ),
                  createOption(
                    "Vojensk?? zdravotn?? poji????ovna",
                    "vojensk?? zdravotn?? poji????ovna"
                  ),
                  createOption(
                    "??esk?? pr??myslov?? zdravotn?? poji????ovna",
                    "??esk?? pr??myslov?? zdravotn?? poji????ovna"
                  ),
                  createOption(
                    "Oborov?? zdravotn?? poji????ovna",
                    "oborov?? zdravotn?? poji????ovna"
                  ),
                  createOption(
                    "Zam??stnaneck?? poji????ovna ??koda",
                    "zam??stnaneck?? poji????ovna ??koda"
                  ),
                  createOption(
                    "Zdravotn?? poji????ovna ministerstva vnitra",
                    "zdravotn?? poji????ovna ministerstva vnitra"
                  ),
                  createOption(
                    "Rev??rn?? bratrsk?? pokladna zdravotn?? poji????ovna",
                    "rev??rn?? bratrsk?? pokladna zdravotn?? poji????ovna"
                  ),
                  createOption("Jin??", "jin??"),
                  createOption("????dn??", "????dn??"),
                ]}
                placeholder="Zdravotn?? poji????ovna"
                required="Zdravotn?? poji????ovn mus?? b??t vypln??na"
              />
              <S.ErrorContainer>{errors?.insurance?.message}</S.ErrorContainer>
            </S.FormInputContainer>
          </S.FormItem>
          <S.FormItem>
            <Subheadline variant="dark">Kontaktn?? ??daje</Subheadline>
            <S.FormInputContainer>
              <ControlledInput
                name={`phone`}
                placeholder="Telefon"
                required="Telefon mus?? b??t vypln??n"
              />
              <S.Label>Telefon</S.Label>
              <S.ErrorContainer>{errors?.phone?.message}</S.ErrorContainer>
            </S.FormInputContainer>
            <S.FormInputContainer>
              <ControlledInput
                name={`email`}
                placeholder="E-mail"
                pattern={/\S+@\S+\.\S+/}
                required="Platn?? email mus?? obsahovat @ (p??. novak.filip@email.cz)."
              />
              <S.Label>E-mail</S.Label>
              <S.ErrorContainer>{errors?.email?.message}</S.ErrorContainer>
            </S.FormInputContainer>
            <S.FormInputContainer>
              <ControlledInput
                name={`address`}
                placeholder="Adresa a ????slo popisn??"
                required="Adresa mus?? b??t vypln??na"
              />
              <S.Label>Adresa a ????slo popisn??</S.Label>
              <S.ErrorContainer>{errors?.address?.message}</S.ErrorContainer>
            </S.FormInputContainer>
            <S.FormInputContainer>
              <ControlledInput
                name={`city`}
                placeholder="M??sto"
                required="M??sto mus?? b??t vypln??no"
              />
              <S.Label>M??sto</S.Label>
              <S.ErrorContainer>{errors?.city?.message}</S.ErrorContainer>
            </S.FormInputContainer>
            <S.FormInputContainer>
              <ControlledInput
                name={`postCode`}
                placeholder="PS??"
                required="PS?? mus?? b??t vypln??no"
              />
              <S.Label>PS??</S.Label>
              <S.ErrorContainer>{errors?.postCode?.message}</S.ErrorContainer>
            </S.FormInputContainer>
          </S.FormItem>
          <S.FormItem>
            <Subheadline variant="dark">Ostatn??</Subheadline>
            <S.FormInputContainer>
              <ControlledInput name={`alergy`} placeholder="Alergie" />
              <S.Label>Alergie</S.Label>
            </S.FormInputContainer>
            <div>
              <ControlledSelect
                name={`swimmingAbilities`}
                placeholder="Plaveck?? schopnosti"
                options={[
                  createOption("Plavec", "plavec"),
                  createOption("Neplavec", "neplavec"),
                ]}
                required="Plaveck?? schopnosti mus?? b??t vypln??ny."
              />
              <S.ErrorContainer>
                {errors?.swimmingAbilities?.message}
              </S.ErrorContainer>
            </div>
            <S.FormInputContainer>
              <ControlledInput
                name={`healthIssues`}
                placeholder="Upozorn??n??  na zdravotn?? pot????e"
              />
              <S.Label>Zdravotn?? pot????e</S.Label>
            </S.FormInputContainer>

            <S.FormInputContainer>
              <ControlledInput
                name={`foundUs`}
                placeholder="Jak jste se o n??s dozv??d??li?"
              />
              <S.Label>Jak jste se o n??s dozv??d??li?</S.Label>
            </S.FormInputContainer>
          </S.FormItem>
        </S.Container>
        <S.SubmitContainer>
          <S.Text>
            Odesl??n??m p??ihl????ky potvrzuji, ??e jsem se sezn??mil(a) s{" "}
            <S.UnderlinedInput
              href="/files/VSEOBECNE-PODMINKY.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              podm??nkami p??ijet??
            </S.UnderlinedInput>
            . S podm??nkami souhlas??m a moje d??t?? je spl??uje.
          </S.Text>

          <IconButton
            loading={isLoading}
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
