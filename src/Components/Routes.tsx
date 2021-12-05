import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Results from '../Pages/Results';
import Evaluation from '../Pages/Evaluation';
import NotFound from '../Pages/NotFound';
import useLoggedInUser from '../Hooks/useLoggedInUser';

import FormDemo from './FormDemo';
import QuizContainer from './QuizContainer';

const Routes = () => {
	const user = useLoggedInUser();

	return (
		<Switch>
			<Route path="/" exact render={() => <Home />} />
			<Route path="/demo" exact component={FormDemo} />
			{!user && <Route path="/login" exact component={Login} />}
			{user && <Route path="/results" exact component={Results} />}
			<Route path="/evaluation/:id" exact component={Evaluation} />
			<Route path="/quiz" exact component={QuizContainer} />
			<Route component={NotFound} />
		</Switch>
	);
};

export default Routes;
