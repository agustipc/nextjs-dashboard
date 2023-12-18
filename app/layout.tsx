import { montserrat } from './ui/fonts'
import './ui/global.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased min-h-screen relative`}
      >
        {children}
        {/* <footer className="my-10 flex justify-center items-center  absolute bottom-0 w-screen">
          Hecho con ❤️ por AgustiPC con Next.js
        </footer> */}
      </body>
    </html>
  )
}
