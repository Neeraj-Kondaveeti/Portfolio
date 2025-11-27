
import Nav from "./components/nav/nav";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  title: "Neeraj Kondaveeti | Software Engineer",
  description: "Full Stack Developer specializing in React, Node.js, and Cloud Architecture",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  )
}

