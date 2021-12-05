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
			console.log(k, values);
			if (values === null) {
				//SKIP
			} else if (values?.chosen && !values?.isCorrect) {
				correctlySelected++;
			} else if (!!values && values?.chosen && values?.isCorrect) {
				incorrectMarked++;
				mistakes.push(k);
			} else if (!!values && !values?.chosen && !values?.isCorrect) {
				mistakes.push(k);
			}
		});
		try {
			console.log(correctlySelected);
			addDoc(resultsCollection, {
				by: user ? user?.email : 'anonymous',
				date: Timestamp.now(),
				mistakes,
				incorrectChoosen: incorrectMarked,
				points: (correctlySelected / 7) * 100
			}).then(res => push(`/evaluation/${res.id}`));
		} catch (err) {
			console.log(err);
		}
	};

	return { quizItems, evaluateQuiz };
};

export default useQuiz;
