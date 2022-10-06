import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navBar.css";
import CartWidget from "./CartWidget";
import "../styles/carro.css";
import { Link, NavLink } from "react-router-dom";
function Navbar(props) {
	const navRef = useRef();


	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<Link to="/home" className="tituloLogo">{<h3>Ferreteria Miranda</h3>}</Link>
			<nav ref={navRef}>
				<Link to="/home">Inicio</Link>
				<Link to="/category/">Categorias</Link>
				<Link to="/category/sanitario">Sanitarios</Link>
				<Link to="/category/carpinteria">Carpinteria</Link>
				<Link to="/category/construccion">Construccion</Link>
				<NavLink to="/cart" className="carrito">
				<CartWidget carrito={props.carrito}/>
				</NavLink>
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