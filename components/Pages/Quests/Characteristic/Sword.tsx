import Image from 'next/image';

import LightSwordIcon from './assets/light-sword.svg';
import DarkSwordIcon from './assets/dark-sword.svg';

type TSword = {
	swordColor: 'ligth' | 'dark';
	size: 's' | 'm';
};

const Sword = ({ swordColor, size }: TSword) => {
	const sizes = size === 's' ? 10 : 12;
	return (
		<Image
			src={swordColor === 'ligth' ? LightSwordIcon : DarkSwordIcon}
			width={sizes}
			height={sizes}
			alt='sword-icon'
		/>
	);
};

export default Sword;
