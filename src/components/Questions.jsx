import React, { useState } from 'react';
import questions from '../assets/questions';
import tw from 'tailwind-styled-components';
import QuestionItem from './QuestionItem';
import ProgressBar from './ProgressBar';

const Container = tw.div`relative w-full h-full max-w-3xl flex flex-col items-center justify-center py-3 z-[-10]
`;

const QuestionCount = tw.div`w-full min-h-[60px] bg-gray-400 rounded-t-3xl pl-10 pt-2 text-2xl font-bold
`;

const Questions = () => {
	const [count, setCount] = useState(0);
	const [correctCount, setCorrectCount] = useState(0);
	const currentQuestion = questions[count];

	const handleNext = () => {
		if (count < questions.length - 1) {
			console.log('Happened');
			setCount(count + 1);
		}
	};

	return (
		<>
			<ProgressBar total={questions.length} progress={count + 1} />
			<Container>
				<QuestionCount>
					Question {count + 1} of {questions.length} :-
				</QuestionCount>
				{<QuestionItem item={currentQuestion} next={handleNext} />}
			</Container>
		</>
	);
};

export default Questions;
