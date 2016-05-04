import React, { Component } from 'react';

class Search extends Component {
	onSubmit(event) {
		event.preventDefault();
		let username = this.refs.username.value.trim();
		if(!username) {
			alert("Please type username");
			return;
		} 
		this.props.onFormSubmit(username);
		this.refs.username.value = '';
	}

	render() {
		return(
			<div>
				<form onSubmit={(event) => this.onSubmit(event)}>
					<label>Search Github User</label>
					<input type="text" ref="username" className="form-control"/>
				</form>
			</div>
		);
	}
};

export default Search;