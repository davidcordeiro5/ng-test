import styled from 'styled-components';

import WrappedImage from '@/components/WrappedImage';
import Heading from '@/components/Texts/Heading';
import { TQuest } from '@/types/quests';
import CharacteristicWrapper from '@/components/Pages/Quests/Characteristic/CharacteristicWrapper';

const Card = styled.div`
	width: 100%;
	height: 100%;

	${({ theme: { colors, radius, spacing } }) => `
		padding: ${spacing['4xs']};
		border: ${colors.border?.lightGrey500};
		border-radius: ${radius.xl};
		background: rgba(0, 0, 0, 0.7);
	`}

	&:hover {
		cursor: pointer;
		-webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 25px -5px rgba(190, 167, 126, 0.4);
		box-shadow: 0px 10px 13px -7px #000000, 0px 0px 25px -5px rgba(190, 167, 126, 0.4);
		transform: scale(1.05);
	}

	transition: all 0.2s ease-out;
`;

const Content = styled.div`
	padding: ${({ theme }) => theme.spacing['5xs']};
`;

type TQuestDetails = {
	questDetails: TQuest;
};

const QuestDetails = ({ questDetails }: TQuestDetails) => {
	const metricsKeys = ['skillTree', 'difficulty', 'skill', 'experience', 'type', 'gold'];

	return (
		<Card>
			<WrappedImage radius='l' height={108} src={questDetails.cover} alt='card-cover' />
			<Content>
				<Heading level='h2'>{questDetails.title}</Heading>
				<CharacteristicWrapper keys={metricsKeys} quest={questDetails} />
			</Content>
		</Card>
	);
};

export default QuestDetails;
