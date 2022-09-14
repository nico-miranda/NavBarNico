import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navBar.css";
import CartWidget from "./CartWidget";

function Navbar(props) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>Ferreteria Miranda</h3>
			<nav ref={navRef}>
				<a href="/#">Inicio</a>
				<a href="/#">Productos</a>
				<a href="/#">Presupuestos</a>
				<CartWidget carrito={props.carrito}/>
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