import React from 'react';
import './Scroll.css';

const Scroll = ({children}) => {

	return (
        <div style={{overflowY: 'scroll', height:'23em'}}>
			{children}
		</div>
	);
};

export default Scroll;