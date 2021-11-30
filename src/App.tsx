import './App.css';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import { ThemeProvider, CssBaseline } from '@mui/material';
=======
import { CssBaseline, ThemeProvider } from '@mui/material';
>>>>>>> c49833d6769e281be9ac8334244918ca32aa8f1e

import Routes from './Components/Routes';
import { UserProvider } from './Hooks/useLoggedInUser';
import Layout from './Components/Layout';
import theme from './utils/theme';

const App = () => (
	<UserProvider>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline />
				<Layout>
					<Routes />
				</Layout>
			</BrowserRouter>
		</ThemeProvider>
	</UserProvider>
);

export default App;
