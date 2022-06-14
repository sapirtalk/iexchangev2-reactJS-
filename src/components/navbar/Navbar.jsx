import React from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import Toggle from '../../Hooks/Toggle';
import logo_new from '../../assets/Picture7.png';

/**
 * Component for the navbar.
 *
 * @component 
 * @state isNavExpended
 * 
 */

function Navbar(props) {
	const [ isNavExpanded, setIsNavExpanded ] = Toggle(false);

	const handleLogoClick = () => {
		props.setPageMove('convertor');
		localStorage.clear();
	};

	return (
		<nav className="navigation">
			<div>
				<a href="/" onClick={handleLogoClick}>
					<img className="headerLogo" src={logo_new} alt="header_logo" />
				</a>
			</div>
			<button onClick={setIsNavExpanded} className="hamburger">
				<MenuIcon />
			</button>
			<div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
				<ul>
					<li>
						<a href="/" onClick={handleLogoClick}>
							Home
						</a>
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
