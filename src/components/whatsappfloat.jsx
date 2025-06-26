"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Mostrar el botón después de un pequeño delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Mostrar tooltip después de unos segundos
  useEffect(() => {
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true)
        // Ocultar tooltip después de 5 segundos
        setTimeout(() => setShowTooltip(false), 5000)
      }, 3000)

      return () => clearTimeout(tooltipTimer)
    }
  }, [isVisible])

  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890" // Reemplazar con el número real
    const message = encodeURIComponent(
      "¡Hola! Me interesa conocer más sobre los programas de Plenomed para el control de la diabetes. ¿Podrían brindarme más información?"
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  if (!isVisible) return null

  return (
    <>
      {/* Botón principal */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        <div
          className={`absolute bottom-16 right-0 mb-2 transition-all duration-300 ${
            showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg p-3 max-w-xs relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
            >
              <X size={12} />
            </button>
            <p className="text-sm text-gray-800 font-medium mb-1">¡Hola! 👋</p>
            <p className="text-xs text-gray-600">
              ¿Tienes preguntas sobre nuestros programas? Escríbenos por WhatsApp
            </p>
            {/* Flecha del tooltip */}
            <div className="absolute bottom-0 right-4 transform translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          </div>
        </div>

        {/* Botón de WhatsApp */}
        <button
          onClick={handleWhatsAppClick}
          className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
          aria-label="Contactar por WhatsApp"
        >
          {/* Efecto de ondas */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 animation-delay-1000"></div>
          
          {/* Ícono de WhatsApp */}
          <div className="relative z-10">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
            </svg>
          </div>

          {/* Badge de notificación */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce">
            1
          </div>
        </button>
      </div>

      {/* Estilos adicionales para las animaciones */}
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  )
}
