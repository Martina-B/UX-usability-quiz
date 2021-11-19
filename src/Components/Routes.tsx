import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../Pages/Home';

import FormDemo from './FormDemo';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact render={() => <Home />} />
			<Route path="/demo" exact component={FormDemo} />
		</Switch>
	</BrowserRouter>
);
export default Routes;
