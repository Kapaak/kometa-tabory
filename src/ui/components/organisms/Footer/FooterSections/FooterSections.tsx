//components
import FooterSection from "./FooterSection/FooterSection";
//interfaces
import { HeadlineFragment } from "~/types";

interface Props {
  data: HeadlineFragment[];
}

const FooterSections = ({ data }: Props) => {
  return (
    <>
      {data.map((d, i) => {
        return (
          <FooterSection key={i} headline={d.headline} fragment={d.fragment} />
        );
      })}
    </>
  );
};

export default FooterSections;
