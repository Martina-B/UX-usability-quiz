import { useRef } from 'react';

import useQuiz, { QuizItemRef, QuizItems } from '../Hooks/useQuiz';

import QuizInterface from './QuizInterface';
import ErrorModal from './QuizPages/ErrorModal';
import PaymentForm from './QuizPages/PaymentForm';
import PaymentModal from './QuizPages/PaymentModal';

const QuizContainer = () => {
	const PaymentModalItemRefs: QuizItems = {
		SendBtn: useRef<QuizItemRef>(null),
		PaymentModalText: useRef<QuizItemRef>(null),
		BathIcon: useRef<QuizItemRef>(null),
		CloseBtn: useRef<QuizItemRef>(null)
	};

	const errorModalItemRefs: QuizItems = {
		DeleteBtn: useRef<QuizItemRef>(null),
		ErrorModalText: useRef<QuizItemRef>(null),
		SmileIcon: useRef<QuizItemRef>(null)
	};

	const paymentFormItemRefs: QuizItems = {
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

	const quizItemRefs = {
		...PaymentModalItemRefs,
		...errorModalItemRefs,
		...paymentFormItemRefs
	};

	const quizPages: JSX.Element[] = [
		<PaymentForm key={1} quizItems={quizItemRefs} />,
		<PaymentModal key={2} quizItems={quizItemRefs} />,
		<ErrorModal key={3} quizItems={quizItemRefs} />
	];

	const { evaluateQuiz } = useQuiz(quizItemRefs);

	return <QuizInterface evaluateQuiz={evaluateQuiz} quizPages={quizPages} />;
};

export default QuizContainer;
