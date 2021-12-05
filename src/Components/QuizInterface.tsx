import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';

type Props = {
	evaluateQuiz: () => void;
	quizPages: JSX.Element[];
};

const QuizInterface: FC<Props> = ({ evaluateQuiz, quizPages }: Props) => {
	const onNextPage = () => {
		if (currentPage === totalPages) {
			evaluateQuiz();
			return;
		}

		setCurrentPage(currentPage + 1);
	};

	const totalPages = quizPages.length;
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<Paper
			component="form"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				height: '100%',
				flexWrap: 'nowrap'
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: '100px',
					background: '#f0f0f0',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flexEnd'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						marginTop: '25px',
						marginLeft: '25px'
					}}
				>
					<span style={{ fontSize: '15pt' }}>
						<b>Is the design of this page OK?</b>
					</span>
					<span>If not please click on elements which seems off to you.</span>
				</Box>
			</Box>

			<Box sx={{ height: '80%' }}>{quizPages[currentPage - 1]}</Box>

			<Box
				sx={{
					height: '80px',
					background: '#f0f0f0',
					display: 'flex',
					justifyContent: 'flex-end'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						flexWrap: 'nowrap',
						marginRight: '40px'
					}}
				>
					<span style={{ fontSize: '15pt', marginRight: '20px' }}>
						<b>
							{currentPage}/{totalPages}
						</b>
					</span>
					<Button
						type="button"
						variant="contained"
						color="primary"
						onClick={onNextPage}
					>
						Continue
					</Button>
				</Box>
			</Box>
		</Paper>
	);
};

export default QuizInterface;
