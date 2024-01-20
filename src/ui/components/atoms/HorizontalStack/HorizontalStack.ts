import styled from 'styled-components';

type justifyOptions =
  | 'space-between'
  | 'space-evenly'
  | 'center'
  | 'space-around'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'left'
  | 'right';

export const HorizontalStack = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'justify',
      'align',
      'direction',
      'gap',
      'flex',
      'textAlign',
      'width',
      'relative',
      'wrap',
    ].includes(prop),
})<{
  justify?: justifyOptions;
  align?: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: string;
  textAlign?: 'left' | 'center' | 'right';
  width?: string;
  relative?: boolean;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flex?: string;
}>`
  position: ${({ relative }) => (relative ? 'relative' : 'static')};
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  align-items: ${({ align }) => (align ? align : 'stretch')};
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  gap: ${({ gap }) => (gap ? gap : '0')};
  height: 100%;
  width: ${({ width }) => (width ? width : '100%')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : 'nowrap')};
  flex: ${({ flex }) => (flex ? flex : 'initial')};
`;
