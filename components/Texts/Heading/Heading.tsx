import { darkTheme, FontColorsType, FontSizeType } from '@/styles/theme';
import React, { FC } from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	size?: FontSizeType;
	color?: FontColorsType;
}

const Heading: FC<HeadingProps> = ({ level = 'h1', size = 'm', children, color = 'white' }) => {
	const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
		React.createElement(level, props, children);

	return (
		<Heading style={{ fontSize: darkTheme.fonts.size[size], color: darkTheme.fonts.colors[color] }}>{children}</Heading>
	);
};

export default Heading;
