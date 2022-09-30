import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navBar.css";
import CartWidget from "./CartWidget";
import "../styles/carro.css";
import { Link } from "react-router-dom";
function Navbar(props) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>Ferreteria Miranda</h3>
			<nav ref={navRef}>
				<Link to="/home">Inicio</Link>
				<Link to="/detalles">Productos</Link>
				<Link to="*">Presupuestos</Link>
				<div className="carrito">
				<CartWidget carrito={props.carrito}/>
				</div>
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