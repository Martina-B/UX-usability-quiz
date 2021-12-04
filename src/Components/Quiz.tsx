import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';

import PaymentForm from './QuizPages/PaymentForm';

const QuizContainer = () => (
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
					<b>Is the design of this page OK ?</b>
				</span>
				<span>If not please click on elements which seems off to you</span>
			</Box>
		</Box>

		<Box sx={{ height: '80%' }}>
			<PaymentForm />
		</Box>

		<Box
			sx={{
				height: '100px',
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
					<b>(1/3)</b>
				</span>
				<Button type="button" variant="contained" color="primary">
					Continue
				</Button>
			</Box>
		</Box>
	</Paper>
);

export default QuizContainer;
