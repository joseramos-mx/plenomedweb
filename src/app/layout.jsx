// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const GA_ID = "AW-17577841108"; // o usa process.env.NEXT_PUBLIC_GA_ID

export const metadata = {
  title: "Plenomed - Consulta de Estilo de Vida para Diabetes",
  description:
    "En Plenomed transformamos tu salud desde la raíz, con medicina del estilo de vida, ciencia de precisión y un enfoque humano.",
  keywords:
    "diabetes, consulta diabetes, bajar la glucosa, bajar la azúcar, cómo controlar la diabetes, como bajar la azúcar, como bajar de peso, como quitar la diabetes, como quitar grasa, como bajar la grasa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        {/* gtag loader */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        {/* gtag init */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html> 
  );
}
