import React from 'react';
import tw from 'tailwind-styled-components';

const Track = tw.div`relative w-full max-w-3xl h-[30px] mt-2 z-10 rounded-full overflow-x-hidden px-[5px] bg-gray-400 flex items-center justify-start border-2 border-solid border-gray-800
`;

const Progress = tw.div`absolute h-[20px] bg-gray-700 rounded-full transform transition-all duration-300 ease-out z-[30]
`;

const MaxProgress = tw.div`absolute h-[20px] bg-gray-500 rounded-full transform transition-all duration-300 ease-out z-[20] px-[5px]
`;

const ProgressBar = ({ total, progress, max, score, percentage }) => {
	const width = (progress / total) * 100;
	return (
		<>
			{!percentage ? (
				<Track>
					<Progress style={{ width: `${width}%` }}></Progress>
				</Track>
			) : (
				<Track className='text-gray-400'>
					<Progress style={{ width: `${score}%` }}></Progress>
					{max && (
						<MaxProgress
							style={{ width: `${max > 100 ? 100 - 1 : max - 1}%` }}
						></MaxProgress>
					)}
				</Track>
			)}
		</>
	);
};

export default ProgressBar;
