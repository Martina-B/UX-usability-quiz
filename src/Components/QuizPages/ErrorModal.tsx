import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import QuizItem from '../QuizItem';
import { QuizItemRefs } from '../../Hooks/useQuiz';

type Props = {
	quizItems: QuizItemRefs;
};

const ErrorModal: FC<Props> = ({ quizItems }: Props) => (
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
				display: 'flex',
				flexDirection: 'column',
				background: '#f0f0f0',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column'
				}}
			>
				<Box
					sx={{
						width: '150px',
						marginBottom: '10px'
					}}
				>
					<QuizItem ref={quizItems.SmileIcon} isCorrect>
						<SentimentVeryDissatisfiedIcon
							sx={{ width: '150px', height: '150px' }}
						/>
					</QuizItem>
				</Box>

				<QuizItem
					ref={quizItems.ErrorModalText}
					isCorrect={false}
					style={{ marginTop: '-20px' }}
				>
					<span>
						<b>Error: java.io.IOException</b>
					</span>
				</QuizItem>

				<QuizItem
					ref={quizItems.DeleteBtn}
					isCorrect={false}
					style={{ width: '100%', marginTop: '30px' }}
				>
					<Button type="button" variant="contained" fullWidth>
						Delete my banking account
					</Button>
				</QuizItem>
			</Box>
		</Box>
	</Paper>
);

export default ErrorModal;
