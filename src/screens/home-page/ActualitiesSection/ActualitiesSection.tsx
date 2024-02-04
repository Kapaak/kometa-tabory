import { useSanityContext } from '~/contexts';
import { MaxWidth, TextBuilder } from '~/ui/components';

interface ActualitiesSectionProps {}
export function ActualitiesSection({}: ActualitiesSectionProps) {
  const { actualities } = useSanityContext();
  return (
    <section>
      <MaxWidth>
        {actualities.map(
          (actuality, index) =>
            actuality?.text && (
              <TextBuilder
                value={actuality.text}
                options={{ paragraph: { position: 'center' } }}
                key={`${actuality?.title}_${index}`}
              />
            )
        )}
      </MaxWidth>
    </section>
  );
}
