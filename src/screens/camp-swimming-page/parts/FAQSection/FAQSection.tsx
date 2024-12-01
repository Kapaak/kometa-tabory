import { useGetAllSwimmingFaqs } from '~/adapters/faqsAdapter';
import { FrequentlyAskedQuestions } from '~/components/FrequentlyAskedQuestions';
import { Headline, SectionElement } from '~/ui/components';

export function FAQSection() {
  const { data } = useGetAllSwimmingFaqs();
  return (
    <SectionElement name="faq">
      <Headline>Základní informace</Headline>
      <FrequentlyAskedQuestions frequentlyAskedQuestions={data} />
    </SectionElement>
  );
}
