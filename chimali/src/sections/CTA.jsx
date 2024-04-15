import React from "react";
import bg_cta from "@/assets/bg-cta.webp";
import lemon from "@/assets/lemon.webp";
import water from "@/assets/water.webp";

const CTA = () => {
	return (
		<section className="relative h-screen">
			<img
				src={bg_cta}
				alt=""
				className="absolute object-cover object-center w-full h-full bg-no-repeat bg-cover"
			/>
			<div className="flex items-center justify-center h-full">
				<div className="container">
					<div className="w-1/2 ml-auto px-16 py-24 h-fit relative backdrop-blur-3xl bg-[#261C13]/30">
						<div className="flex flex-col gap-5 px-14">
							<h2 className="font-serif text-4xl font-semibold tracking-wider text-white uppercase">
								¡Descubre el sabor auténtico de Oaxaca con Mezcal Chimali!
							</h2>
							<p className="text-[#C8C8C8] text-lg font-normal font-sans leading-7">
								Sumérgete en la rica tradición del mezcal artesanal. ¡Explora
								nuestra colección hoy mismo!
							</p>
							<div>
								<button className="px-4 py-2 font-sans text-sm font-semibold text-white bg-transparent border border-white">
									Explorar Ahora
								</button>
							</div>
						</div>
						<div className="absolute top-0 -left-56">
							<img src={lemon} alt="" className="mix-blend-lighten w-96" />
						</div>
						<div className="absolute top-0 -left-40">
							<img
								src={water}
								alt=""
								className="mix-blend-lighten aspect-square h-96"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
