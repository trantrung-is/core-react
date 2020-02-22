/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-curly-newline */

/**
 * @author Tran Trung
 * @copyright Kyanon Digital 2020
 * @param
 * @description Private router. Chang fake Auth by anthor value
 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// fake auth
const fakeAuth = true;

const PrivateRoute = ({ children, ...rest }) => (
	<Route
		{...rest}
		render={({ location }) =>
			fakeAuth ? (
				children
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: location }
					}}
				/>
			)
		}
	/>
);

export default PrivateRoute;
