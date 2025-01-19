import TrainerImage from '~/public/images/trainer.png';
import { Accordion, Headline, MaxWidth, VerticalStack } from '~/ui/components';

import { data } from './ContactSection.data';
import { ContactSectionItem } from './ContactSectionItem';

import * as S from './ContactSection.style';

export const ContactSection = () => {
  return (
    <S.ContactSection name="contact">
      <MaxWidth>
        <Headline>Kontakt</Headline>
        <S.ContactSectionWrapper gap="2rem">
          <S.Image
            src={TrainerImage}
            alt="hlavní trenérka plavání Anna Matušová"
          />
          <VerticalStack margin="-2rem 0 0 0" flex="1">
            <Accordion
              accordionItems={[
                {
                  title: 'Anna Matušová',
                  subtitle: 'Vedoucí táborů',
                  content:
                    'Plavání se věnuji od malička a prošla jsem si celou plaveckou přípravku. Postupem času jsem se začala věnovat trénování dětí a nyní vedu plavecké kurzy a závodní přípravku plavců na Lužánkách. Ve volném čase ráda cestuji a poznávám nová místa.',
                },
                {
                  title: 'Tom Strnad',
                  subtitle: 'Vedoucí táborů',
                  content:
                    'Trénování dětí se věnuji více než 8 let. Momentálně působím na bazénu za Lužánkami, kde trénuji závodní přípravku, a také trénuji děti v kurzech. Ve volném čase ráda cestuji a sportuji.',
                },
              ]}
            />

            <VerticalStack padding="2rem 0 0 0" gap="2rem">
              {data?.map((contact) => (
                <ContactSectionItem
                  key={contact.title}
                  title={contact.title}
                  description={contact.description}
                  icon={contact.icon}
                />
              ))}
            </VerticalStack>
          </VerticalStack>
        </S.ContactSectionWrapper>
      </MaxWidth>
    </S.ContactSection>
  );
};
