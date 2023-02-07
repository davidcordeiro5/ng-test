export const breakpoints = {
	mobile: 480,
	tablet: 769,
	desktop: 1024
};

export type BreakPointsType = keyof typeof breakpoints;

export const greaterThan = (key: BreakPointsType) => {
	return (style: TemplateStringsArray | string) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};

export const lessThan = (key: BreakPointsType) => {
	return (style: TemplateStringsArray | string) => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};

export const between = (min: BreakPointsType, max: BreakPointsType) => {
	return (style: TemplateStringsArray | string) =>
		`@media (min-width: ${breakpoints[min]}px)
      and (max-width: ${breakpoints[max]}px) { ${style} }`;
};
