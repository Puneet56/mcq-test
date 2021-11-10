import React from 'react';
import tw from 'tailwind-styled-components';

const Track = tw.div`relative w-full max-w-3xl h-[30px] mt-2 rounded-full overflow-x-hidden px-[5px] bg-gray-400 flex items-center justify-start
`;

const Progress = tw.div`h-[20px] bg-gray-700 rounded-full transform transition-all duration-300 ease-out
`;

const ProgressBar = ({ total, progress }) => {
	const width = (progress / total) * 100;

	return (
		<Track>
			<Progress style={{ width: `${width}%` }}></Progress>
		</Track>
	);
};

export default ProgressBar;
