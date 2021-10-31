import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderComp = () => {
	return (
		<Header>
			<nav className="navbar container justify-content-end">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link link-dark">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-link link-dark">
							About
						</Link>
					</li>
				</ul>
			</nav>
		</Header>
	);
};

export default HeaderComp;

const Header = styled.header``;
