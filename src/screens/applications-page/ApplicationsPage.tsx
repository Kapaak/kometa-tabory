import { MaxWidth } from '~/ui/components';

import { SectionForm } from './SectionForm';

import * as S from './ApplicationsPage.style';
// import { IService } from "~/components/Pages/PageHome/ServiceSection/ServiceSection.interface";

interface ApplicationsPageProps {
  title?: string;
  subtitle?: string;
  spreadsheetId?: number;
}

export function ApplicationsPageScreen({
  spreadsheetId,
  subtitle,
  title,
}: ApplicationsPageProps) {
  return (
    <MaxWidth>
      <S.Wrapper>
        <S.Headline>{title}</S.Headline>
        <S.Subheadline>{subtitle}</S.Subheadline>
        {typeof spreadsheetId === 'number' && (
          <SectionForm spreadsheet={spreadsheetId} />
        )}
      </S.Wrapper>
    </MaxWidth>
  );
}
