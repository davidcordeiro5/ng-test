import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div<{ active?: boolean }>`
	cursor: pointer;
	opacity: ${({ active }) => (active ? 1 : 0.5)};

	:hover {
		opacity: 1;
		transform: scale(1.1);
	}

	transition: all 0.2s ease-in;
`;

type TFlag = {
	src: string;
	active?: boolean;
	alt: string;
	onClick?: () => void;
};

const Flag = ({ onClick, active, alt, src }: TFlag) => {
	return (
		<Container onClick={onClick} active={active}>
			<Image src={src} width={56} height={35} alt={alt} />
		</Container>
	);
};

export default Flag;
