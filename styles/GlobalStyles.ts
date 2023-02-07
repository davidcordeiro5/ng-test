import { createGlobalStyle, DefaultTheme } from 'styled-components';
// import Cinzel from './fonts/Cinzel.ttf';
// import Lato from 'assets/fonts/LatoLight.ttf';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
	//========================================================================================================
	// GENERAL
	//========================================================================================================
	* {
		box-sizing: border-box;
	}
	*::before {
		box-sizing: border-box;
	}
	*::after {
		box-sizing: border-box;
	}

	html,
	body,
	#__next {
  	height: 100%;
	}

	h1, h2, h3 {
		margin: 0;
		font-family: 'Cinzel', serif;
		color: ${({ theme }) => theme.colors.white};
	}

	p {
		margin: 0;
	}

	body {
		font-family: 'Lato', sans-serif;
		color: ${({ theme }) => theme.colors.white};
		background-color: ${({ theme }) => theme.colors.black};
		margin: 0;
	}


`;

export default GlobalStyle;
