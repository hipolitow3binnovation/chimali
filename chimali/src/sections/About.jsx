import React from "react";
import bg_about from "@/assets/bg-about.webp";
import logo from "@/assets/logo.svg";

const About = () => {
	return (
		<section className="relative h-screen">
			<img
				src={bg_about}
				alt=""
				className="absolute inset-0 object-cover w-full h-full bg-no-repeat bg-cover"
			/>
			<div className="relative flex items-center justify-center h-full">
				<div className="container">
					<div className="flex items-center justify-center h-full">
						<div className="w-full lg:w-1/2 ml-auto h-screen flex justify-center items-center backdrop-blur-sm bg-[#262626]/10">
							<div className="flex flex-col gap-4 text-white px-14">
								<img src={logo} alt="" className="object-contain w-32 h-auto" />
								<h2 className="font-serif text-4xl font-semibold tracking-wider uppercase">
									Nuestra Historia: La Tradición que nos Define
								</h2>
								<div className="flex flex-col gap-5">
									<p className="text-[#C8C8C8] text-lg font-normal font-sans leading-7">
										En Mezcal Chimali, nos enorgullece preservar la esencia de
										la cultura zapoteca en cada botella. Desde tiempos
										ancestrales, el mezcal ha sido más que una bebida; es un
										símbolo de identidad, celebración y conexión con nuestra
										tierra. Descubre cómo nuestra historia se entrelaza con la
										riqueza de Oaxaca.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
