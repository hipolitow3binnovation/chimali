import React from "react";
import bg_hero from "@/assets/bg-hero.webp";
import bg_about from "@/assets/bg-about.webp";
import logo from "@/assets/logo.svg";
import isotipo from "@/assets/isotipo.svg";
import hand from "@/assets/hand.webp";
import bottle_1 from "@/assets/bottle-1.webp";
import bottle_2 from "@/assets/bottle-2.webp";
import bottle_3 from "@/assets/bottle-3.webp";
import bottle_4 from "@/assets/bottle-4.webp";
import bottle_5 from "@/assets/bottle-5.webp";
import bottle_6 from "@/assets/bottle-6.webp";
import bottle_7 from "@/assets/bottle-7.webp";
import bg_cta from "@/assets/bg-cta.webp";
import lemon from "@/assets/lemon.webp";
import water from "@/assets/water.webp";
import contact from "@/assets/bg-contact.webp";

function App() {
  return (
    <>
      <div className="backdrop-blur-md bg-white/30 fixed top-0 z-10 w-full">
        <nav className="container mx-auto flex flex-row justify-between py-7 items-center">
          <div>
            <img src={isotipo} alt="" />
          </div>

          <ul className="flex flex-row justify-between gap-6 font-sans font-medium text-sm text-[#4A4242] uppercase h-full items-center">
            <li>
              <a href="">Quienes somos</a>
            </li>

            <li>
              <a href="">Nuestros Productos</a>
            </li>

            <li>
              <a href="">Contacto</a>
            </li>

            <li>
            <button className="border border-[#956851] bg-transparent text-[#956851] font-sans text-sm font-semibold py-2 px-4">
                    Explorar Ahora
                  </button>
            </li>
          </ul>
        </nav>
      </div>

      <section className="h-screen relative">
        <img
          src={bg_hero}
          alt=""
          className="w-full bg-no-repeat bg-cover object-cover object-center absolute h-full"
        />
        <div className="flex h-full items-center justify-center relative">
          <div className="container">
            <div className="w-1/2 flex flex-col gap-4">
              <h1 className="text-6xl text-[#391F0F] tracking-wider font-serif font-semibold">
                Mezcal Chimali, <br /> el sabor ancestral <br /> de{" "}
                <span className="text-[#956851]">Oaxaca</span>
              </h1>
              <div className="w-full lg:w-3/4 flex flex-col gap-5">
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

      <section className="h-screen relative">
        <img
          src={bg_about}
          alt=""
          className="w-full bg-no-repeat bg-cover object-cover object-center absolute h-full"
        />
        <div className="flex h-full items-center justify-center relative">
          <div className="w-full">
            <div className="w-1/2 ml-auto h-screen flex justify-center items-center backdrop-blur-sm bg-[#262626]/10">
              <div className="flex flex-col gap-4 px-14">
                <img src={logo} alt="" className="w-32 h-fit object-contain" />
                <h2 className="text-4xl text-white tracking-wider font-serif font-semibold uppercase">
                  Nuestra Historia: La Tradición que nos Define
                </h2>
                <div className="w-full flex flex-col gap-5">
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
      </section>

      <section className="h-fit bg-[url('./assets/bg-texture.webp')] relative bg-no-repeat bg-cover">
        <div className="absolute bg-[url('./assets/pattern-dark.svg')] w-full h-16 bg-repeat-x bg-contain"></div>
        <div className="flex flex-row justify-end items-center pt-6">
          <div className="w-5/12 flex flex-col gap-4">
            <h2 className="text-4xl text-white tracking-wider font-serif font-semibold uppercase">
              Explora Nuestra Colección
            </h2>
            <p className="text-[#C8C8C8] text-lg font-normal font-sans leading-7">
              Sumérgete en el mundo de Mezcal Chimali y descubre una gama
              diversa de mezcales, cada uno elaborado con pasión y dedicación.
              Desde los robustos y ahumados hasta los suaves y florales, hay
              algo para cada paladar. Explora nuestra colección y encuentra tu
              nuevo favorito.
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
            <div className="h-full w-full">
              <img
                src={bottle_1}
                alt=""
                className="w-full h-full bg-cover object-cover"
              />
            </div>
          </div>

          <div className="row-start-2 col-span-1">
            <div className="h-full w-full">
              <img
                src={bottle_2}
                alt=""
                className="w-full h-full bg-cover object-cover"
              />
            </div>
          </div>

          <div className="col-start-2 row-span-2 mt-16">
            <div>
              <img src={bottle_3} alt="" className="w-full object-contain" />
            </div>
          </div>

          <div className="row-start-1 col-start-3 col-span-1 mt-32">
            <div className="h-full w-full">
              <img
                src={bottle_4}
                alt=""
                className="w-full h-full bg-cover object-cover"
              />
            </div>
          </div>

          <div className="row-start-2 col-start-3 col-span-1">
            <div className="h-full w-full">
              <img
                src={bottle_5}
                alt=""
                className="w-full h-full bg-cover object-cover"
              />
            </div>
          </div>

          <div className="row-start-3 col-span-2">
            <div className="h-full w-full">
              <img
                src={bottle_6}
                alt=""
                className="w-full h-full bg-contain object-cover"
              />
            </div>
          </div>

          <div className="row-start-3 col-span-1">
            <div className="h-full w-full">
              <img
                src={bottle_7}
                alt=""
                className="w-full h-full bg-contain object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen relative">
        <img
          src={bg_cta}
          alt=""
          className="w-full bg-no-repeat bg-cover object-cover object-center absolute h-full"
        />
        <div className="flex h-full items-center justify-center">
          <div className="container">
            <div className="w-1/2 ml-auto px-16 py-24 h-fit relative backdrop-blur-3xl bg-[#261C13]/30">
              <div className="flex flex-col gap-5 px-14">
                <h2 className="text-4xl text-white tracking-wider font-serif font-semibold uppercase">
                  ¡Descubre el sabor auténtico de Oaxaca con Mezcal Chimali!
                </h2>
                <p className="text-[#C8C8C8] text-lg font-normal font-sans leading-7">
                  Sumérgete en la rica tradición del mezcal artesanal. ¡Explora
                  nuestra colección hoy mismo!
                </p>
                <div>
                  <button className="border border-white bg-transparent text-white font-sans text-sm font-semibold py-2 px-4">
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

      <section className="h-fit flex flex-row bg-white">
        <div className="w-1/2 relative">
          <div className="absolute top-0 left-0 bg-[url('./assets/pattern-dark.svg')] w-full h-16 bg-repeat-x bg-fill"></div>
          <div className="flex flex-row justify-center items-center h-full">
            <div className="mx-24 flex flex-col gap-4 my-16">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl text-[363636] tracking-wider font-serif font-semibold uppercase">
                  Contáctanos
                </h2>
                <p className="text-[#7B7B7B] text-lg font-normal font-sans leading-7">
                  ¿Tienes alguna pregunta o comentario? Estamos aquí para
                  escucharte. Completa el formulario a continuación y nos
                  pondremos en contacto contigo lo antes posible. ¡Esperamos
                  saber de ti!
                </p>
              </div>
              <form className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Escribe tu nombre"
                  />
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
          <img src={contact} alt="" className="object-cover h-full w-full" />
        </div>
      </section>

      <footer className="bg-[url('./assets/footer.webp')] relative bg-no-repeat bg-cover w-full">
        <div className="container mx-auto">
          <div className="w-1/2 flex flex-col justify-center items-center gap-8 pt-8 pb-24">
            <img src={logo} alt="" className="w-20" />

            <div className="flex flex-col gap-10">
              <div className="flex flex-row gap-4 px-8">
                <a
                  href=""
                  className="font-sans font-medium text-xs text-white uppercase flex gap-2"
                >
                  <ion-icon name="mail-outline"></ion-icon>
                  <span>contacto@chimalli.com</span>
                </a>

                <a
                  href=""
                  className="font-sans font-medium text-xs text-white uppercase flex gap-2"
                >
                  <ion-icon name="call-outline"></ion-icon>
                  <span>961 234 00 88 11</span>
                </a>
              </div>

              <hr className="border border-white w-full" />

              <div className="flex justify-center gap-6">
                <a href="">
                  <ion-icon name="logo-instagram" size="large"></ion-icon>
                </a>

                <a href="">
                  <ion-icon name="logo-facebook" size="large"></ion-icon>
                </a>

                <a href="">
                  {" "}
                  <ion-icon name="logo-youtube" size="large"></ion-icon>
                </a>
              </div>

              <div className="font-sans font-medium text-xs text-white uppercase text-center flex flex-col gap-4">
                <p>~ OAXACA DE JUÁREZ, OAXACA ~ </p>

                <a href="">POLÍTICA DE PRIVACIDAD</a>

                <p>Todos los derechos reservados ©</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
lemon;
