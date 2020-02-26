import React from 'react';

const Home = ({onRouteChange}) => {
	return(
		<div className="ma2">
			<button
			onClick={() => onRouteChange('main')}
			type="button" 
			className="b--transparent br-pill bg-black-60 grow">
				<img alt={'HOME'} src={'/images/home.png'} style={{width: 45, height: 45, minWidth: 25, minHeight: 25}}/>
			</button>
		</div>
	);
}

export default Home;