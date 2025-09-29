"use client"

import { Check, Play, ArrowRight, Activity, Heart, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Bento from "@/components/Bento"
import Pilares from "@/components/pilares"
import CTA from "@/components/cta"
import TeamSection from "@/components/team"
import TestimonialVideo from "@/components/testimonial"
import WhatsAppFloat from "@/components/whatsappfloat"

const phoneNumber = "6182991002" // Reemplazar con el número real
const message = encodeURIComponent(
      "¡Hola! Me interesa conocer más sobre los programas de Plenomed para el control de la diabetes. ¿Podrían brindarme más información?"
    )
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="">
      <Navigation/>
      </div>4
      <div className=" overflow-hidden ">
        <Hero/>
      </div>
      <div>
        <CTA/>
      </div>
      <div>
        <Pilares/>
      </div>

      <div>
        <TeamSection/>
      </div>

      <main className="flex-1 pt-19 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#0a241f] to-[#134137]">
        <div className="pb-10 w-full max-w-4xl mx-auto space-y-10">
          <TestimonialVideo/>        
          
       {/* FAQ */}
        </div>
        <section
          id="preguntas"
          className="py-8 sm:py-12 md:py-20 bg-white -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#134137]">
              Lo que más nos preguntan
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
              ¿Listo para el cambio que mereces?
            </h2>
            <p className="text-base sm:text-lg text-[#b5e5d1] mb-6 sm:mb-8 max-w-2xl mx-auto">
              Si llevas tiempo sintiéndote igual… es hora de hacer algo diferente. En Plenomed, no solo cuidamos tu
              salud. Te damos herramientas reales para vivir mejor.
            </p>

            {/* Botón */}
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
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
                dr.jesusramos@plenomed.com.mx
                <br />
                Tel: (618) 299-1002
              </p>
            </div>
          </div>
          <div className="border-t border-[#164f41] mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-[#84d1b6]">
            <p>© {new Date().getFullYear()} Plenomed. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <WhatsAppFloat />
    </div>
  )
}
