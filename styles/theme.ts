// theme.ts
import { DefaultTheme } from 'styled-components';

export const defaultTheme = {
	radius: {
		s: '3px',
		m: '5px',
		l: '7px',
		xl: '10px'
	},
	spacing: {
		unset: 'unset',
		'6xs': '2px',
		'5xs': '4px',
		'4xs': '8px',
		'3xs': '12px',
		'2xs': '16px',
		xs: '20px',
		s: '24px',
		m: '32px',
		l: '40px',
		xl: '48px',
		'2xl': '64px',
		'3xl': '80px',
		'4xl': '100px',
		'5xl': '120px',
		'6xl': '140px',
		'7xl': '160px',
		'8xl': '180px'
	},
	fonts: {
		size: {
			xs: '8px',
			s: '12px',
			m: '14px',
			l: '20px',
			display5: '32px',
			display4: '40px',
			display3: '48px'
		},
		weight: {
			bold: 700,
			regular: 400
		},
		colors: {
			white: '#FFFFF4',
			gold: '#BEA77E',
			blue: '#98A7F5',
			grey: '#8E8E8E'
		}
	}
};

export const darkTheme: DefaultTheme = {
	...defaultTheme,
	colors: {
		// set theme colors
		gold: '#BEA77E',
		white: '#FFFFF4',
		grey: '#8E8E8E',
		darkGrey: '#333030',
		lighterBlack: '#1D1C1A',
		black: '#151515',
		blue: '#98A7F5',
		green: '#93D788',
		border: {
			lightGrey500: 'solid 1px hsla(0, 0%, 35%, 0.5)',
			gold: '0.6px solid #BEA77E'
		}
	}
};

export type ThemeType = typeof defaultTheme;

//FONTS
export type FontColorsType = keyof ThemeType['fonts']['colors'];
export type FontSizeType = keyof ThemeType['fonts']['size'];

//LAYOUT
export type RaduisType = keyof ThemeType['radius'];
