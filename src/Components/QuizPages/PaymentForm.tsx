import { Button, Paper, TextField, FormLabel } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

import { QuizItemRefs } from '../../Hooks/useQuiz';
import QuizItem from '../QuizItem';

type Props = {
	quizItems: QuizItemRefs;
};

const PaymentForm: FC<Props> = ({ quizItems }: Props) => (
	<Paper
		component="div"
		sx={{
			display: 'flex',
			flexDirection: { xs: 'column', md: 'row' },
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
					<QuizItem ref={quizItems.Header} isCorrect>
						<b>Banking app of the future</b>
					</QuizItem>
				</div>

				<ul className="a">
					<li style={{ color: 'white', fontSize: '19pt' }}>
						<QuizItem ref={quizItems.BulletPoint1} isCorrect>
							Keep your finances safe
						</QuizItem>
					</li>

					<li style={{ float: 'left', color: '#FFDB1D', fontSize: '19pt' }}>
						<QuizItem ref={quizItems.BulletPoint2} isCorrect={false}>
							Customizable
						</QuizItem>
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
				<QuizItem
					ref={quizItems.CardCountryTB}
					isCorrect={false}
					style={{ width: '100%' }}
				>
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
				/>

				<QuizItem ref={quizItems.SignInBtn} isCorrect style={{ width: '100%' }}>
					<Button type="button" variant="contained" fullWidth>
						Pay $55.00
					</Button>
				</QuizItem>
			</Box>
		</Box>
	</Paper>
);

export default PaymentForm;
