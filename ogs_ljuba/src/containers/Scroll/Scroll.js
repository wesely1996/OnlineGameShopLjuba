import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	console.log(props.height);
	return (
		<div style={{overflowY: 'scroll', height: '450px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;