import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	const divStyle = {
		overflowY: 'scroll',
		height: (props.height - 20 - 87 - 57)*0.87 + 'px'
	};

	return (
		<div style={divStyle}>
			{props.children}
		</div>
	);
};

export default Scroll;