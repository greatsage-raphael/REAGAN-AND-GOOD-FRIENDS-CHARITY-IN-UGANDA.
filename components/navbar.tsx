import Link from "next/link"
import { SVGProps } from "react"

export default function Navbar() {
    return (
        <header className="flex items-center h-16 px-4 border-b bg-white shadow-sm sticky">
        <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-red-600">REAGAN & GOOD FRIENDS CHARITY</Link>
        <nav className="ml-auto font-medium">
          <Link className="mx-2 text-gray-500 hover:text-gray-900" href="#about">
            About
          </Link>
          <Link className="mx-2 text-gray-500 hover:text-gray-900" href="#projects">
            Projects
          </Link>
        </nav>
      </header>
    )
  }