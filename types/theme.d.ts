import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		radius: {
			s: string;
			m: string;
			l: string;
			xl: string;
		};
		spacing: {
			unset: string;
			'6xs': string;
			'5xs': string;
			'4xs': string;
			'3xs': string;
			'2xs': string;
			xs: string;
			s: string;
			m: string;
			l: string;
			xl: string;
			'2xl': string;
			'3xl': string;
			'4xl': string;
			'5xl': string;
			'6xl': string;
			'7xl': string;
			'8xl': string;
		};
		fonts: {
			size: {
				xs: string;
				s: string;
				m: string;
				l: string;
				display5: string;
				display4: string;
				display3: string;
			};
			weight: {
				bold: number;
				regular: number;
			};
			colors: {
				white: string;
				gold: string;
				blue: string;
				grey: string;
			};
		};
		colors: {
			gold: string;
			white: string;
			grey: string;
			darkGrey: string;
			lighterBlack: string;
			black: string;
			blue: string;
			green: string;
			border?: {
				lightGrey500: string;
				gold: string;
			};
		};
	}
}
