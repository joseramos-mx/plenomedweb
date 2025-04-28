import { Check, Play, ArrowRight, Activity, Heart, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Bento() {
    return(
        <div>
                    {/* Hero Section - Bento Grid */}
        <section className="pb-12">
          <div className="mx-auto max-w-7xl grid gap-3 xs:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-6 grid-rows-[auto]">
            {/* Tile 1: Controla tu diabetes */}
            <div className="relative rounded-3xl overflow-hidden col-span-2 row-span-1">
  {/* Imagen de fondo */}
  <div className="absolute inset-0">
    <img
      src="/farmacia.jpg"
      alt="Fondo diabetes"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#ED1C24]/80 to-[#981217]/80"></div>
  </div>

  {/* Contenido encima */}
  <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-between h-full">
    <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
      <Activity className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
    </div>
    <div className="bg-black/80 p-4 rounded-2xl">
      <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2 font-syne">
        Controla tu diabetes
      </h3>
      <p className="text-white/80 text-xs sm:text-sm">Sin medicamentos excesivos</p>
    </div>
  </div>
</div>


            {/* Tile 2: Main Branding */}
            <div className="rounded-3xl bg-gradient-to-br from-[#F18500] to-[#BA6700] p-4 sm:p-6 col-span-2 lg:col-span-4 row-span-1 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="h-20 w-20 sm:h-10 sm:w-10 flex items-center justify-center">
                  <Image
                    src="/sticker.png"
                    alt="Plenomed Logo"
                    width={300}
                    height={110}
                    className="flex right-80 top-43"
                  />
                </div>
                <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-white flex items-center justify-center">
                  <ArrowUpRight className="h-5 w-5 sm:h-7 sm:w-7 text-[#333333]" />
                </div>
              </div>
              <div className="mt-4 sm:mt-8">
                <p className="text-white text-lg font-syne sm:text-[20px] font-serif font-light">Vive bien, vive</p>
                <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font- font-syne">plenomed</h2>
              </div>
            </div>

            {/* Tile 3: Hashtags */}
            <div className="rounded-3xl bg-gradient-to-bl from-black to-gray-700 p-4 sm:p-6 col-span-2 row-span-2 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                <div className="bg-yellow-500 text-black px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                  #bienestar
                </div>
                <div className="bg-fuchsia-400 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                  #plenitud
                </div>
                <div className="bg-green-500 text-black px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                  #salud
                </div>
                <div className="bg-orange-500 text-black px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                  #reversión
                </div>
                <div className="bg-pink-500 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                  #independencia
                </div>
              </div>
              <h3 className="text-white text-7xl sm:text-7xl font-light mt-4 sm:mt-8 font-serif">
                Estilo
                <br />
                de vida
              </h3>
            </div>

            {/* Tile 4: Image */}
            <div className="rounded-3xl bg-[#164f41] col-span-2 row-span-2 relative aspect-square">
              <Image
                src="/image.jpg?height=400&width=400"
                alt="Estilo de vida saludable"
                fill
                className="object-cover rounded-3xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Tile 5: CTA Button */}
            <div className="rounded-3xl bg-gradient-to-bl from-indigo-950 to-blue-400 p-4 sm:p-6 col-span-1 lg:col-span-2 flex items-center justify-center">
              <Link
                href="#contacto"
                className="bg-green-500 text-white hover:bg-yellow-400 transition-colors hover:text-[#423706] px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-xl font-bold flex items-center whitespace-nowrap font-bold font-syne"
              >
                COMENZAR AHORA <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>

            {/* Tile 6: Evidence */}
            <div className="rounded-3xl bg-fuchsia-500 p-4 sm:p-6 col-span-1 lg:col-span-2 flex flex-col justify-center relative overflow-hidden">
  {/* Imagen en la mitad derecha */}
  <div className="absolute inset-y-0 right-0 w-1/2">
    <img
      src="/science.jpg"
      alt="Detalle evidencia"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Contenido encima */}
  <div className="relative z-10">
    <h2 className="text-white text-3xl sm:text-4xl font-bold">100%</h2>
    <p className="text-[#effaf5] text-xs sm:text-xl mt-1 sm:mt-2">
      basado en<br />
      evidencia<br />
      científica
    </p>
  </div>
</div>
          </div>
        </section>
        </div>
    );
}