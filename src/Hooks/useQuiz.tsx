import { Ref, RefObject, useState } from 'react';

export type QuizItems = Record<string, Ref<QuizItemRef>>;

export type QuizItemRef = {
	isCorrect: boolean;
	chosen: boolean;
};

const useQuiz = (quizItemNames: QuizItems) => {
	const [quizItems] = useState<QuizItems>(quizItemNames);

	const evaluateQuiz = () => {
		let correctlySelected = 0;
		Object.entries(quizItems).forEach(([k, v]) => {
			const val = v as RefObject<QuizItemRef>;
			const values = val.current;

			console.log(
				`${k} is selected: ${values?.chosen} and is correct UX element: ${values?.isCorrect}`
			);

			if (
				(values?.chosen && !values?.isCorrect) ||
				(!values?.chosen && values?.isCorrect)
			) {
				correctlySelected++;
			}
		});
		console.log(`Correctly selected UX elems: ${correctlySelected}`);
		return correctlySelected;
	};

	return { quizItems, evaluateQuiz };
};

export default useQuiz;
