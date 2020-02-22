/**
 * @author Tran Trung
 * @copyright Kyanon digital 2020
 * @deprecated Include all page in the app
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import LoginPage from 'pages/Login';
import DoashboardPage from 'pages/Doashboard';

const Root = () => (
	<Router>
		<Switch>
			<Route exact path="/login" component={LoginPage} />
			<Route exact path="/" component={DoashboardPage} />
		</Switch>
	</Router>
);

export default Root;
