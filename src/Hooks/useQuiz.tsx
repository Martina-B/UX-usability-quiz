import { Ref, RefObject, useState } from 'react';
import { addDoc, Timestamp } from 'firebase/firestore';

import { resultsCollection } from '../utils/firebase';

export type QuizItems = Record<string, Ref<QuizItemRef>>;

export type QuizItemRef = {
	isCorrect: boolean;
	chosen: boolean;
};

const useQuiz = (quizItemNames: QuizItems) => {
	const [quizItems] = useState<QuizItems>(quizItemNames);

	const evaluateQuiz = () => {
		let correctlySelected = 0;
		const mistakes: string[] = [];
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
			} else {
				mistakes.push(k);
			}
		});
		console.log(`Correctly selected UX elems: ${correctlySelected}`);
		addDoc(resultsCollection, {
			by: 'kokos',
			date: Timestamp.now(),
			mistakes,
			points: (correctlySelected / Object.entries(quizItems).length) * 100
		});
		return correctlySelected;
	};

	return { quizItems, evaluateQuiz };
};

export default useQuiz;
