"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TeamMember = ({ name, role, image, bio }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden rounded-2xl group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen de fondo */}
      <div className="aspect-[3/4] relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Overlay gradiente */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#0a241f]/90 via-[#0a241f]/60 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-80"
        }`}
      ></div>

      {/* Contenido */}
      <div
        className={`absolute inset-x-0 bottom-0 p-4 sm:p-6 transition-all duration-500 ease-in-out ${
          isHovered ? "transform -translate-y-4" : ""
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-[#51b695] text-sm sm:text-base font-medium mb-2">{role}</p>

        {/* Bio que aparece en hover */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isHovered ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-white/90 text-sm">{bio}</p>
        </div>
      </div>
    </div>
  )
}

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Jesús Ramos",
      role: "Especialista en Medicina del Estilo de Vida",
      image: "/drjesus.png?height=600&width=450&text=Dra.MS",
      bio: "Con más de 15 años de experiencia, El Dr. Jesús Ramos ha ayudado a cientos de pacientes a revertir su diabetes tipo 2 a través de cambios en el estilo de vida y nutrición personalizada.",
    },
    {
      name: "Dra. Maryan Sandoval",
      role: "Médica General",
      image: "/dramaryan.png?height=600&width=450&text=Dr.CM",
      bio: "Especialista en trastornos hormonales y metabólicos. La Dra. Maryan combina la medicina convencional con enfoques integrales para lograr resultados óptimos en sus pacientes.",
    },
    {
      name: "L.N. Nancy Covarrubias",
      role: "Nutricionista Clínica",
      image: "/lnnancy.png?height=600&width=450&text=Lic.AG",
      bio: "Experta en nutrición terapéutica y planes alimentarios personalizados. Nancy se especializa en crear estrategias nutricionales que son efectivas y sostenibles a largo plazo.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#0a241f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nuestro equipo de especialistas
          </h2>
          <p className="text-[#51b695] text-xl md:text-2xl italic max-w-3xl mx-auto">
            expertos en medicina del estilo de vida
          </p>
        </div>

        {/* Contenedor de tarjetas con navegación */}
        <div className="relative max-w-6xl mx-auto bg">
          {/* Flechas de navegación */}


          {/* Grid de tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
