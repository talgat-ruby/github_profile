import React, { Component } from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Profile from './components/Profile';
import Search from './components/Search';


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
		this.getUserRepos();
	}

	getUserData() {
		$.ajax({
			url: `https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`,
			dataType: 'json',
			cache: false,
			success: (data) => {
				this.setState({userData: data});
			},
			error: (xhr, status, err) => {
				this.setState({username: null});
				alert(err);
			}
		});
	}

	getUserRepos() {
		$.ajax({
			url: `https://api.github.com/users/${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}&sort=created`,
			dataType: 'json',
			cache: false,
			success: (data) => {
				this.setState({userRepos: data});
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
				<Search onFormSubmit = {(username) => this.setState(
					{username: username},
					() => {
						this.getUserData();
						this.getUserRepos();
					}
				)}/>
				<Profile {...this.state} />
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