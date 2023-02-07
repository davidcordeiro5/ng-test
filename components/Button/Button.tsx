import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.button`
	cursor: pointer;
	font-family: 'Cinzel';
	${({ theme: { fonts, spacing, colors, radius } }) => `
    font-weight: ${fonts.weight.bold};
    padding: ${spacing['4xs']} ${spacing.xs};
    border: ${colors.border?.gold};
    color: ${fonts.colors.white};
    border-radius: ${radius.s};
    background: rgba(0, 0, 0, 0.7);
    line-height: 16px;
    text-transform: uppercase;
    
    &:hover {
      text-shadow: 0 0 5px ${colors.gold};
    }
  `}
`;

type TButton = {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
};

const Button = ({ className, children, onClick }: TButton) => {
	return (
		<Container className={className} onClick={onClick}>
			{children}
		</Container>
	);
};

export default styled(Button)``;
