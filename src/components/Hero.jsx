import { Button } from "./ui/button";
import Link from "next/link";


const phoneNumber = "6182991002" // Reemplazar con el número real
const message = encodeURIComponent(
      "¡Hola! Me interesa conocer más sobre los programas de Plenomed para el control de la diabetes. ¿Podrían brindarme más información?"
    )
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`


export default function Hero() {
  return (
    <div
      className="w-screen h-screen bg-[url('/fondo.webp')] bg-cover bg-top px-4 sm:px-6 lg:px-30 text-[#0a241f] flex flex-col items-start justify-center text-left"
    >
        
      <div className="bg-white backdrop-blur-sm p-10 rounded-xl max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-syne leading-tight">
          Pon en <br />remisión <br /><span className="font-bold">tu diabetes.</span>
        </h1>
        <p className="flex flex-row gap-x-2 justify-start items-center mt-4">
          Vive en modo
          <span>
            <img
              src="plenomed.svg"
              alt="logotipo plenomed"
              height={5}
              width={100}
              className="object-cover"
            />
          </span>
        </p>
        <p className="text-sm mt-5">
          No es solo ponerla en control es controlarla sin tomar medicamentos. 
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer">
          <Button>Quiero comenzar</Button>
          </Link>
          <Link
            href="#como-funciona">
              <Button className="bg-white text-black border border-[#0a241f] hover:bg-[#0a241f] hover:text-white">
            ¿Cómo funciona?
          </Button>
          </Link>
          
          <div className="mr-2 absolute -top-4 -right-4 bg-teal-600 text-white rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 flex items-center justify-center text-sm sm:text-base md:text-lg font-bold">
                    <span>¡ÚNETE!</span>
                  </div>
        </div>
      </div>
    </div>
  );
}
