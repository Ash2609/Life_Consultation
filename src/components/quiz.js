import React, { useState } from 'react';

export default function Quiz() {
	const questions = [
		{
			questionText: 'How often do you feel happy?',
			answerOptions: [
				{ answerText: 'Always', isCorrect: false },
				{ answerText: 'Often', isCorrect: false },
				{ answerText: 'Sometimes', isCorrect: true },
				{ answerText: 'Rarely', isCorrect: false },
			],
		},
		{
			questionText: 'Do you find it easy to overcome unhappy situations?',
			answerOptions: [
				{ answerText: 'Always', isCorrect: false },
				{ answerText: 'Often', isCorrect: false },
				{ answerText: 'Sometimes', isCorrect: true },
				{ answerText: 'Rarely', isCorrect: false },
			],
		},
		{
			questionText: 'Do you feel good about yourself?',
			answerOptions: [
				{ answerText: 'Always', isCorrect: false },
				{ answerText: 'Often', isCorrect: false },
				{ answerText: 'Sometimes', isCorrect: true },
				{ answerText: 'Rarely', isCorrect: false },
			],
		},
		{
			questionText: 'Would you say you’re self-confident?',
			answerOptions: [
				{ answerText: 'Always', isCorrect: false },
				{ answerText: 'Often', isCorrect: false },
				{ answerText: 'Sometimes', isCorrect: true },
				{ answerText: 'Rarely', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length} don't worry you are a happy person!!
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='button1' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
