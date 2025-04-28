"use client"

import { Check, Play, ArrowRight, Activity, Heart, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Bento from "@/components/Bento"
import Pilares from "@/components/pilares"
import CTA from "@/components/cta"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="">
      <Navigation/>
      </div>
      <div className=" overflow-hidden ">
        <Hero/>
      </div>
      <div>
        <CTA/>
      </div>
      <div>
        <Pilares/>
      </div>
      <div className="mt-10 p-4">
        <Bento/>
      </div>
     

      <main className="flex-1 pt-19 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#0a241f] to-[#134137]">

        {/* Testimonials */}
        <section
          id="testimonios"
          className="py-8 sm:py-12 md:py-20 bg-[#0a241f] -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#effaf5]">
              "Historias reales. Cambios reales."
            </h2>

            <div className="bg-[#134137] rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-[#1a6855] rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-[#84d1b6] font-medium text-sm sm:text-base">5.0</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base text-[#effaf5]">Calificaciones de Google</p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#164f41] rounded-lg p-6 sm:p-8 text-center">
              <button className="inline-flex items-center justify-center bg-[#2e9b7b] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-medium hover:bg-[#1f7c63] transition-colors">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Reproducir video testimonio
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="preguntas"
          className="py-8 sm:py-12 md:py-20 bg-[#134137] -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#effaf5]">
              "Lo que más nos preguntan"
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  question: "¿Necesito dejar mis medicamentos?",
                  answer:
                    "No. Los tratamientos se adaptan a tu caso. Si tu cuerpo mejora, tu médico podrá ajustar la dosis ¡hasta que no sea necesario usarlos!.",
                },
                {
                  question: "¿Cuánto dura el programa?",
                  answer: "El plan inicial es de 3 meses. Luego depende de tu progreso y tus metas de salud.",
                },
                {
                  question: "¿Puedo hacerlo si no vivo en tu ciudad?",
                  answer: "Sí. Tenemos atención digital y seguimiento personalizado en línea.",
                },
                {
                  question: "¿Esto funciona para personas mayores?",
                  answer:
                    "¡Claro! De hecho, muchas de nuestras mejoras más sorprendentes se dan en mayores de 50 años.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-[#164f41] rounded-lg p-4 sm:p-6">
                  <h3 className="flex items-start text-base sm:text-lg font-medium text-[#effaf5] mb-2">
                    <span className="text-[#84d1b6] mr-2">❓</span>
                    {item.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[#b5e5d1] ml-6">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contacto"
          className="py-8 sm:py-12 md:py-20 bg-[#0a241f] -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-[#effaf5]">
              "¿Listo para el cambio que mereces?"
            </h2>
            <p className="text-base sm:text-lg text-[#b5e5d1] mb-6 sm:mb-8 max-w-2xl mx-auto">
              Si llevas tiempo sintiéndote igual… es hora de hacer algo diferente. En Plenomed, no solo cuidamos tu
              salud. Te damos herramientas reales para vivir mejor.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-[#2e9b7b] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md text-base sm:text-xl font-medium hover:bg-[#1f7c63] transition-colors"
            >
              <span className="mr-2">💬</span> Agenda tu primera valoración
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a241f] text-white py-8 sm:py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#51b695]">Plenomed</h3>
              <p className="text-sm sm:text-base text-[#b5e5d1]">
                Transformamos tu salud desde la raíz, con medicina del estilo de vida.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#51b695]">Contacto</h3>
              <p className="text-sm sm:text-base text-[#b5e5d1]">
                info@plenomed.com
                <br />
                Tel: (123) 456-7890
              </p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#51b695]">Enlaces</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-sm sm:text-base text-[#b5e5d1]">
                <li>
                  <Link href="#como-funciona" className="hover:text-[#51b695] transition-colors">
                    Cómo Funciona
                  </Link>
                </li>
                <li>
                  <Link href="#testimonios" className="hover:text-[#51b695] transition-colors">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#preguntas" className="hover:text-[#51b695] transition-colors">
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#164f41] mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-[#84d1b6]">
            <p>© {new Date().getFullYear()} Plenomed. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
