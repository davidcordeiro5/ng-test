import Heading from '@/components/Texts/Heading';
import styled from 'styled-components';
import Image from 'next/image';

import Exp from './exp.svg';
import Paragraph from '@/components/Texts/Paragraph';

const Container = styled.div``;

const RewardsBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 58px;
	height: 58px;
	${({ theme: { fonts, colors, spacing } }) => `
    border: ${colors.border?.gold};
    color: ${fonts.colors.white};
    margin-top: ${spacing['4xs']};

    > p {
      margin-top: ${spacing['4xs']};
    }
  `}

	background: linear-gradient(180deg, rgba(7, 15, 29, 0) 0%, rgba(54, 77, 137, 0.4) 100%);
`;

type TRewards = {
	headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	exp: number;
	className?: string;
};

const Rewards = ({ className, headingLevel = 'h3', exp }: TRewards) => {
	return (
		<div className={className}>
			<Heading level={headingLevel}>QUEST REWARD</Heading>
			<RewardsBox>
				<Image src={Exp} width={28} height={18} alt='exp-loge' />
				<Paragraph size='xs'>+{exp}</Paragraph>
			</RewardsBox>
		</div>
	);
};

export default styled(Rewards)``;
