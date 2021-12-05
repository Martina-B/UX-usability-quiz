import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Button, Box } from '@mui/material';

import useLoggedInUser from '../Hooks/useLoggedInUser';
import { signOut } from '../utils/firebase';

const Layout: FC = ({ children }) => {
	const user = useLoggedInUser();

	const useNielsenPage = () => {
		window.open(
			'https://www.nngroup.com/articles/ten-usability-heuristics/',
			'_blank'
		);
	};
	return (
		<>
			<AppBar position="fixed">
				<Container maxWidth="md">
					<Toolbar disableGutters sx={{ gap: 2 }}>
						<Box sx={{ flexGrow: 1 }} />
						<Button sx={{ color: 'white' }} component={Link} to="/">
							Home
						</Button>
						<Button sx={{ color: 'contrast' }} onClick={useNielsenPage}>
							Read about Usability heuristics
						</Button>
						{user && (
							<Button sx={{ color: 'white' }} component={Link} to="/results">
								Results
							</Button>
						)}
						{!user ? (
							<Button sx={{ color: 'white' }} component={Link} to="/login">
								Log In
							</Button>
						) : (
							<Button sx={{ color: 'white' }} onClick={signOut}>
								Log Out
							</Button>
						)}
					</Toolbar>
				</Container>
			</AppBar>

			<Container
				maxWidth={false}
				component="main"
				disableGutters
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					height: '100vh',
					pt: 8,
					gap: 2
				}}
			>
				{children}
			</Container>
		</>
	);
};
export default Layout;
