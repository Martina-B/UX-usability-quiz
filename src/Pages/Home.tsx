import { Box, Button, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import { Link } from 'react-router-dom';

const Home = () => (
	<Box
		sx={{
			display: 'block',
			alignItems: 'center',
			position: 'relative',
			justifyContent: 'center',
			textAlign: 'center'
		}}
	>
		<Button
			component={Link}
			to="/demo"
			fullWidth
			sx={{
				'color': 'text.primary',
				'fontWeight': 'black',
				':hover': { color: 'contrast' }
			}}
		>
			<Typography variant="h1">START QUIZ</Typography>
		</Button>
		<Typography variant="h5">
			This quiz is about learning to recognize usability principles violation in
			design.
		</Typography>
	</Box>
);

export default Home;
