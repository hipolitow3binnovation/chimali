import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import isotipo from "@/assets/isotipo.svg";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		// Función para cambiar el estado de 'scrolled' al hacer scroll
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 600) {
				// Puedes ajustar este valor según sea necesario
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		// Agregar evento de scroll al cargar el componente
		window.addEventListener("scroll", handleScroll);

		// Eliminar el evento de scroll al desmontar el componente
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // El segundo argumento del useEffect es un array vacío, lo que significa que este efecto se ejecutará solo una vez al montar el componente

	return (
		<div
			className={`fixed top-0 z-10 w-full backdrop-blur-md bg-white/30 ${scrolled ? "bg-white/30" : "bg-transparent"}`}
		>
			<nav className="container flex flex-row items-center justify-between mx-auto py-7">
				<div>
					<img src={isotipo} alt="" />
				</div>

				<ul className="flex flex-row justify-between gap-6 font-sans font-medium text-sm text-[#4A4242] uppercase h-full items-center">
					<li>
						<a
							href="/"
							className={`nav-link ${scrolled ? "scrolled-link-color" : ""}`}
						>
							Quienes somos
						</a>
					</li>

					<li>
						<a
							href="/"
							className={`nav-link ${scrolled ? "scrolled-link-color" : ""}`}
						>
							Nuestros Productos
						</a>
					</li>

					<li>
						<a
							href="/"
							className={`nav-link ${scrolled ? "scrolled-link-color" : ""}`}
						>
							Contacto
						</a>
					</li>

					<li>
						<button className="border border-[#623D21] bg-[#956851] text-white font-sans text-sm font-semibold py-2 px-4">
							Explorar Ahora
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
