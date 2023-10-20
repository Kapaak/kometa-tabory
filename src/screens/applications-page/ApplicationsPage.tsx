import { MaxWidth } from "~/ui/components";

import * as S from "./ApplicationsPage.style";
import { SectionForm } from "./SectionForm";
// import { IService } from "~/components/Pages/PageHome/ServiceSection/ServiceSection.interface";

interface ApplicationsPageProps {
  camp?: any;
  // camp: IService | undefined;
}

export function ApplicationsPageScreen({ camp }: ApplicationsPageProps) {
  return (
    <MaxWidth>
      <S.Wrapper>
        <S.Headline>{camp?.headline}</S.Headline>
        <S.Subheadline>{camp?.info?.date}</S.Subheadline>
        {camp?.spreadsheetId && (
          <SectionForm spreadsheet={camp.spreadsheetId} />
        )}
      </S.Wrapper>
    </MaxWidth>
  );
}
