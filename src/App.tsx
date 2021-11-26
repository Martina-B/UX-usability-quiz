import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Routes from './Components/Routes';
import { UserProvider } from './Hooks/useLoggedInUser';
import Layout from './Components/Layout';

const App = () => (
	<UserProvider>
		<div className="App">
			<BrowserRouter>
				<CssBaseline />
				<Layout>
					<Routes />
				</Layout>
			</BrowserRouter>
		</div>
	</UserProvider>
);

export default App;
