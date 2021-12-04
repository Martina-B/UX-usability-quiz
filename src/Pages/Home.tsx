import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => (
	<Box
		sx={{
			display: 'block',
			alignItems: 'left',
			position: 'relative',
			justifyContent: 'center',
			width: '200'
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
