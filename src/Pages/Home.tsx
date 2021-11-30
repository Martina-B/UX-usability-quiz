import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => (
	<Box sx={{ display: 'block', alignItems: 'left' }}>
		<Button
			component={Link}
			to="/demo"
			sx={{
				'color': 'text.primary',
				'fontSize': 90,
				'fontWeight': 'black',
				':hover': { color: 'contrast' }
			}}
		>
			START QUIZ
		</Button>
		<Typography variant="h5">
			*This quiz is about learning to recognize usability principles violation
			in design.
		</Typography>
	</Box>
);

export default Home;
