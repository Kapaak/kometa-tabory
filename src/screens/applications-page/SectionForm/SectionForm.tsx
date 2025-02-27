import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios';
import dayjs from 'dayjs';
import posthog from 'posthog-js';

import { appendSpreadsheet } from '~/libs';
import { Danger, Subheadline, SuccessModal } from '~/ui/components';
import { createOption } from '~/utils';

import { ControlledInput, ControlledNameInput } from './ControlledInput';
import { ControlledSelect } from './ControlledSelect';

import * as S from './SectionForm.style';

interface SectionFormProps {
  spreadsheetId: number;
  courseInfo: {
    courseId?: string;
    name?: string;
    date?: string;
    price?: string;
  };
}

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  alergy: string;
  city: string;
  czechNationality: string;
  dateOfBirth: string;
  foundUs: string;
  gender: string;
  healthIssues: string;
  insurance: string;
  personalIdNum: string;
  phone: string;
  postCode: string;
  swimmingAbilities: string;
};

export const SectionForm = ({
  spreadsheetId,
  courseInfo,
}: SectionFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<FormValues>();

  const onSubmit = async (formValues: FormValues) => {
    setIsLoading(true);
    try {
      await handleExcelUpload(formValues);

      await axios.post('/api/email', {
        email: formValues?.email,
        ...courseInfo,
      });

      setIsModalOpen(true);
      posthog.capture('conversion', { property: 'value' });
    } catch (e) {
      toast('Nepodařilo se vytvořit přihlášku. Zkuste to prosím znovu.', {
        type: 'error',
        autoClose: false,
        position: 'bottom-right',
        theme: 'colored',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const resetAll = () => {
    reset();
    setIsModalOpen(false);
  };

  const redirectHome = () => {
    router.push('/');
  };

  const handleExcelUpload = async (d: FormValues) => {
    const currentDateTime = dayjs().format('DD-MM-YYYY hh:mm');
    await appendSpreadsheet(
      {
        'Časová značka': currentDateTime,
        Jméno: d?.firstName,
        Příjmení: d?.lastName,
        Pohlaví: d?.gender,
        'Rodné číslo': d?.personalIdNum,
        'Je dítě občan ČR': d?.czechNationality,
        'Datum narození': d?.dateOfBirth,
        'Zdravotní pojišťovna': d?.insurance,
        Telefon: d?.phone,
        Email: d?.email,
        'Adresa a číslo popisné': d?.address,
        Město: d?.city,
        PSČ: d?.postCode,
        Alergie: d?.alergy,
        'Plavecké schopnosti': d?.swimmingAbilities,
        'Zdravotní potíže': d?.healthIssues,
        'Jak jste se o nás dozvěděli': d?.foundUs,
      },
      spreadsheetId
    ).catch((e) => {
      throw e;
    });
  };

  return (
    <FormProvider {...form}>
      <ToastContainer />
      <SuccessModal
        open={isModalOpen}
        onClose={resetAll}
        onRedirect={redirectHome}
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
                  createOption('Muž', 'muž'),
                  createOption('Žena', 'žena'),
                ]}
                required="Pohlaví musí být vyplněno"
              />
              <Danger>{errors?.gender?.message}</Danger>
            </div>
            <S.FormInputContainer>
              <ControlledInput
                name="personalIdNum"
                placeholder="Rodné číslo dítěte (př. 045421/1234)"
                // pattern={{
                //   value: /\d{4}([.,\/]\d{4})/,
                //   message:
                //     'Rodné číslo v nesprávném formátu. Příklad: 045421/1234.',
                // }}
                required="Rodné číslo musí být vyplněno."
              />
              <S.Label>Rodné číslo</S.Label>
              <Danger>{errors?.personalIdNum?.message}</Danger>
            </S.FormInputContainer>
            <div>
              <ControlledSelect
                name="czechNationality"
                options={[createOption('Ano', 'ano'), createOption('Ne', 'ne')]}
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
                    'Všeobecná zdravotní pojišťovna',
                    'všeobecná zdravotní pojišťovna'
                  ),
                  createOption(
                    'Vojenská zdravotní pojišťovna',
                    'vojenská zdravotní pojišťovna'
                  ),
                  createOption(
                    'Česká průmyslová zdravotní pojišťovna',
                    'česká průmyslová zdravotní pojišťovna'
                  ),
                  createOption(
                    'Oborová zdravotní pojišťovna',
                    'oborová zdravotní pojišťovna'
                  ),
                  createOption(
                    'Zaměstnanecká pojišťovna Škoda',
                    'zaměstnanecká pojišťovna škoda'
                  ),
                  createOption(
                    'Zdravotní pojišťovna ministerstva vnitra',
                    'zdravotní pojišťovna ministerstva vnitra'
                  ),
                  createOption(
                    'Revírní bratrská pokladna zdravotní pojišťovna',
                    'revírní bratrská pokladna zdravotní pojišťovna'
                  ),
                  createOption('Jiná', 'jiná'),
                  createOption('Žádná', 'žádná'),
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
                    'Platný email musí obsahovat @ (př. novak.filip@email.cz).',
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
                  createOption('Plavec', 'plavec'),
                  createOption('Neplavec', 'neplavec'),
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
            Odesláním přihlášky potvrzuji, že jsem se seznámil(a) s{' '}
            <S.UnderlinedInput
              href="/files/VSEOBECNE-PODMINKY.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              podmínkami přijetí
            </S.UnderlinedInput>
            . S podmínkami souhlasím a moje dítě je splňuje.
          </S.Text>

          <S.SubmitButton isLoading={isLoading} disabled={isLoading}>
            Odeslat
          </S.SubmitButton>
        </S.SubmitContainer>
      </S.Form>
    </FormProvider>
  );
};
