import { Label } from '@mui/icons-material';
import { Button, Paper, TextField, Typography, FormLabel } from '@mui/material';
import { Box, maxWidth } from '@mui/system';
import { useRef } from 'react';

import useQuiz, { QuizItemRef, QuizItems } from '../../Hooks/useQuiz';
import QuizItem from '../QuizItem';

const PaymentForm = () => {
	// Create named quizItems
	const quizItemRefs: QuizItems = {
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

	const { quizItems, evaluateQuiz } = useQuiz(quizItemRefs);

	return (
		<Paper
			component="form"
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignSelf: 'center',
				width: '100%',
				height: '100%',
				justifyContent: 'flexStart',
				flexWrap: 'nowrap'
			}}
		>
			<Box
				sx={{
					maxWidth: '50%',
					width: '50%',
					height: '100%',
					background: 'linear-gradient(90deg, #FFDB1D, #A87B00)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						maxWidth: '450px'
					}}
				>
					<div style={{ fontSize: '50pt', color: 'white', width: '450' }}>
						<b>Banking app of the future</b>
					</div>
					<ul className="a">
						<li style={{ color: 'white', fontSize: '19pt' }}>
							Keep your finances safe
						</li>
						<li style={{ float: 'left', color: '#FFDB1D', fontSize: '19pt' }}>
							Customizable
						</li>
					</ul>
				</div>
			</Box>

			<Box
				sx={{
					maxWidth: '50%',
					width: '50%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Box
					sx={{
						maxWidth: '50%',
						width: '50%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start'
					}}
				>
					<QuizItem ref={quizItems.EmailLbl} isCorrect>
						<FormLabel>Email</FormLabel>
					</QuizItem>
					<QuizItem ref={quizItems.EmailTB} isCorrect style={{ width: '100%' }}>
						<TextField label="Email" type="email" fullWidth />
					</QuizItem>

					<QuizItem
						ref={quizItems.CardLbl}
						isCorrect
						style={{ marginTop: '20px' }}
					>
						<FormLabel>Card information</FormLabel>
					</QuizItem>
					<QuizItem
						ref={quizItems.CardTB}
						isCorrect={false}
						style={{ width: '100%', marginBottom: '8px' }}
					>
						<TextField type="text" fullWidth />
					</QuizItem>

					<Box
						sx={{
							display: 'flex'
						}}
					>
						<QuizItem
							ref={quizItems.CardExpTB}
							isCorrect
							style={{ width: '100%', marginRight: '4px' }}
						>
							<TextField label="MM/YY" type="text" fullWidth />
						</QuizItem>
						<QuizItem
							ref={quizItems.CardCvcTB}
							isCorrect
							style={{ width: '100%', marginLeft: '4px', marginBottom: '20px' }}
						>
							<TextField label="CVC" type="text" fullWidth />
						</QuizItem>
					</Box>

					<QuizItem ref={quizItems.CardNameLbl} isCorrect>
						<FormLabel>Name on card</FormLabel>
					</QuizItem>
					<QuizItem
						ref={quizItems.CardNameTB}
						isCorrect
						style={{ width: '100%', marginBottom: '20px' }}
					>
						<TextField label="Name" type="email" fullWidth />
					</QuizItem>

					<QuizItem ref={quizItems.CardCountryLbl} isCorrect>
						<FormLabel>Country or region</FormLabel>
					</QuizItem>
					<QuizItem ref={quizItems.CardCountryTB} isCorrect style={{ width: '100%' }}>
						<TextField label="Country name" type="email" fullWidth />
					</QuizItem>

					<Box
						sx={{
							display: 'flex',
							gap: 2,
							alignItems: 'center',
							alignSelf: 'flex-end',
							mt: 2
						}}
					>
						<QuizItem ref={quizItems.SignInBtn} isCorrect>
							<Button type="button" variant="contained">
								SignIn
							</Button>
						</QuizItem>
					</Box>

					<Button type="button" onClick={evaluateQuiz}>
						Evaluate Quiz (check console)
					</Button>
				</Box>
			</Box>
		</Paper>
	);
};

export default PaymentForm;
