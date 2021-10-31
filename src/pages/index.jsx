import React, { useState } from "react";
import styled from "styled-components";
import UserCardComp from "../components/UserCardComp";

// const users = [
// 	{ name: "Peter Akaliro", id: "1" },
// 	{ name: "John Doe", id: "2" },
// 	{ name: "Marry Doe", id: "4" },
// 	{ name: "Janne Doe", id: "3" },
// ];

const HomePage = () => {
	const [users, setUsers] = useState([]);
	const [contact, setContact] = useState(" ");

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(contact);
	// };
	return (
		<Wrapper className="container">
			<form>
				<div className="form-group">
					<input
						onChange={(e) => setContact(e.target.value)}
						type="text"
						className="form-control"
					/>
					<button className="btn btn-secondary">Add Contact</button>
				</div>
			</form>

			<p className="mt-4 fs-1">{contact}</p>
			<div className="contacts mt-4">
				{users.map((user, i) => (
					<UserCardComp key={i} user={user} />
				))}
			</div>
		</Wrapper>
	);
};

export default HomePage;

const Wrapper = styled.div`
	margin-top: 2rem;

	width: 100%;
	max-width: 70%;
	margin: auto;
	form {
		.form-group {
			display: flex;
			input,
			button {
				border-radius: 0;
				padding: 1rem 2rem;
			}
			.btn {
				width: 30%;
				box-sizing: border-box;
			}
		}
	}
`;
