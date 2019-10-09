import React from 'react';

class Registration extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			phoneNumber: '',
			email: '',
			password: '',
		};
	}

	onNameChange = (event) =>{
		this.setState({name: event.target.value});
	}

	onPhoneChange = (event) =>{
		this.setState({phoneNumber: event.target.value});
	}

	onEmailChange = (event) =>{
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) =>{
		this.setState({password: event.target.value});
	}

	onSubmitRegister = () =>{
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({
				name : this.state.name,
				email : this.state.email,
				phone : this.state.phoneNumber,
				password: this.state.password
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user){
				this.props.loadUser(user);
				this.props.onRouteChange('main');
			}
		})
	}

	render(){
		return (
			<article className="w-30 center b--transparent br3 pa3 pa3-ns mv4 ba bw3 bg-black-40 shadow-3">
				<main className="pa2 white-80">
				  <div action="sign-up_submit" method="get" acceptCharset="utf-8">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Sign Up</legend>
				      <div className="mt3">
				        <label className="db fw4 lh-copy f6" htmlFor="name">Name and Surname</label>
				        <input 
				        onChange = {this.onNameChange} 
				        className="pa2 input-reset ba bg-white hover-bg-gray hover-black w-100 measure" 
				        type="text" 
				        name="name"  
				        id="name"/>
				      </div>
				      <div className="mt3">
				        <label className="db fw4 lh-copy f6" htmlFor="phone-number">Phone number</label>
				        <input 
				        onChange = {this.onPhoneChange} 
				        className="pa2 input-reset ba bg-white hover-bg-gray hover-black w-100 measure" 
				        type="text" 
				        name="phone-number"  
				        id="phone-number"/>
				      </div>
				      <div className="mt3">
				        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
				        <input 
				        onChange = {this.onEmailChange} 
				        className="pa2 input-reset ba bg-white hover-bg-gray hover-black w-100 measure" 
				        type="email" 
				        name="email-address"  
				        id="email-address"/>
				      </div>
				      <div className="mt3">
				        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        onChange = {this.onPasswordChange} 
				        className="b pa2 input-reset ba bg-white hover-bg-gray hover-black w-100 measure" 
				        type="password" 
				        name="password"  
				        id="password"/>
			          </div>
				    </fieldset>
				    <div className="mt3">
				    	<input 
				    	onClick = {this.onSubmitRegister}
				    	className="b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6" 
				    	type="submit" 
				    	value="Sign Up"/>
			    	</div>
				  </div>
				</main>
			</article>
		);
	}
}

export default Registration;