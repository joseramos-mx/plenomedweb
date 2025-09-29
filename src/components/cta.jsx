"use client"

import { ArrowRight, Zap, Activity, Sparkles, Check } from 'lucide-react'
import { motion } from "framer-motion"
import Link from "next/link"

export default function CTA() {
  return (
    <section id="como-funciona" className="px-4 py-16 md:py-24 relative overflow-hidden bg-white]">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a241f] to-[#134137] -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#2e9b7b] blur-[80px]"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#51b695] blur-[100px]"></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-10 right-10 h-20 w-20 border border-[#51b695]/20 rounded-full"></div>
      <div className="absolute bottom-10 left-10 h-40 w-40 border border-[#51b695]/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 h-4 w-4 bg-[#51b695]/30 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 h-6 w-6 bg-[#51b695]/20 rounded-full"></div>

      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center relative z-10">
        {/* Encabezado con icono */}
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-12 w-12 rounded-full bg-[#2e9b7b]/20 flex items-center justify-center mr-3">
            <Sparkles className="h-6 w-6 text-[#51b695]" />
          </div>
          <h2 className="text-sm sm:text-2xl md:text-xl font-bold text-white">¿CÓMO FUNCIONA?</h2>
        </div>

        {/* Título principal */}
        <h3 className="text-xl sm:text-xl md:text-xl lg:text-5xl font-bold mb-6 text-[#0a241f] leading-tight">
          La medicina moderna NO te está fallando.<span className=" text-teal-400">solo está incompleta.</span>
          
        </h3>

        {/* Tarjeta con contenido */}
        <div className="bg-[#1a6855] backdrop-blur-sm rounded-2xl p-10 md:p-8 mb-8 shadow-xl font-syne">
          <p className="text-base sm:text-lg text-gray-100 mb-6 leading-relaxed">
            La mayoría de los tratamientos tradicionales se enfocan en reducir síntomas, pero no en eliminar la causa de raíz.
            En Plenomed trabajamos contigo para revertir Diabetes, Obesidad, Hipertensión, colesterol alto y otras enfermedades
            crónicas así como prevenir complicaciones, con herramientas científicas que transforman tu estilo de vida.
          </p>

          {/* Características destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center p-3 bg-[#164f41] rounded-lg">
              <Activity className="h-5 w-5 text-[#51b695] mr-2 flex-shrink-0" />
              <span className="text-sm text-white">Medicina de precisión</span>
            </div>
            <div className="flex items-center p-3 bg-[#164f41] rounded-lg">
              <Zap className="h-5 w-5 text-[#51b695] mr-2 flex-shrink-0" />
              <span className="text-sm text-white">Resultados medibles</span>
            </div>
            <div className="flex items-center p-3 bg-[#164f41] rounded-lg">
              <Sparkles className="h-5 w-5 text-[#51b695] mr-2 flex-shrink-0" />
              <span className="text-sm text-white">Enfoque personalizado</span>
            </div>
          </div>

          {/* Tabla de pasos */}
          <div className="overflow-x-auto ">
            <table className="table-auto w-full text-left text-white text-sm">
              <thead>
                <tr className="border-b border-[#164f41] ">
                  <th className="pb-2 pr-10">Paso</th>
                  <th className="pb-2">Qué hacemos</th>
                  <th className="pb-2">Por qué lo hacemos</th>
                </tr>
              </thead>
              <tbody className="text-">
                <tr className="border-b border-[#164f41]">
                  <td className="py-2">1️⃣</td>
                  <td className="py-2">Valoración integral</td>
                  <td className="py-2">Entendemos tu cuerpo, historia y objetivos.</td>
                </tr>
                <tr className="border-b border-[#164f41]">
                  <td className="py-2">2️⃣</td>
                  <td className="py-2">Estudios y análisis</td>
                  <td className="py-2">Usamos ciencia real para ver cómo estás por dentro.</td>
                </tr>
                <tr className="border-b border-[#164f41]">
                  <td className="py-2">3️⃣</td>
                  <td className="py-2">Plan personalizado</td>
                  <td className="py-2">Alimentación, sueño, ejercicio, emociones. Todo adaptado a ti.</td>
                </tr>
                <tr className="border-b border-[#164f41]">
                  <td className="py-2">4️⃣</td>
                  <td className="py-2">Acompañamiento constante</td>
                  <td className="py-2">No estás solo. Estamos contigo paso a paso.</td>
                </tr>
                <tr>
                  <td className="py-2">5️⃣</td>
                  <td className="py-2">Resultados medibles</td>
                  <td className="py-2">Glucosa, peso, energía, bienestar. Lo ves. Lo vives.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Botón CTA */}
          <div className="mt-8 text-center">
            <Link
              href="https://wa.me/6182991002?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20programas%20de%20Plenomed%20para%20el%20control%20de%20la%20diabetes.%20¿Podrían%20brindarme%20más%20información?"
              className="inline-flex items-center justify-center bg-white text-[#134137] hover:bg-[#51b695] px-6 py-3 rounded-full text-lg font-medium transition-colors"
            >
              <Check className="mr-2 h-5 w-5" /> Quiero comenzar
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
