import React from 'react';

const Main = ({onRouteChange}) => {
    return(
        <div className="">
            <button 
            onClick={() => onRouteChange('orders')}
			type="button"
            className="ma2 f3 w-20 br-100 bg-transparent b--none white shadow-3">
                Orders
            </button>
            <button
            onClick={() => onRouteChange('games')}
			type="button"
            className="ma2 f3 w-20 br-100 bg-transparent b--none white shadow-3">
                Games
            </button>
            <button
            onClick={() => onRouteChange('chat')}
			type="button"
            className="ma2 f3 w-20 br-100 bg-transparent b--none white shadow-3">
                Chat
            </button>
        </div>
    );
}

export default Main;