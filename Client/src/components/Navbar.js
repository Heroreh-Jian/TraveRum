import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
  const {currentUser, onLogout} = props;
  return (
    
    <nav className="navbar navbar-default navbar-fixed-top">
		<div className="container-fluid">
				<div className="navbar-header">
					 <a className="navbar-brand" href="/">TraveRum</a>
					 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-links-collapse" aria-expanded="false">
					  <span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
				</div>
				<div className="collapse navbar-collapse" id="nav-links-collapse">
					{currentUser ?
          <ul className="nav navbar-nav navbar-right">
            <li><a>Login as: {currentUser.username}</a></li>
            <li><Link to={`/users/${currentUser.userId}/messages/new`}>New Message</Link></li>
            <li><Link to="/signin" onClick={onLogout}>Log out</Link></li>
          </ul> :
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/signin">Log in</Link></li>
          </ul>
        }
				</div>
		</div>
	</nav>
	
  );
}

export default Navbar;
