import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import Routes from './Components/Routes';
import { UserProvider } from './Hooks/useLoggedInUser';
import Layout from './Components/Layout';
import theme from './utils/theme';

const App = () => (
	<UserProvider>
		<ThemeProvider theme={theme}>
			<div className="App">
				<BrowserRouter>
					<CssBaseline />
					<Layout>
						<Routes />
					</Layout>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	</UserProvider>
);

export default App;
