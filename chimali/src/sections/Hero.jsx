import React from "react";
import bg_hero from "@/assets/bg-hero.webp";

const Hero = () => {
	return (
		<>
			<section className="relative h-screen">
				<img
					src={bg_hero}
					alt=""
					className="absolute inset-0 object-cover w-full h-full bg-no-repeat bg-cover"
				/>
				<div className="relative flex items-center justify-center h-full">
					<div className="container">
						<div className="flex flex-col w-full gap-4 lg:w-1/2">
							<h1 className="text-6xl text-[#391F0F] font-serif font-semibold tracking-wider">
								Mezcal Chimali,
								<br />
								el sabor ancestral de{" "}
								<span className="text-[#956851]">Oaxaca</span>
							</h1>
							<div className="flex flex-col w-full gap-5 lg:w-3/4">
								<p className="text-[#888888] text-base font-light font-sans">
									Descubre el auténtico sabor de Oaxaca con nuestra selección
									artesanal de mezcales. Sumérgete en la riqueza de nuestra
									cultura y tradición con cada sorbo...
								</p>
								<div>
									<button className="border border-[#623D21] bg-[#956851] text-white font-sans text-sm font-semibold py-2 px-4">
										Explorar Ahora
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
