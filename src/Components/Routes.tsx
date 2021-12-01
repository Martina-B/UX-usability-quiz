import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Results from '../Pages/Results';
import Evaluation from '../Pages/Evaluation';

import FormDemo from './FormDemo';

const Routes = () => (
	<Switch>
		<Route path="/" exact render={() => <Home />} />
		<Route path="/demo" exact component={FormDemo} />
		<Route path="/login" exact component={Login} />
		<Route path="/results" exact component={Results} />
		<Route path="/evaluation/:id" exact component={Evaluation} />
	</Switch>
);
export default Routes;
