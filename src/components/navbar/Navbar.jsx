import React, { useEffect } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import logo_new from '../../assets/Picture7.png';
import { useRef } from 'react';
import { useState } from 'react';

/**
 * Component for the navbar.
 *
 * @component 
 * @state isNavExpended
 * 
 */

function Navbar(props) {
	const [ isNavExpanded, setIsNavExpanded ] = useState(false);
	const btnRef = useRef();
	useEffect(() => {
		const closeDropdown = (e) => {
			if (e.path[1] !== btnRef.current && e.path[0] !== btnRef.current && e.path[2] !== btnRef.current)
				setIsNavExpanded(false);
		};

		document.body.addEventListener('click', closeDropdown);
		return () => document.body.removeEventListener('click', closeDropdown);
	}, []);

	const handleLogoClick = () => {
		props.setPageMove('convertor');
		localStorage.clear();
	};

	const handleMenuClick = () => {
		if (isNavExpanded) {
			setIsNavExpanded(false);
		} else setIsNavExpanded(true);
	};

	return (
		<nav className="navigation">
			<div>
				<a href="/" onClick={handleLogoClick}>
					<img className="headerLogo" src={logo_new} alt="header_logo" />
				</a>
			</div>
			<button onClick={handleMenuClick} className="hamburger">
				<MenuIcon ref={btnRef} />
			</button>
			<div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
				<ul>
					<li>
						<a href="/" onClick={handleLogoClick}>
							Home
						</a>
					</li>
					<li>
						<a href="/instructions">Instructions</a>
					</li>
					<li>
						<a href="/faq">FAQ</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
