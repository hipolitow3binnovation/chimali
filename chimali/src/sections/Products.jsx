import React from "react";
import hand from "@/assets/hand.webp";
import bottle_1 from "@/assets/bottle-1.webp";
import bottle_2 from "@/assets/bottle-2.webp";
import bottle_3 from "@/assets/bottle-3.webp";
import bottle_4 from "@/assets/bottle-4.webp";
import bottle_5 from "@/assets/bottle-5.webp";
import bottle_6 from "@/assets/bottle-6.webp";
import bottle_7 from "@/assets/bottle-7.webp";

const Products = () => {
	return (
		<section className="h-fit bg-[url('./assets/bg-texture.webp')] relative bg-no-repeat bg-cover">
			<div className="absolute bg-[url('./assets/pattern-dark.svg')] w-full h-16 bg-repeat-x bg-contain"></div>
			<div className="flex flex-row items-center justify-end pt-6">
				<div className="flex flex-col w-5/12 gap-4">
					<h2 className="font-serif text-4xl font-semibold tracking-wider text-white uppercase">
						Explora Nuestra Colección
					</h2>
					<p className="text-[#C8C8C8] text-lg font-normal font-sans leading-7">
						Sumérgete en el mundo de Mezcal Chimali y descubre una gama diversa
						de mezcales, cada uno elaborado con pasión y dedicación. Desde los
						robustos y ahumados hasta los suaves y florales, hay algo para cada
						paladar. Explora nuestra colección y encuentra tu nuevo favorito.
					</p>
				</div>
				<div className="w-5/12">
					<img
						src={hand}
						alt=""
						className="w-[60-rem] object-contain h-fit aspect-square"
					/>
				</div>
			</div>

			<div className="grid grid-flow-row grid-cols-3 gap-5 h-fit place-content-start">
				<div className="col-span-1">
					<div className="w-full h-full">
						<img
							src={bottle_1}
							alt=""
							className="object-cover w-full h-full bg-cover"
						/>
					</div>
				</div>

				<div className="col-span-1 row-start-2">
					<div className="w-full h-full">
						<img
							src={bottle_2}
							alt=""
							className="object-cover w-full h-full bg-cover"
						/>
					</div>
				</div>

				<div className="col-start-2 row-span-2 mt-16">
					<div>
						<img src={bottle_3} alt="" className="object-contain w-full" />
					</div>
				</div>

				<div className="col-span-1 col-start-3 row-start-1 mt-32">
					<div className="w-full h-full">
						<img
							src={bottle_4}
							alt=""
							className="object-cover w-full h-full bg-cover"
						/>
					</div>
				</div>

				<div className="col-span-1 col-start-3 row-start-2">
					<div className="w-full h-full">
						<img
							src={bottle_5}
							alt=""
							className="object-cover w-full h-full bg-cover"
						/>
					</div>
				</div>

				<div className="col-span-2 row-start-3">
					<div className="w-full h-full">
						<img
							src={bottle_6}
							alt=""
							className="object-cover w-full h-full bg-contain"
						/>
					</div>
				</div>

				<div className="col-span-1 row-start-3">
					<div className="w-full h-full">
						<img
							src={bottle_7}
							alt=""
							className="object-cover w-full h-full bg-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
