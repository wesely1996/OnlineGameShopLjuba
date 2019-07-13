import React from 'react';
import CSBlogo from './csb.png';

const Logo = () =>{
	return (
		<div className = "b-100 ma0 mt0 ">
			<img alt='csb logo' src={CSBlogo} style={{width: 70, height: 70}}/>
		</div>
	);
}

export default Logo;