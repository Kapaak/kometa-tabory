//components
import { FragmentType } from "~/types";
import { ContentRenderer } from "~/utils";

//styles
import * as S from "./FooterSection.style";

interface Props {
  headline: string;
  fragment: Array<FragmentType>;
}

const FooterSection = ({ headline, fragment }: Props) => {
  return (
    <S.FooterSection>
      <S.Headline variant="light">{headline}</S.Headline>
      <ContentRenderer
        fragment={fragment}
        BoldElement={S.BoldText}
        TextElement={S.TextElement}
        LinkElement={S.LinkElement}
      />
    </S.FooterSection>
  );
};

export default FooterSection;
