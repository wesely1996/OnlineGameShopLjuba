import React from 'react';
import Cart from '../Cart/Cart';
import Home from '../Cart/Home';
import Logo from '../Logo/Logo';

const Navigation = ({onRouteChange, isSignedIn, route}) => {
	if(isSignedIn){
		return (
			<nav style={{display: 'flex', justifyContent: 'space-between'}}>
				<Logo/>
				<div style={{display: 'flex', flexDirectino: 'row'}}>
					{
						route==='cart' ?
						<Home onRouteChange = {onRouteChange}/> :
						<Cart onRouteChange = {onRouteChange}/>
					}
					<p 
					onClick={() => onRouteChange('singout')}
					className='f4 link dim white underline pa2 ma1 pointer b grow'>
						Sign Out
					</p>
				</div>
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
					className='f4 link dim white underline pa2 ma1 pointer b grow'>
						Sign In
					</p>
					<p 
					onClick={() => onRouteChange('register')}
					className='f4 link dim white underline pa2 ma1 pointer b grow'>
						Sign Up
					</p>
				</div>
			</nav>
		);
	}
}

export default Navigation;