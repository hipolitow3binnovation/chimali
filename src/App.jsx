import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import gsap, { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
	useEffect(() => {
		// Crear una instancia de ScrollSmoother
		let smoother = ScrollSmoother.create({
			smooth: 0.2, // Duración en segundos para llegar a la posición de desplazamiento nativa
			effects: true, // Habilitar efectos
			normalizeScroll: true // Normalizar el desplazamiento
		});

		return () => {
			smoother.kill(); // Limpiar la instancia al desmontar el componente
		};
	}, []); // El efecto se ejecutará solo una vez después de que el componente se monte

	return (
		<>
			<Navbar />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main className="w-full">
						<Hero />
						<About />
						<Products />
						<CTA />
						<Contact />
					</main>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
