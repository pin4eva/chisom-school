import React from "react";

const UserCardComp = ({ user }) => {
	return (
		<div className="d-flex mb-3 align-items-center justify-content-between">
			<p className="my-0">{user.name}</p>
			<button className="btn btn-danger">Remove</button>
		</div>
	);
};

export default UserCardComp;
