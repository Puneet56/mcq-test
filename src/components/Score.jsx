import React from 'react';
import ProgressBar from './ProgressBar.jsx';
import tw from 'tailwind-styled-components';

const Container = tw.div`w-full max-w-3xl bg-gray-400 rounded-b-2xl p-2
`;

const Score = ({ score, maxScore }) => {
	return (
		<Container>
			<div className='flex items-center justify-between text-gray-900 font-medium text-2xl'>
				<p>Score:-{Math.floor(score)}%</p>
				<p>Max Score:-{maxScore > 100 ? 100 : maxScore}%</p>
			</div>
			<ProgressBar
				percentage
				className='border border-solid border-gray-900'
				total={maxScore}
				score={score}
				max={maxScore}
			></ProgressBar>
		</Container>
	);
};

export default Score;
