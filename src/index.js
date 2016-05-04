import React, { Component } from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Profile from './components/Profile';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: "talgat-ruby",
			userData: [],
			userRepos: [],
			perPage: 5
		}
		this.getUserData();
	}

	getUserData() {
		$.ajax({
			url: `https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`,
			dataType: 'json',
			cache: false,
			success: (data) => {
				this.setState({userData: data});
				console.log(data);
			},
			error: (xhr, status, err) => {
				this.setState({username: null});
				alert(err);
			}
		});
	}

	render() {
		return(
			<div>
				<Profile userData = { this.state.userData }/>
			</div>
		);
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};
App.defaultProps = {
	clientId: '9e59ec46ba33cfd5c043',
	clientSecret: 'b7e9b54f827b777b3c02b6effa756c63bbe47c09'
};


ReactDom.render(<App />, document.getElementById("app"));