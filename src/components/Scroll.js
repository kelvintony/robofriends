//u can remove this component cuz it makes ur web urgly
//this component houses another component, go to the App.js so as to know
//how to wrap a component that houses another component.

import React from "react";

const Scroll = (props) => {
	return <div style={{ overflowY: "scroll", border: "1px solid black", height: "500px" }}>{props.children}</div>;
};

export default Scroll;
