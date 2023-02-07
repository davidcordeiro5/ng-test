import Image from 'next/image';
import { NgTitle } from '@/assets/svg';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { lessThan } from '@/styles/mediaQueries';
import FlagFR from './flag-fr.svg';
import FlagUK from './flag-uk.svg';
import Flag from './Flag';

const Container = styled.div`
	display: flex;
	${({ theme }) => `
    padding: ${theme.spacing['2xs']} ${theme.spacing.s};
  `};

	.ng-title-logo {
		cursor: pointer;
	}

	.ng-logo-small {
		display: none;
	}

	${lessThan('tablet')(`
		.ng-title-logo {
			display: none;
		}

		.ng-logo-small {
			display: block;
		}
	`)}
`;

const FlagsContainer = styled.div`
	display: flex;
	margin-left: auto;
`;

const Header = () => {
	const { locale, push, asPath } = useRouter();

	const changeLocale = (lang: 'fr' | 'en') => {
		push(asPath, undefined, { locale: lang });
	};

	const backHome = () => push('/', undefined, { locale: locale });

	return (
		<Container>
			<Image
				onClick={backHome}
				className='ng-title-logo'
				priority
				src={NgTitle}
				width={285}
				height={35}
				alt='ng-title-logo'
			/>

			<Image
				onClick={backHome}
				priority
				src={'https://nodeguardians.io/assets/logo-white-square.svg'}
				width={40}
				height={40}
				alt='ng-logo-small'
				className='ng-logo-small'
			/>

			<FlagsContainer>
				<Flag onClick={() => changeLocale('fr')} src={FlagFR} alt='ng-flag-fr' active={locale === 'fr'} />

				<Flag onClick={() => changeLocale('en')} src={FlagUK} alt='ng-flag-uk' active={locale === 'en'} />
			</FlagsContainer>
		</Container>
	);
};

export default Header;
