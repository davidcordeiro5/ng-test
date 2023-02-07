import { FC } from 'react';
import axios from 'axios';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import { TQuest } from '@/types/quests';
import WrappedImage from '@/components/WrappedImage';
import Heading from '@/components/Texts/Heading';
import Image from 'next/image';

import Dash from '@/assets/svg/dot-dash.svg';
import { useRouter } from 'next/router';
import { KeyPress, useKeyControllers } from '@/hooks/useKeyPress';
import { CrossIcon } from '@/assets/svg';
import Paragraph from '@/components/Texts/Paragraph';

import CharacteristicWrapper from '@/components/Pages/Quests/Characteristic/CharacteristicWrapper';
import Button from '@/components/Button';
import Rewards from '@/components/Pages/Quests/Rewards';
import { useQuery } from '@tanstack/react-query';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
	margin: 0 auto;
	max-width: 755px;
	width: 100%;
	height: calc(100% - 70px);
	${({ theme: { spacing } }) => `
    padding: ${spacing['2xs']} ${spacing.s};
		margin-bottom: ${spacing['4xs']};
  `};
`;

const QuestInfos = styled.div`
	position: relative;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	${({ theme: { colors, radius, spacing } }) => `
		padding: ${spacing['5xs']};
		border: ${colors.border?.lightGrey500};
		border-radius: ${radius.xl};
	`}

	${Rewards} {
		position: absolute;
		bottom: 24px;
		left: 16px;
	}

	${Button} {
		position: absolute;
		bottom: 24px;
		right: 16px;
	}

	.ng-cross {
		position: absolute;
		cursor: pointer;
		background: none;
		border: none;
		z-index: 1;
		top: 10px;
		right: 10px;
	}

	.clear-radius {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
`;

const WrappedTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	${({ theme: { spacing } }) => `
    margin: ${spacing['5xs']} 0;
    
    h2 {
      margin: 0 ${spacing['4xs']};
    }
	`}

	.rotate {
		transform: rotate(180deg);
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	${({ theme: { spacing } }) => `
    padding: 0 ${spacing['3xs']};
    
    > p {
      margin-top: ${spacing['2xs']};
    }
	`}
`;

const getQuests = async () => {
	const res = await axios.get<TQuest[]>('http://localhost:3000/api/quests');
	return res.data;
};

export const getStaticPaths = async () => {
	const data = await getQuests();

	const paths = data.map((quest) => ({
		params: { id: `${quest.id}` }
	}));

	return {
		paths: paths,
		fallback: true
	};
};

const getQuestId = async (id: string) => {
	const res = await axios.get(`http://localhost:3000/api/quests/${id}`);
	return res.data;
};

export const getStaticProps: GetStaticProps = async (context) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const id = context?.params?.id;
	const data = await getQuestId(id as string);

	return { props: { quest: data } };
};

const Quest: FC<{ quest: TQuest }> = ({ quest }) => {
	const { locale, push, query } = useRouter();
	const { t } = useTranslation();

	const id = query.id as string;
	const { data, isLoading } = useQuery(['quest'], () => getQuestId(id), { initialData: quest });

	const backToQuests = () => push('/quests', undefined, { locale });

	useKeyControllers(KeyPress.ESCAPE, () => {
		backToQuests();
	});

	if (isLoading && !data) return <p>isLoading ...</p>;

	const metricsKeys = ['skillTree', 'difficulty', 'skill', 'type'];

	return (
		<Container>
			<QuestInfos>
				<button className='ng-cross' onClick={backToQuests}>
					<Image src={CrossIcon} width={14} height={14} alt='logo' />
				</button>
				<WrappedImage className='clear-radius' radius='l' height={207} src={data.cover} alt='card-cover' />
				<Content>
					<WrappedTitle>
						<Image src={Dash} width={99} height={10} alt='logo' className='rotate' />
						<Heading level='h2' size='l'>
							{data.title}
						</Heading>
						<Image src={Dash} width={99} height={10} alt='logo' />
					</WrappedTitle>
					<CharacteristicWrapper quest={data} keys={metricsKeys} />
					<Paragraph color='grey'>{data.description}</Paragraph>
				</Content>
				<Rewards exp={2000} />
				<Button onClick={backToQuests}>{t('quest.backButton')}</Button>
			</QuestInfos>
		</Container>
	);
};

export default Quest;
