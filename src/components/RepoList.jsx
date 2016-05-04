import React, { Component } from 'react';
import Repo from './Repo';

const RepoList =(props) => {
		return(
			<div>
				<ul className="list-group">
					{
						props.userRepos.map(repo => {
							return <Repo 
								repo={repo}
								key = {repo.id}
								{...props} />
						})
					}
				</ul>
			</div>
		);
}

export default RepoList;