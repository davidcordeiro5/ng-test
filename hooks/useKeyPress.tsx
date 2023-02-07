import { useCallback, useEffect } from 'react';

export enum KeyPress {
	ESCAPE = 'Escape'
}

export const useKeyControllers = (key: KeyPress, onPress: () => void) => {
	const handleUserKeyPress = useCallback(
		(event: KeyboardEvent) => {
			const { code } = event;

			if (code === key) onPress();
		},
		[key, onPress]
	);

	useEffect(() => {
		window.addEventListener('keydown', handleUserKeyPress);

		return () => {
			window.removeEventListener('keydown', handleUserKeyPress);
		};
	}, [handleUserKeyPress]);
};
