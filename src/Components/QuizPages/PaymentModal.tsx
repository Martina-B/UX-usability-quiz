import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

import { QuizItemRefs } from '../../Hooks/useQuiz';
import QuizItem from '../QuizItem';

type Props = {
	quizItems: QuizItemRefs;
};

const PaymentModal: FC<Props> = ({ quizItems }: Props) => (
	<Paper
		component="div"
		sx={{
			display: 'flex',
			flexDirection: 'row',
			alignSelf: 'center',
			width: '100%',
			height: '100%',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'nowrap'
		}}
	>
		<Box
			sx={{
				width: '400px',
				height: '400px',
				borderStyle: 'solid',
				flexDirection: 'column',
				background: '#f0f0f0'
			}}
		>
			<QuizItem ref={quizItems.CloseBtn} isCorrect={false}>
				<CancelPresentationIcon sx={{ width: '46px', height: '40px' }} />
			</QuizItem>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					paddingTop: '35px'
				}}
			>
				<Box
					sx={{
						width: '150px',
						marginBottom: '10px'
					}}
				>
					<QuizItem ref={quizItems.BathIcon} isCorrect={false}>
						<BathtubIcon sx={{ width: '150px', height: '150px' }} />
					</QuizItem>
				</Box>

				<QuizItem
					ref={quizItems.PaymentModalText}
					isCorrect
					style={{ marginTop: '-20px' }}
				>
					<span>
						<b>Payment was succesfull!</b>
					</span>
				</QuizItem>

				<QuizItem
					ref={quizItems.SendBtn}
					isCorrect
					style={{ width: '50%', marginTop: '30px' }}
				>
					<Button type="button" variant="contained" fullWidth>
						OK
					</Button>
				</QuizItem>
			</Box>
		</Box>
	</Paper>
);

export default PaymentModal;
