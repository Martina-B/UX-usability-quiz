import { useRef } from 'react';

import useQuiz, {
	QuizItemRef,
	QuizItemRefs,
	QuizItems
} from '../Hooks/useQuiz';

import QuizInterface from './QuizInterface';
import ErrorModal from './QuizPages/ErrorModal';
import PaymentForm from './QuizPages/PaymentForm';
import PaymentModal from './QuizPages/PaymentModal';

const QuizContainer = () => {
	const PaymentModalItemRefs: QuizItemRefs = {
		SendBtn: useRef<QuizItemRef>(null),
		PaymentModalText: useRef<QuizItemRef>(null),
		BathIcon: useRef<QuizItemRef>(null),
		CloseBtn: useRef<QuizItemRef>(null)
	};

	const errorModalItemRefs: QuizItemRefs = {
		DeleteBtn: useRef<QuizItemRef>(null),
		ErrorModalText: useRef<QuizItemRef>(null),
		SmileIcon: useRef<QuizItemRef>(null)
	};

	const paymentFormItemRefs: QuizItemRefs = {
		Header: useRef<QuizItemRef>(null),
		BulletPoint1: useRef<QuizItemRef>(null),
		BulletPoint2: useRef<QuizItemRef>(null),
		EmailLbl: useRef<QuizItemRef>(null),
		EmailTB: useRef<QuizItemRef>(null),
		SignInBtn: useRef<QuizItemRef>(null),
		CardLbl: useRef<QuizItemRef>(null),
		CardTB: useRef<QuizItemRef>(null),
		CardExpTB: useRef<QuizItemRef>(null),
		CardCvcTB: useRef<QuizItemRef>(null),
		CardNameLbl: useRef<QuizItemRef>(null),
		CardNameTB: useRef<QuizItemRef>(null),
		CardCountryLbl: useRef<QuizItemRef>(null),
		CardCountryTB: useRef<QuizItemRef>(null)
	};

	const quizPages: JSX.Element[] = [
		<PaymentForm key={1} quizItems={paymentFormItemRefs} />,
		<PaymentModal key={2} quizItems={PaymentModalItemRefs} />,
		<ErrorModal key={3} quizItems={errorModalItemRefs} />
	];

	const { evaluateQuiz } = useQuiz();

	let quizItems: QuizItems = {};

	const updateResults = (items: QuizItems) => {
		quizItems = { ...quizItems, ...items };
	};

	const submitResults = () => {
		evaluateQuiz(quizItems);
	};

	return (
		<QuizInterface
			evaluateQuiz={submitResults}
			updateResults={updateResults}
			quizPages={quizPages}
		/>
	);
};

export default QuizContainer;
