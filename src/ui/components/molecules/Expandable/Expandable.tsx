import { useState } from "react";
import * as S from "./Expandable.style";
import { Icon as TIcon } from "phosphor-react";
import { VerticalStack } from "~/ui/components";

interface FAQProps {
  title: string;
  subtitle?: string;
  description: string;
  icon?: TIcon;
}

export const Expandable = ({
  title,
  description,
  icon,
  subtitle,
}: FAQProps) => {
  const [showMore, setShowMore] = useState(false);
  const Icon = icon as TIcon;
  return (
    <S.Expandable>
      <S.ExpandingButton onClick={() => setShowMore((prev) => !prev)}>
        {icon && <Icon size={30} weight="light" color="var(--colb)" />}
        <VerticalStack>
          <S.Title>{title}</S.Title>
          {subtitle && <S.Subtitle variant="dark">{subtitle}</S.Subtitle>}
        </VerticalStack>
        <S.CaretIcon size={18} weight="bold" $isActive={showMore} />
      </S.ExpandingButton>
      {showMore && <S.Text variant="dark">{description}</S.Text>}
    </S.Expandable>
  );
};
