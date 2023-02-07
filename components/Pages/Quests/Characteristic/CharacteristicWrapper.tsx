import { TQuest } from '@/types/quests';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import Characteristic from './Characteristic';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 3rem;
	align-items: center;

	${({ theme }) => `
		margin-top: ${theme.spacing['4xs']};
		> div {
			margin-bottom: ${theme.spacing['4xs']};
		}

		div:nth-last-child(-n + 2) {
			margin-bottom: 0;
		}
	`};
`;

type TQuestAndKeys = {
	quest: TQuest;
	keys: string[];
};

const CharacteristicWrapper = ({ quest, keys }: TQuestAndKeys) => {
	type TQuestKeys = keyof typeof quest;
	const characteristics: TQuestKeys[] = keys as TQuestKeys[];

	const { t, ready } = useTranslation();

	return (
		<Wrapper>
			{characteristics.map((charact, index) => {
				const title = ready ? t(`quest.charact.${charact}`) : charact.replace(/([a-z])([A-Z])/g, '$1 $2');
				return (
					<Characteristic
						isBlue={charact === 'skillTree'}
						key={index}
						title={title}
						difficulty={charact === 'difficulty' ? quest[`${charact}`] : undefined}
						value={charact !== 'difficulty' ? quest[`${charact}`] : undefined}
					/>
				);
			})}
		</Wrapper>
	);
};

export default CharacteristicWrapper;
