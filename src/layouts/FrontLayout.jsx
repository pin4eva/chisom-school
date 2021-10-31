import React from "react";
import HeaderComp from "../components/HeaderComp";

const FrontLayout = ({ children }) => {
	return (
		<div>
			<HeaderComp />
			{children}
		</div>
	);
};

export default FrontLayout;
