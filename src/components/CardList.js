import React from "react";
import Card from "./Card";

const CardList = (props) => {
	const { robots } = props;
	const cardsArray = robots.map((user, i) => {
		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
		//NB: VERY IMPORTANT, always assign key when running via arrays
	});
	return <div>{cardsArray}</div>;
	//Prettier helped me to format this up statement to a single line
};

export default CardList;
