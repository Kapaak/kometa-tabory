import { Strong, Text } from '~/ui/components';

import * as S from './IndividiualCourse.style';

export function IndividualCourse() {
  return (
    <S.IndividualCourse>
      <Text center>
        Nevybrali jste si žádný z nabízených kurzů? Máte zájem o individuální
        plavání? Kontaktujte nás na tel.: <Strong>+420 773 708 287</Strong> nebo
        napište email na: <Strong>plavaniluzanky@kometaplavani.cz</Strong>
      </Text>
    </S.IndividualCourse>
  );
}
