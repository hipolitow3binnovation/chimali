import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Products from "@/sections/Products";
import CTA from "@/sections/CTA";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

function App() {
	return (
		<>
			<Navbar />

			<main className="w-full">
				<Hero />
				<About />
				<Products />
				<CTA />
				<Contact />
			</main>

			<Footer />
		</>
	);
}

export default App;
