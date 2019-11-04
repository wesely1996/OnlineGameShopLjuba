import React from 'react';
import Cart from './CartButton/Cart';
import Home from './HomeButton/Home';
import Logo from '../Logo/Logo';
import UserIcon from './UserButton/UserIcon';
import {isMobile} from 'react-device-detect';

const Navigation = ({onRouteChange, isSignedIn, route}) => {
	if(isSignedIn && !isMobile){
		return (
			<nav style={{display: 'flex', justifyContent: 'space-between'}}>
				<Logo/>
				<div style={{display: 'flex', flexDirection: 'row'}}>
					<div 
					style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
					{
						route==='cart' ?
						<Home onRouteChange = {onRouteChange}/> :
						<Cart onRouteChange = {onRouteChange}/>
					}
					</div>
					<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
						{
							route === 'userPage' ?
							<Home onRouteChange = {onRouteChange}/> :
							<UserIcon onRouteChange = {onRouteChange}/>
						}
					</div>
					<div
					style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
					onClick={() => onRouteChange('singout')}
					className='f4 link dim white underline pa2 ma1 pointer b grow'>
						<p>Sign Out</p>
					</div>
				</div>
			</nav>
		);
	}
	else if(!isSignedIn){
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<div style={{display: 'flex', flexDirection: 'row'}}>
					{
						route==='register' ?
						<div
						style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
						onClick={() => onRouteChange('signin')}
						className='f4 link dim white underline pa2 ma1 pointer b grow'>
							<p>Sign In</p>
						</div>
						:
						<div
						style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
						onClick={() => onRouteChange('register')}
						className='f4 link dim white underline pa2 ma1 pointer b grow'>
							<p>Sign Up</p>
						</div>
					}
				</div>
			</nav>
		);
	}
	else {
		return(
		<nav className='w-100'>
			<Logo/>
		</nav>)
	}
}

export default Navigation;