"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

export default function TestimonialVideo() {
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  const handlePlayVideo = () => {
    setIsVideoVisible(true)
  }

  const handleCloseVideo = () => {
    setIsVideoVisible(false)
  }

  return (
    <section id="testimonios" className="py-8 sm:py-12 md:py-20">
      
    <div className="relative">
      {!isVideoVisible ? (
        // Vista previa del video
        <div className="bg-[#164f41] rounded-xl overflow-hidden group cursor-pointer" onClick={handlePlayVideo}>
          <div className="relative aspect-video bg-gradient-to-br from-[#2e9b7b] to-[#164f41] flex items-center justify-center">
            {/* Thumbnail del video */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Botón de play central */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <Play className="h-12 w-12 text-white fill-white" />
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 text-center">Testimonio: Caso de Éxito</h3>
              <p className="text-white/80 text-sm sm:text-base text-center max-w-md">
                Descubre cómo el Sr. Alonso logró revertir su diabetes tipo 2 y bajar su HaB1c de 11 a 5 en solo 3 meses
              </p>
            </div>

            {/* Decoración */}
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              NUEVO
            </div>
          </div>
        </div>
      ) : (
        // Video player
        <div className="relative bg-[#164f41] rounded-xl overflow-hidden">
          {/* Botón de cerrar */}
          <button
            onClick={handleCloseVideo}
            className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Video responsive */}
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/55HB5_DEPEs?autoplay=1"
              title="Testimonio: CASO de ÉXITO | REVERSIÓN de la DIABETES"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Información adicional debajo del video */}
          <div className="p-4 sm:p-6">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-2">"Mi vida cambió completamente"</h3>
            <p className="text-[#b5e5d1] text-sm sm:text-base">
              Alonso, 52 años - Logró revertir su diabetes tipo 2 en 3 meses siguiendo nuestro programa
              personalizado.
            </p>
          </div>
        </div>
      )}
    </div>
    </section>
  )
}