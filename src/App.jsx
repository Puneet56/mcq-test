import tw from 'tailwind-styled-components';

import Questions from './components/Questions';

const MainContainer = tw.div`absolute top-0 bottom-0 right-0 left-0 bg-gray-800 overflow-hidden overflow-y-auto z-[-9999] flex flex-col items-center justify-center
`;

const App = () => {
	return (
		<MainContainer>
			<Questions />
		</MainContainer>
	);
};

export default App;
