import React from 'react';

const UserIcon = ({onRouteChange}) => {
	return(
		<div className="ma2">
			<button
			onClick={() => onRouteChange('main')} //TODO change to the user personal page
			type="button" 
			className="b--transparent br-pill bg-black-60 grow">
				<img alt={'User'} src={'/images/userIcon.png'} style={{width: 45, height: 45, minWidth: 25, minHeight: 25}}/>
			</button>
		</div>
	);
}

export default UserIcon;