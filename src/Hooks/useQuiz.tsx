import { Ref, RefObject, useState } from 'react';
import { addDoc, Timestamp } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';

import { resultsCollection } from '../utils/firebase';
import useLoggedInUser from '../Hooks/useLoggedInUser';

export type QuizItems = Record<string, Ref<QuizItemRef>>;

export type QuizItemRef = {
	isCorrect: boolean;
	chosen: boolean;
};

const useQuiz = (quizItemNames: QuizItems) => {
	const user = useLoggedInUser();
	const { push } = useHistory();
	const [quizItems] = useState<QuizItems>(quizItemNames);

	const evaluateQuiz = () => {
		let correctlySelected = 0;
		let incorrectMarked = 0;
		const mistakes: string[] = [];
		Object.entries(quizItems).forEach(([k, v]) => {
			const val = v as RefObject<QuizItemRef>;
			const values = val.current;

			console.log(
				`${k} is selected: ${values?.chosen} and is correct UX element: ${values?.isCorrect}`
			);

			if (
				(values?.chosen && values?.isCorrect) ||
				(!values?.chosen && !values?.isCorrect)
			) {
				correctlySelected++;
			} else if (values?.chosen && !values?.isCorrect) {
				incorrectMarked++;
				mistakes.push(k);
			} else {
				mistakes.push(k);
			}
		});
		console.log(`Correctly selected UX elems: ${correctlySelected}`);
		try {
			addDoc(resultsCollection, {
				by: user?.email,
				date: Timestamp.now(),
				mistakes,
				incorrectChoosen: incorrectMarked,
				points: (correctlySelected / Object.entries(quizItems).length) * 100
			}).then(res => push(`/evaluation/${res.id}`));
		} catch (err) {
			console.log(err);
		}
		return correctlySelected;
	};

	return { quizItems, evaluateQuiz };
};

export default useQuiz;
