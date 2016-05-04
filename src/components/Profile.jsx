import React, { Component } from 'react';
import RepoList from "./RepoList";

const Profile =({userData, userRepos}) => {
	return(
		<div className="panel panel-default">
		  <div className="panel-heading">
		    <h3 className="panel-title">{ userData.name }</h3>
		  </div>
		  <div className="panel-body">
		    <div className="row">
		    	<div className="col-md-4">
		    		<img src={userData.avatar_url} alt="" className="thumbnail" style={{width: "100%"}} />
		    	</div>
		    	<div className="col-md-8">
		    		<div className="row">
		    			<div className="col-md-12">
		    				<span className="label label-primary">{userData.public_repos} Repos</span>
		    				<span className="label label-success">{userData.public_gists} Gists</span>
		    				<span className="label label-info">{userData.followers} Folowers</span>
		    				<span className="label label-danger">{userData.following} Following</span>
		    			</div>
		    		</div>
		    		<hr />
	    			<div className="row">
	    				<div className="col-md-12">
	    					<ul className="list-group">
	    						<li className="list-group-item">
	    							<strong>Username: {userData.login}</strong>
	    						</li>
	    						<li className="list-group-item">
	    							<strong>Location: {userData.location}</strong>
	    						</li>
	    						<li className="list-group-item">
	    							<strong>Email Address: {userData.email}</strong>
	    						</li>
	    					</ul>
	    				</div>
	    			</div>
	    			<br />
	    			<a href={userData.html_url} className="btn btn-primary" target="blank">Visit Profile</a>
		    	</div>
		    </div>
		    <hr />
		    <h3>User Repositories</h3>
		    <RepoList userRepos={userRepos} />
		  </div>
		</div>
	);
}

export default Profile;