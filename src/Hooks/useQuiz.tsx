import { Ref } from 'react';
import { addDoc, Timestamp } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';

import { resultsCollection } from '../utils/firebase';
import useLoggedInUser from '../Hooks/useLoggedInUser';

export type QuizItemRefs = Record<string, Ref<QuizItemRef>>;
export type QuizItems = Record<string, QuizItemRef>;

export type QuizItemRef = {
	isCorrect: boolean;
	chosen: boolean;
};

const useQuiz = () => {
	const user = useLoggedInUser();
	const { push } = useHistory();

	const evaluateQuiz = (quizItems: QuizItems) => {
		let correctlySelected = 0;
		let incorrectMarked = 0;
		const mistakes: string[] = [];
		Object.entries(quizItems).forEach(([k, v]) => {
			const values = v as QuizItemRef;

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
				by: user ? (user?.email ? user?.email : 'anonymous') : 'anonymous',
				date: Timestamp.now(),
				mistakes,
				incorrectChoosen: incorrectMarked,
				points: (correctlySelected / 7) * 100
			}).then(res => push(`/evaluation/${res.id}`));
		} catch (err) {
			console.log(err);
		}
	};

	return { evaluateQuiz };
};

export default useQuiz;
