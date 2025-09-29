import Link from "next/link";

export default function Navigation() {
    return(
        <div>
                  <header className="fixed top-0 z-50 w-full bg-teal-950/90 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="font-bold text-2xl text-teal-500 font-syne">
          <img
      src="/logo.svg"
      alt="Logotipo Plenomed"
      width={140}
      height={10}
      className="object-cover"
    />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="#como-funciona"
              className="text-sm font-syne text-white hover:text-teal-500 transition-colors"
            >
              Cómo Funciona
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-syne text-white hover:text-teal-500 transition-colors"
            >
              Testimonios
            </Link>
            <Link href="#preguntas" className="text-sm font-syne text-white hover:text-teal-500 transition-colors">
              Preguntas Frecuentes
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-600 hover:text-teal-500 focus:outline-none"
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu")
                if (mobileMenu) {
                  mobileMenu.classList.toggle("hidden")
                }
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="hidden md:block">
            <Link
              href="https://wa.me/6182991002?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20programas%20de%20Plenomed%20para%20el%20control%20de%20la%20diabetes.%20¿Podrían%20brindarme%20más%20información?"
              className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors"
            >
              Comenzar ahora
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-gray-100 py-2">
          <div className="container px-4">
            <nav className="flex flex-col space-y-3 py-3">
              <Link
                href="#como-funciona"
                className="text-sm font-medium text-gray-600 hover:text-teal-500 transition-colors"
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu")
                  if (mobileMenu) {
                    mobileMenu.classList.add("hidden")
                  }
                }}
              >
                Cómo Funciona
              </Link>
              <Link
                href="#testimonios"
                className="text-sm font-medium text-gray-600 hover:text-teal-500 transition-colors"
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu")
                  if (mobileMenu) {
                    mobileMenu.classList.add("hidden")
                  }
                }}
              >
                Testimonios
              </Link>
              <Link
                href="#preguntas"
                className="text-sm font-medium text-gray-600 hover:text-teal-500 transition-colors"
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu")
                  if (mobileMenu) {
                    mobileMenu.classList.add("hidden")
                  }
                }}
              >
                Preguntas Frecuentes
              </Link>
                            <Link
                href="#equipo"
                className="text-sm font-medium text-gray-600 hover:text-teal-500 transition-colors"
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu")
                  if (mobileMenu) {
                    mobileMenu.classList.add("hidden")
                  }
                }}
              >
                Equipo
              </Link>
              <Link
                href="#contacto"
                className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors inline-block w-fit"
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu")
                  if (mobileMenu) {
                    mobileMenu.classList.add("hidden")
                  }
                }}
              >
                Contactar
              </Link>
            </nav>
          </div>
        </div>
      </header>
        </div>
    );
}