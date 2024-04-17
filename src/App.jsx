import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import gsap, { ScrollSmoother, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollSmoother, ScrollToPlugin);

function App() {
	const mainContainer = useRef();

	useEffect(() => {
		let smoother = ScrollSmoother.create({
			smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
			effects: true, // looks for data-speed and data-lag attributes on elements
		});
		return () => {
			smoother.kill();
		};
	});

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
