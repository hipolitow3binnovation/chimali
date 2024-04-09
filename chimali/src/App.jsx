import React from "react";
import bg_banner from "@/assets/bg-banner.svg";

function App() {
  return (
    <>
      <section className="h-screen relative">
        <img
          src={bg_banner}
          alt=""
          className="w-full bg-no-repeat bg-cover object-cover object-center absolute h-full"
        />
        <div class="flex h-full items-center justify-center relative">
          <div className="container">
            <div className="w-1/2 flex flex-col gap-4">
              <h1 class="text-6xl text-[#391F0F] tracking-wider font-serif font-semibold">
                Mezcal Chimali, <br /> el sabor ancestral <br /> de{" "}
                <span className="text-[#956851]">Oaxaca</span>
              </h1>
              <div className="w-full lg:w-3/4 flex flex-col gap-5">
                <p className="text-[#888888] text-base font-light font-sans">
                  Descubre el auténtico sabor de Oaxaca con nuestra selección
                  artesanal de mezcales. Sumérgete en la riqueza de nuestra
                  cultura y tradición con cada sorbo.
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
}

export default App;
