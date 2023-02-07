import { FC } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Link from 'next/link';

import { TQuest } from '@/types/quests';
import QuestDetails from '@/components/Pages/Quests/QuestDetails';
import { between, greaterThan } from '@/styles/mediaQueries';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	${({ theme: { spacing } }) => `
    padding: ${spacing['2xs']} ${spacing.s};
		margin-bottom: ${spacing['4xs']};
  `};

	gap: 24px;

	a {
		text-decoration: none;
	}

	${between(
		'tablet',
		'desktop'
	)(`
		grid-template-columns: repeat(2, 1fr);
	`)}

	${greaterThan('desktop')(`
		grid-template-columns: repeat(3, 1fr);
	`)}
`;

export const getQuests = async () => {
	const res = await axios.get<TQuest[]>('http://localhost:3000/api/quests');
	return res.data;
};

export const getStaticProps = async () => {
	const data = await getQuests();

	return { props: { quests: data } };
};

const Quests: FC<{ quests: TQuest[] }> = ({ quests }) => {
	const { locale } = useRouter();
	const { data, isLoading } = useQuery(['quests'], getQuests, { initialData: quests });

	if (isLoading && !data) return <p>isLoading ...</p>;

	return (
		<Container>
			{data.map((q, index) => (
				<Link key={index} href={`/quests/${q.id}`} locale={locale}>
					<QuestDetails questDetails={q} />
				</Link>
			))}
		</Container>
	);
};

export default Quests;
