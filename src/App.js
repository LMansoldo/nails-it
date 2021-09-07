import React, { Suspense } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { Layout } from './components';
import ContentProviders from './services/routes';

const App = () => {
	const AVAILABLE_ROUTES = ContentProviders();

	return (
		<Router>
			<Suspense fallback={<LinearProgress color="secondary" />}>
				<Layout>
					<Switch>
						<Redirect from="/nails-it/" to="/hot" />
						{AVAILABLE_ROUTES.map(({ path, component }, index) => (
							<Route
								key={`route-${path}-${index}`}
								path={path}
								render={component}
							/>
						))}
					</Switch>
				</Layout>
			</Suspense>
		</Router>
	);
};
export default App;
