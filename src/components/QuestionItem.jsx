import React, { useState, useMemo } from 'react';
import tw from 'tailwind-styled-components';
import { AiFillStar } from 'react-icons/ai';

const Container = tw.h1`w-full flex-grow bg-gray-400 flex flex-col items-center justify-start
`;
const QuestionText = tw.p`text-2xl px-10 w-full
`;
const Category = tw.p`pt-4 text-lg text-gray-800 px-10 w-full
`;
const OptionsContainer = tw.div`flex flex-row items-center justify-center max-w-xl w-full flex-wrap
`;
const Option = tw.button` w-[30%] border-2 border-gray-900 bg-gray-700 text-white rounded-xl px-4 py-2 md:m-5 m-3 my-5
`;
const Next = tw.button`w-[40%] absolute bottom-10 border-2 border-gray-900 bg-gray-700 text-white text-xl rounded-xl px-4 py-2 m-10
`;
const StarDiv = tw.div`flex flex-row items-center justify-start h-10 w-full pl-10
`;

const QuestionItem = ({ item, next, correct, last }) => {
	const [selected, setSelected] = useState(false);
	const [answered, setAnswered] = useState(false);
	const [alert, setAlert] = useState('');

	const difficulty =
		item.difficulty === 'hard' ? 3 : item.difficulty === 'medium' ? 2 : 1;

	const options = useMemo(
		() =>
			[item.correct_answer, ...item.incorrect_answers].sort(
				() => Math.random() - 0.5
			),
		[item]
	);

	const selectHandler = (value) => {
		if (answered) return;
		setSelected(value);
		if (value === item.correct_answer) {
			setAlert('Correct!');
			correct(true);
		} else {
			setAlert('Incorrect!');
			correct(false);
		}
		setAnswered(true);
	};

	const handleNext = () => {
		setSelected(false);
		setAnswered(false);
		next();
	};

	return (
		<Container>
			<QuestionText>{decodeURIComponent(item.question)}</QuestionText>
			<Category>{decodeURIComponent(item.category)}</Category>
			<StarDiv>
				<AiFillStar />
				<AiFillStar className={difficulty >= 2 ? '' : 'text-gray-500'} />
				<AiFillStar className={difficulty >= 3 ? '' : 'text-gray-500'} />
			</StarDiv>
			<OptionsContainer>
				{options.map((option, index) => (
					<Option
						className={
							answered &&
							(option === item.correct_answer
								? 'bg-green-500'
								: option === selected
								? 'bg-red-500'
								: 'bg-gray-300')
						}
						onClick={() => selectHandler(option)}
						key={index}
					>
						{decodeURIComponent(option)}
					</Option>
				))}
			</OptionsContainer>
			{last && (
				<QuestionText className='text-center'>Last Question</QuestionText>
			)}
			{answered && <QuestionText className='text-center'>{alert}</QuestionText>}
			{!last && answered && <Next onClick={handleNext}>Next</Next>}
		</Container>
	);
};

export default QuestionItem;
