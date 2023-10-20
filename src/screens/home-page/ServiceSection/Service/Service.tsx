//libraries
import { StaticImageData } from "next/image";
import { useState } from "react";

//components
import { Button, Hidden, Text } from "~/ui/components";

import { FullTerm } from "./FullTerm";
//styles
import { ReducedPrice } from "./ReducedPrice";
import * as S from "./Service.style";
//interfaces
//others
import { imageVariant, textVariant } from "./Service.variant";
import { ServiceInfo, ServiceInfoType } from "./ServiceInfo";

interface ServiceProps {
  headline: string;
  text: string;
  image: StaticImageData;
  alt: string;
  info: ServiceInfoType;
  url: string;
  currentCapacity: number;
  isAfterSeason?: boolean;
}
//mozna presunout do normal components
const Service = (props: ServiceProps) => {
  const {
    headline,
    text,
    image,
    alt,
    info,
    url,
    currentCapacity,
    isAfterSeason,
  } = props;
  const isCapacityFull = currentCapacity >= info?.maxCapacity;

  const [showMore, setShowMore] = useState(false);

  return (
    <S.Service
      initial="hidden"
      whileHover="visible"
      animate={showMore ? "visible" : "hidden"}
    >
      <S.ImageContainer variants={imageVariant} transition={{ bounce: 0 }}>
        <S.Image
          src={image}
          placeholder="blur"
          alt={alt}
          $toGrayscale={isCapacityFull}
        />
        {isCapacityFull && <FullTerm />}
      </S.ImageContainer>
      <S.Container layout variants={textVariant}>
        {info?.oldPrice && (
          <ReducedPrice price={info?.price} oldPrice={info?.oldPrice} />
        )}
        <S.Subheadline variant="dark">{headline}</S.Subheadline>
        <Text variant="grey">{info?.date}</Text>
        <ServiceInfo
          currentCapacity={currentCapacity}
          date={info?.date}
          maxCapacity={info?.maxCapacity}
          price={info?.price}
          oldPrice={info?.oldPrice}
          specialEvent={info?.specialEvent}
        />
        <S.ButtonContainer>
          <Hidden up="notebook">
            <Button
              variant="plain"
              onClick={() => setShowMore((prev) => !prev)}
            >
              Více o táboru
            </Button>
          </Hidden>
          {isAfterSeason && <Button disabled>Otevíráme 1.1.2024</Button>}
          {isCapacityFull && !isAfterSeason && (
            <Button disabled>Termín je již zaplněný</Button>
          )}
          {!isCapacityFull && !isAfterSeason && (
            <S.A href={`/prihlasky/${url}`}>Přihláška</S.A>
          )}
        </S.ButtonContainer>
      </S.Container>
    </S.Service>
  );
};

export default Service;
