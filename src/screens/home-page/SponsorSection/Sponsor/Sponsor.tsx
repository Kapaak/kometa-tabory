//libraries
import { StaticImageData } from "next/image";
//styles
import * as S from "./Sponsor.style";

export interface SponsorProps {
  image: StaticImageData;
  href: string;
  name: string;
}

const Sponsor = ({ href, image, name }: SponsorProps) => {
  return (
    <S.Sponsor href={href}>
      <S.Image src={image} alt={name} height={100} width={120} priority />
    </S.Sponsor>
  );
};

export default Sponsor;
