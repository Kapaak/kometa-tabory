//libraries
import { useEffect, useState } from 'react';

import { ContentType, FragmentType } from '~/types';
//styles
//interfaces

interface Props {
  fragment: Array<FragmentType>;
  LinkElement?: any;
  TextElement?: any;
  BoldElement?: any;
  //todo -> fix
  // LinkElement?: StyledComponent<"a", any, TextProps, any>;
  // TextElement?: StyledComponent<"p", any, TextProps, never>;
  // BoldElement?: StyledComponent<"p", any, TextProps, never>;
}

export const ContentRenderer = ({
  fragment,
  LinkElement,
  TextElement,
  BoldElement,
}: Props) => {
  const [content, setContent] = useState<any>([]);

  const populate = () => {
    const content: JSX.Element[] = [];

    fragment.map((a, i) => {
      switch (a.type) {
        case ContentType.bold: {
          return (
            BoldElement &&
            content.push(<BoldElement key={i}>{a.output}</BoldElement>)
          );
        }

        case ContentType.link: {
          const outputWithoutSpaces = a.output.replace(/ /g, '');
          let triggerOption = outputWithoutSpaces.includes('+')
            ? 'tel'
            : 'mailto';

          let href = a.href || `${triggerOption}:${outputWithoutSpaces}`;

          return (
            LinkElement &&
            content.push(
              <LinkElement key={i} href={href}>
                {a.output}
              </LinkElement>
            )
          );
        }

        case ContentType.normal:
          return (
            TextElement &&
            content.push(<TextElement key={i}>{a.output}</TextElement>)
          );

        case ContentType.blank:
          return content.push(<br key={i} />);

        default:
          return;
      }
    });

    return content;
  };

  useEffect(() => {
    setContent(populate());
  }, []);

  return content;
};

export default ContentRenderer;
