import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { FC, RefObject, useState } from 'react';

import { QuizItemRef, QuizItems } from '../Hooks/useQuiz';

type Props = {
	evaluateQuiz: () => void;
	updateResults: (items: QuizItems) => void;
	quizPages: JSX.Element[];
};

const QuizInterface: FC<Props> = ({
	evaluateQuiz,
	quizPages,
	updateResults
}: Props) => {
	const onNextPage = () => {
		const quizPageItemsRefs = quizPages[currentPage - 1].props.quizItems;
		const quizPageItems: QuizItems = {};

		Object.entries(quizPageItemsRefs).forEach(([k, v]) => {
			const val = v as RefObject<QuizItemRef>;
			const values: QuizItemRef = val.current
				? val.current
				: {
						isCorrect: true,
						chosen: false
				  };

			quizPageItems[k] = values;
		});

		updateResults(quizPageItems);

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
					<span>
						If not please select elements which seems badly used to you.
					</span>
				</Box>
			</Box>

			<Box
				sx={{
					height: { xs: 'auto', md: '80%' },
					marginTop: { xs: 'auto', md: '0px' },
					marginBottom: { xs: 'auto', md: '0px' }
				}}
			>
				{quizPages[currentPage - 1]}
			</Box>

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
