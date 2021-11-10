import React, { useState, useEffect } from 'react';
import questions from '../assets/questions';
import tw from 'tailwind-styled-components';
import QuestionItem from './QuestionItem';
import ProgressBar from './ProgressBar';
import Score from './Score';

const Container = tw.div`relative w-full h-full max-w-3xl flex flex-col items-center justify-center py-3 z-[-10]
`;

const QuestionCount = tw.div`w-full min-h-[60px] bg-gray-400 rounded-t-3xl pl-10 pt-2 text-2xl font-bold
`;
const shuffeledQuestions = questions
	.sort(() => Math.random() - 0.5)
	.slice(0, 2);

const Questions = () => {
	const [count, setCount] = useState(0);
	const [lastQuestion, setLastQuestion] = useState(false);
	const [correctCount, setCorrectCount] = useState(0);
	const [incorrectCount, setIncorrectCount] = useState(0);
	const [points, setPoints] = useState({ score: 0, maxScore: 100 });

	const currentQuestion = shuffeledQuestions[count];

	const handleNext = () => {
		if (count < shuffeledQuestions.length - 1) {
			console.log('Happened');
			setCount(count + 1);
		}
		if (count === shuffeledQuestions.length - 1) {
			console.log(happened);
			setLastQuestion(true);
		}
	};

	const handleCorrect = (result) => {
		if (count === shuffeledQuestions.length - 1) {
			console.log('happened');
			setLastQuestion(true);
		}
		if (result) {
			setCorrectCount(correctCount + 1);
		} else {
			setIncorrectCount(incorrectCount + 1);
		}
	};

	useEffect(() => {
		const score = Math.floor((correctCount / shuffeledQuestions.length) * 100);
		const maxScore = Math.floor(
			100 - (incorrectCount / shuffeledQuestions.length) * 100
		);
		setPoints({ score, maxScore });
	}, [count, lastQuestion]);

	// useEffect(() => {
	// 	if (count >= shuffeledQuestions.length - 1) {
	// 		const score = Math.floor(
	// 			(correctCount / shuffeledQuestions.length) * 100
	// 		);
	// 		const maxScore = Math.floor(
	// 			100 - (incorrectCount / shuffeledQuestions.length) * 100
	// 		);
	// 		setPoints({ score, maxScore });
	// 	}
	// }, [count >= shuffeledQuestions.length - 1]);

	return (
		<>
			<ProgressBar total={shuffeledQuestions.length} progress={count + 1} />
			<Container>
				<QuestionCount>
					Question {count + 1} of {shuffeledQuestions.length} :-
				</QuestionCount>
				{
					<QuestionItem
						item={currentQuestion}
						next={handleNext}
						correct={handleCorrect}
						last={count >= shuffeledQuestions.length - 1}
					/>
				}
				<Score
					score={points.score}
					maxScore={points.maxScore}
					total={shuffeledQuestions.length}
					progress={count + 1}
				/>
			</Container>
		</>
	);
};

export default Questions;
