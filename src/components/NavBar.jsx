import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navBar.css";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>Despegar</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Hoteles</a>
				<a href="/#">Viajes</a>
				<a href="/#">Combos</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;