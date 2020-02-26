import React from 'react';
import './Scroll.css';

const Scroll = ({children, height, route}) => {

	const buttonSize = (height - 20 - (route === "cart" ? 110 : 87))*0.87 + 'px';

	const divStyle = {
		overflowY: 'scroll',
		height: buttonSize,
	};

	return (
		<div style={divStyle}>
			{children}
		</div>
	);
};

export default Scroll;