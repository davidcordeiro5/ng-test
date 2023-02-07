import { FontColorsType, FontSizeType } from '@/styles/theme';
import { ReactNode } from 'react';
import styled from 'styled-components';

type TParagraph = {
	color?: FontColorsType;
	size?: FontSizeType;
	children: ReactNode;
	style?: React.CSSProperties;
};

const P = styled.p<{ FontColor: FontColorsType; size: FontSizeType }>`
	${({ theme, FontColor, size }) => `
	  color: ${theme.fonts.colors[FontColor]};
    font-size: ${theme.fonts.size[size]};
		line-height: ${size === 's' ? 14 : 20}px
  `}
`;

const Paragraph = ({ color = 'white', size = 's', children, style }: TParagraph) => {
	return (
		<P FontColor={color} size={size} style={style}>
			{children}
		</P>
	);
};

export default Paragraph;
