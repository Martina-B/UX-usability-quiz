import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => (
	<>
		<Typography variant="h2">Main page</Typography>
		<Typography>BLABLABLA</Typography>
		<Button component={Link} to="/demo">
			DEMO
		</Button>
	</>
);

export default Home;
