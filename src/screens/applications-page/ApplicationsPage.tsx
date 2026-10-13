import { MaxWidth } from '~/ui/components';
import { joinValues } from '~/utils';

import { SectionForm } from './SectionForm';

import * as S from './ApplicationsPage.style';

interface ApplicationsPageProps {
  courseId?: string;
  name?: string;
  date?: string;
  price?: string;
  spreadsheetId?: number;
  capacity?: number;
  capacityMale?: number;
  capacityFemale?: number;
  isResidential?: boolean;
}

export function ApplicationsPageScreen({
  spreadsheetId,
  courseId,
  date,
  price,
  name,
  capacity,
  capacityMale,
  capacityFemale,
  isResidential,
}: ApplicationsPageProps) {
  return (
    <MaxWidth>
      <S.Wrapper>
        <S.Headline>{joinValues([courseId, ' - ', name])}</S.Headline>
        <S.Subheadline>{date}</S.Subheadline>
        {typeof spreadsheetId === 'number' && (
          <SectionForm
            spreadsheetId={spreadsheetId}
            isResidential={isResidential}
            limits={{
              total: capacity,
              male: capacityMale,
              female: capacityFemale,
            }}
            courseInfo={{
              courseId,
              name,
              date,
              price,
            }}
          />
        )}
      </S.Wrapper>
    </MaxWidth>
  );
}
