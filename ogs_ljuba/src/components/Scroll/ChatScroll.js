import React from 'react';
import './Scroll.css';

const Scroll = ({children}) => {

	return (
        <div style={{overflowY: 'scroll', minHeight:'10em', height:'90%'}}>
			{children}
		</div>
	);
};

export default Scroll;