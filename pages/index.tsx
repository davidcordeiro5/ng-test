import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Heading from '@/components/Texts/Heading';
import Paragraph from '@/components/Texts/Paragraph';
import Button from '@/components/Button';
import Link from 'next/link';

const Main = styled.main`
	max-width: 1200px;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;

	${({ theme: { spacing, colors } }) => `
		padding: 0 ${spacing.s};

		text-align: center;
		> h1 {
			text-shadow: 0 0 11px ${colors.gold};

			margin-bottom: ${spacing.s};
		}

		${Button} {
			margin-top: ${spacing.s};
		}
	`};
`;

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale || 'en'))
		}
	};
}

export default function Home() {
	const { locale } = useRouter();
	const { t } = useTranslation();

	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<Main>
				<Heading size='display3' color='gold' level='h1'>
					{t('home.title')}
				</Heading>
				<Paragraph size='l'>{t('home.description')}</Paragraph>
				<Link href={'/quests'} locale={locale}>
					<Button>{t('home.goToQuests')}</Button>
				</Link>
			</Main>
		</>
	);
}
