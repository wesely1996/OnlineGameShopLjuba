import React from 'react';
import './Scroll.css';

const Scroll = ({children}) => {

	const divStyle = {
		overflowY: 'scroll',
		height: "450px",
	};

	return (
		<div style={divStyle}>
			{children}
		</div>
	);
};

export default Scroll;