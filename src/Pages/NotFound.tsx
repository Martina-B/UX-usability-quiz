import { Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

const NotFound = () => (
	<>
		<WarningIcon
			sx={{ typography: 'h1', margin: '0 auto', color: 'contrast' }}
		/>
		<Typography sx={{ textAlign: 'center' }} variant="h2">
			The page does not exist!
		</Typography>
	</>
);

export default NotFound;
