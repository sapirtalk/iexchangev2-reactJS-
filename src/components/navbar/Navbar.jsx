import React from 'react';
import './Navbar.css';
import header_logo from '../../assets/header_logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import Toggle from '../../Hooks/Toggle';

/**
 * Component for the navbar.
 *
 * @component 
 * @state isNavExpended
 * 
 */

function Navbar() {
	const [ isNavExpanded, setIsNavExpanded ] = Toggle(false);

	return (
		<nav className="navigation">
			<a href="/">
				<img className="headerLogo" src={header_logo} alt="header_logo" />
			</a>
			<button onClick={setIsNavExpanded} className="hamburger">
				<MenuIcon />
			</button>
			<div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
