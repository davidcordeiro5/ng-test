import Paragraph from '@/components/Texts/Paragraph';
import styled from 'styled-components';
import Sword from './Sword';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
`;

type TCharacteristic = {
	title: string;
	value: any;
	difficulty?: string | number;
	isBlue?: boolean;
	size?: 's' | 'm';
};

const Characteristic = ({ title, value, difficulty, isBlue, size = 's' }: TCharacteristic) => {
	return (
		<Container>
			<Paragraph color='gold' size={size}>
				{title}
			</Paragraph>

			{difficulty ? (
				<span>
					{[...Array(5)].map((_, index) => (
						<Sword key={index} swordColor={index < difficulty ? 'ligth' : 'dark'} size={size} />
					))}
				</span>
			) : (
				<Paragraph color={isBlue ? 'blue' : 'white'} size={size}>
					{value}
				</Paragraph>
			)}
		</Container>
	);
};

export default Characteristic;
