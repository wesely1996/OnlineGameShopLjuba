import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({onRouteChange, isSignedIn}) => {
	if(isSignedIn){
		return (
			<nav style={{display: 'flex', justifyContent: 'space-between'}}>
				<Logo/>
				<p 
				onClick={() => onRouteChange('singout')}
				className='f4 link dim black underline pa2 ma1 pointer b grow'>
					Sign Out
				</p>
			</nav>
		);
	}
	else{
		return (
			<nav style={{display: 'flex', justifyContent: 'space-between'}}>
				<Logo/>
				<div style={{display: 'flex', flexDirectino: 'row'}}>
					<p 
					onClick={() => onRouteChange('signin')}
					className='f4 link dim black underline pa2 ma1 pointer b grow'>
						Sign In
					</p>
					<p 
					onClick={() => onRouteChange('register')}
					className='f4 link dim black underline pa2 ma1 pointer b grow'>
						Sign Up
					</p>
				</div>
			</nav>
		);
	}
}

export default Navigation;