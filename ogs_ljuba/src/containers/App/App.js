import React, { Component } from 'react';
import update from 'react-addons-update';
import Navigation from '../../components/Navigation/Navigation';
import Search from '../../components/Search/Search';
import CardHolder from '../../components/Holders/CardHolder';
import Scroll from '../../components/Scroll/Scroll';
import SignIn from '../SignIn/SignIn';
import Registration from '../Registration/Registration';
import ConfirmationButton from '../../components/Buttons/CartConfirmButton/ConfirmationButton';
import OrderHolder from '../../components/Holders/OrderHolder';
import ArrowButton from '../../components/Buttons/ArrowButtons/ArrowButton';
//import PopUp from '../../components/Notifications/PopUp';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			games: [],
			searchfield: '',
			height: 450,
			route: 'signin',
			isSignedIn: false,
			page: '',
			user: {
				id: {},
				name: '',
				email: '',
				cart: [],
				orders: [],
			}
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	//get all games and place them in an array
	getGames = () => {
		fetch('http://localhost:3000/games', {
			method: 'get',
			headers: {'Content-type':'application/json'},
		})
		.then(response => response.json())
		.then(Games => {
			this.setState({games: Games});
		})
	}

	getPage = () =>{
		if(this.state.games.length > 50){
			this.setState({page: 'first'})
		}else{
			this.setState({page: 'firstAndLast'})
		}
	}

	componentDidMount(){
		this.getGames();
		this.getPage();

		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions.bind(this));
	}
	//set new data for the user
	loadUser = (data) =>{
		this.setState({user: {
			id: data.id,
			name: data.name,
			email: data.email,
			cart: data.cart,
			orders: data.orders,
		}});
	}

	componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({height: window.innerHeight });
    }

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value});
	}

	changePage = (newPage) => {
		let page=this.state.page;
		let games=this.state.games;

		if(newPage === 'first'){
			this.setState({page: 'first'})
		}
		if(newPage === 'last'){
			this.setState({page: 'last'})
		}
		if(newPage === 'next'){
			if(page === 'first'){
				this.setState({page: 1})
			}else{
				if(page+1 < Math.floor(games.length / 50))
					this.setState({page: page+1})
				else
					this.setState({page: 'last'})
			}
		}
		if(newPage === 'previous'){
			if(page==='last'){
				let p = Math.floor(games.length / 50);
				this.setState({page: p-1})
			}
			else{
				this.setState({page: page-1})
			}
		}
	}

	//route manager
	onRouteChange = (route) => {
		if(route === 'singout'){
			this.setState({route: 'signin', isSignedIn: false, user: {id: {}, name: '', email: '', cart: [], orders: []}});
		}
		else{
			this.setState({route: route});
			if(route === 'main' && !this.state.isSignedIn){
				this.setState({isSignedIn: true});
			}
		}
	}
	//move items from cart to orders
	moveToOrders = () =>{
      console.log("ok");
		/*fetch('http://localhost:3000/order', {
			method: 'put',
			headers: {'Content-type':'application/json'},
			body: JSON.stringify({
				userId: this.state.user.id
			})
		})
		.then(response => response.json())
		.then(orders => {
			this.setState({
			  user: update(this.state.user, {cart: {$set: []}, orders: {$set: orders.sort()}})
			})
            
			console.log(this.state.user)
		})*/
	}

	onOrderAdded = (orderid) =>{
		fetch('http://localhost:3000/addToCart', {
			method: 'put',
			headers: {'Content-type':'application/json'},
			body: JSON.stringify({
				userId: this.state.user.id,
				orderId: orderid
			})
		})
		.then(response => response.json())
		.then(cart => {
			this.setState({
			  user: update(this.state.user, {cart: {$set: cart.sort()}})
			})
		})
	}

	onOrderRemoved = (orderid) =>{
		fetch('http://localhost:3000/cancelItem', {
			method: 'put',
			headers: {'Content-type':'application/json'},
			body: JSON.stringify({
				userId: this.state.user.id,
				orderId: orderid
			})
		})
		.then(response => response.json())
		.then(cart => {
			this.setState({
			  user: update(this.state.user, {cart: {$set: cart.sort()}})
			})
			console.log(this.state.user)
		})
	}

	render(){
		const {games, searchfield, height, route, isSignedIn, user, page} = this.state;

		const filteredGames = games.filter(game =>{
			return game.gameName.toLowerCase().includes(searchfield.toLowerCase());
		})

		const filetrGamesInCart = games.filter(game =>{
			if(user.cart.find(x => x.orderId === game._id)){
				return true;
			}
			return false;
		})

		let fromPage = () =>{
			if(page==='first'){
				return 0;
			}
			if(page==='last'){
				return(games.length - games.length%50);
			}
			if(Number.isInteger(page)){
				return page*50;
			}
			return 0;
		}

		let toPage = () =>{
			if(page==='first'){
				if(games.length < 50){
					return games.length;
				}
				return 50;
			}
			if(page==='last'){
				return games.length;
			}
			if(Number.isInteger(page)){
				return (page+1)*50;
			}
			return games.length;
		}

		return (
			<div className="App">
		      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} route={route}/>
		      {
			    route === 'register' ?
			    <Registration onRouteChange = {this.onRouteChange} loadUser={this.loadUser}/> :
			    route === 'signin' ?
			    <SignIn onRouteChange = {this.onRouteChange} loadUser={this.loadUser}/> :
			    route === 'main' ?
			    <div>
			    	<Search searchChange={this.onSearchChange}/>
			    	{
			    		!games.length ?
			    		<h1 className="f1 b ma5 pa5 tc red grow" style={{textShadow: 'gray 2px 0 10px'}}>
					      	LOADING
						</h1> :
						<div>
							<Scroll height={height}>
								<CardHolder Games={filteredGames} OrderAction={this.onOrderAdded}
											route={route} from={fromPage()} to={toPage()}/>
							</Scroll>
							<div style={{display:'flex', flexDirection:'row', justifyContent: ' center'}}>
								<ArrowButton arrowCode='first' page={page} changePage={this.changePage}/>
								<ArrowButton arrowCode='previous' page={page} changePage={this.changePage}/>
								<div>    </div>
								<ArrowButton arrowCode='next' page={page} changePage={this.changePage}/>
								<ArrowButton arrowCode='last' page={page} changePage={this.changePage}/>
							</div>
						</div>
			    	}
			    </div> : 
			    route === 'cart' ?
			    <div>
			    	{
			    		!games.length ?
			    		<h1 className="f1 b ma5 pa5 tc red grow" style={{textShadow: 'gray 2px 0 10px'}}>
					      	LOADING
					    </h1> :
					    <div>
						    <Scroll height={height}>
						      	<CardHolder Games={filetrGamesInCart} AllGamesInCart={user.cart} OrderAction={this.onOrderRemoved} route={route}/>
						    </Scroll>
						    <ConfirmationButton OrderAction={this.moveToOrders}/>
					    </div>
			    	}
				</div> :
				route === 'userPage'?
				<div>
					{
			    		!games.length ?
			    		<h1 className="f1 b ma5 pa5 tc red grow" style={{textShadow: 'gray 2px 0 10px'}}>
					      	LOADING
					    </h1> :
					    <div>
							<Search searchChange={this.onSearchChange}/>
						    <Scroll height={height}>
								<OrderHolder Orders={user.orders} AllGames={games}/>
						    </Scroll>
					    </div>
			    	}
				</div> :
			    <h1 className="f1 b ma5 pa5 tc red grow" style={{textShadow: 'gray 2px 0 10px'}}>
			    	!UNKNOWN ROUTE!
			    </h1>
		      }
		      <div className="ma1 pa1" style={{fontSize:'10px', height: "20px", display: 'flex', justifyContent: 'center'}}>
				  <div className = "bg-black" style={{display: 'flex', flexDirectino: 'row'}}>
				  	<img src="/images/copyright.png" alt="c" style={{height: '7px'}}/> 
		      		<div className="white">Copyright 2019 <span className="red b"> N&T</span></div>
				  </div>
	      	  </div>
		    </div>
		);
	}
}

export default App;
