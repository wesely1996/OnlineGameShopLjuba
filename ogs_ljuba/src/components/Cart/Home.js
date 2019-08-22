import React from 'react';
import './Cart.css';

const Home = ({onRouteChange}) => {
	return(
		<div className="ma2">
			<button
			onClick={() => onRouteChange('main')}
			type="button" 
			className="b--transparent br-pill cart grow">
				<img alt={'HOME'} src={'/images/home.png'} style={{width: 30, height: 30, minWidth: 25}}/>
			</button>
		</div>
	);
}

export default Home;