import React from 'react';
import './Scroll.css';

const Scroll = ({children, height}) => {
	const divStyle = {
		overflowY: 'scroll',
		height: (height - 20 - 87 - 57)*0.87 + 'px'
	};

	return (
		<div style={divStyle}>
			{children}
		</div>
	);
};

export default Scroll;