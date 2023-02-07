import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

import { darkTheme } from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyles';
import Header from '@/components/Header';
import Wallpaper from '@/assets/images/wallpaper.jpg';

// RM THIS
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const config: QueryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5
		},
		mutations: {
			retry: 5,
			retryDelay: 500
		}
	}
};

const queryClient = new QueryClient(config);

const Content = styled.div`
	height: 100%;
	background-image: url(${Wallpaper.src});
	background-size: cover;
`;

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Content>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.svg' />
				<meta name='robots' content='noindex' />
			</Head>

			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={darkTheme}>
					<Header />
					<GlobalStyle />
					<Component {...pageProps} />
					<ReactQueryDevtools />
				</ThemeProvider>
			</QueryClientProvider>
		</Content>
	);
};

export default appWithTranslation(App);
