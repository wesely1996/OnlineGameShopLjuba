import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = () => {
	return (
		<nav style={{display: 'flex', justifyContent: 'space-between'}}>
			<Logo/>
			<p className='f4 link dim black underline pa3 ma0 pointer b grow'>Sign Out</p>
		</nav>
	);
}

export default Navigation;