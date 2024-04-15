import React from "react";
import contact from "@/assets/bg-contact.webp";

const Contact = () => {
	return (
		<section className="flex flex-row bg-white h-fit">
			<div className="relative w-1/2">
				<div className="absolute top-0 left-0 bg-[url('./assets/pattern-dark.svg')] w-full h-16 bg-repeat-x bg-fill"></div>
				<div className="flex flex-row items-center justify-center h-full">
					<div className="flex flex-col gap-4 mx-24 my-16">
						<div className="flex flex-col gap-4">
							<h2 className="text-4xl text-[363636] tracking-wider font-serif font-semibold uppercase">
								Contáctanos
							</h2>
							<p className="text-[#7B7B7B] text-lg font-normal font-sans leading-7">
								¿Tienes alguna pregunta o comentario? Estamos aquí para
								escucharte. Completa el formulario a continuación y nos
								pondremos en contacto contigo lo antes posible. ¡Esperamos saber
								de ti!
							</p>
						</div>
						<form className="flex flex-col gap-4">
							<div>
								<label htmlFor="name">Nombre</label>
								<input type="text" id="name" placeholder="Escribe tu nombre" />
							</div>

							<div>
								<label htmlFor="email">Correo electrónico</label>
								<input
									type="email"
									id="email"
									placeholder="Escribe tu correo electrónico"
								/>
							</div>

							<div>
								<label htmlFor="message">Mensaje</label>
								<textarea
									name="message"
									id="message"
									placeholder="Escribe tu mensaje"
									rows="8"
								></textarea>
							</div>

							<div>
								<button className="border border-[#623D21] font-sans font-semibold text-sm text-white bg-[#956851] px-4 py-2 block w-full">
									Enviar
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 bg-[url('./assets/pattern-dark.svg')] w-full h-16 bg-repeat-x bg-fill rotate-180 invert"></div>
			</div>
			<div className="w-1/2">
				<img src={contact} alt="" className="object-cover w-full h-full" />
			</div>
		</section>
	);
};

export default Contact;
