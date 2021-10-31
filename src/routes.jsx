import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import HomePage from "./pages";
import AboutPage from "./pages/about";

const RouterComp = () => {
	return (
		<Router>
			<HeaderComp />
			<Switch>
				<Route component={AboutPage} path="/about" />
				<Route component={HomePage} path="/" />
			</Switch>
		</Router>
	);
};

export default RouterComp;
