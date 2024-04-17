import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function App() {
	const mainContainer = useRef();

	useEffect(() => {
		// Puedes usar gsap.to() directamente para animar el scroll
		gsap.to(window, { scrollTo: "#smooth-wrapper", duration: 1.5, ease: "power3.inOut" });
	}, []);
	
	return (
		<>
			<div ref={mainContainer} id="smooth-wrapper">
				<div id="smooth-content">
					<Navbar />
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
