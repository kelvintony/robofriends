import React from "react";

const Card = (props) => {
	const { name, email, id } = props; //this is called destructuring
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robots" style={{ width: 200, height: 200 }} src={`https://robohash.org/${id}`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
