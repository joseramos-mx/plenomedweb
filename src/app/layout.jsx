import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Plenomed - Consulta de Estilo de Vida para Diabetes",
  description:
    "En Plenomed transformamos tu salud desde la raíz, con medicina del estilo de vida, ciencia de precisión y un enfoque humano.",
  keywords:
    "diabetes, consulta diabetes, bajar la glucosa, bajar la azúcar, cómo controlar la diabetes, como bajar la azúcar, como bajar de peso, como quitar la diabetes, como quitar grasa, como bajar la grasa",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
