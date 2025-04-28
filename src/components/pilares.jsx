const pilares = [
    {
      titulo: "Actividad Física",
      imagen: "/actividad.jpg",
    },
    {
      titulo: "Nutrición",
      imagen: "/nutricion.jpg",
    },
    {
      titulo: "Estrés",
      imagen: "/estres.jpg",
    },
    {
      titulo: "Conexión Social",
      imagen: "/social.jpg",
    },
    {
      titulo: "Sueño Reparador",
      imagen: "/sueno.jpg",
    },
    {
      titulo: "Sustancias de Riesgo",
      imagen: "/sustancias.jpg",
    },
  ];
  
  export default function Pilares() {
    return (
      <section className="px-4 py-7">
        <h2 className="text-4xl font-syne font-bold text-center text-black">Los 6 pilares del estilo de vida</h2>
        <p className="text-gray-600 text-center mb-10 leading-10">Base de una salud integral y duradera.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {pilares.map((pilar, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <h3 className="text-lg font-serif text-center text-black">{pilar.titulo}</h3>
              <div className="w-full aspect-[2/3] overflow-hidden rounded-lg">
                <img
                  src={pilar.imagen}
                  alt={pilar.titulo}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  