import { Button, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRef } from 'react';

import useQuiz, { QuizItemRef, QuizItems } from '../Hooks/useQuiz';

import QuizItem from './QuizItem';

const FormDemo = () => {
	// Create named quizItems
	const quizItemRefs: QuizItems = {
		PasswordTB: useRef<QuizItemRef>(null),
		SignInBtn: useRef<QuizItemRef>(null),
		SignInTxt: useRef<QuizItemRef>(null)
	};

	const { quizItems, evaluateQuiz } = useQuiz(quizItemRefs);

	return (
		<Paper
			component="form"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignSelf: 'center',
				width: '1000px',
				p: 4,
				gap: 2
			}}
		>
			<QuizItem ref={quizItems.SignInTxt} isCorrect={false}>
				<Typography variant="h4" component="h2" textAlign="center" mb={3}>
					Sign in
				</Typography>
			</QuizItem>

			<QuizItem
				ref={quizItems.PasswordTB}
				isCorrect
				style={{ display: 'flex', flexDirection: 'column' }}
			>
				<TextField label="Password" type="password" />
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
				<QuizItem ref={quizItems.SignInBtn} isCorrect={false}>
					<Button type="button" variant="contained">
						SignIn
					</Button>
				</QuizItem>
			</Box>

			<Button type="button" onClick={evaluateQuiz}>
				Evaluate Quiz (check console)
			</Button>
		</Paper>
	);
};

export default FormDemo;
