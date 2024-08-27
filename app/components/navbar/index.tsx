'use client'

import Link from "next/link"
import Logo from "../ui/logo"
import GitHubLink from "../ui/githubLink"
import { useEffect, useState } from "react"
import { useAnimate } from "framer-motion"
import { svg } from "../svg"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
]

const Navbar = () => {
    const [navOpenOnMobile, setNavOpenOnMobile] = useState(false)
    const [scope, animate] = useAnimate()
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        if (navOpenOnMobile) {
            animate(scope.current, { x: 0 })
            animate("#close_nav", { scale: 1 })
        } else {
            animate(scope.current, { x: 500 })
            animate("#close_nav", { scale: 0 })
        }
    }, [navOpenOnMobile])

    useEffect(() => {
        window.addEventListener("scroll", () => setScrollY(window.scrollY))
    }, [scrollY])

    return (
        <nav className={`fixed top-0 text-white flex justify-between items-center w-screen px-10 py-3 ${scrollY > 0 ? "bg-blue-200/20 backdrop-blur-md" : "bg-transparent"} transition-all duration-500`}>
            <Logo />
            {/* Desktop Link */}
            <div className="hidden md:flex items-center">
                <ul className="flex items-center gap-8 mr-24">
                    {navLinks.map((link, idx) => (
                        <li key={idx}>
                            <Link className="hover:text-blue-300 transition-all" href={link.href}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <GitHubLink />
            </div>
            {/* Mobile Links */}
            {!navOpenOnMobile && <button className="md:hidden" onClick={() => setNavOpenOnMobile(true)}>
                {svg.openNavSvg()}
            </button>}
            <div className="md:hidden flex flex-col px-4 justify-center gap-5 bg-blue-200/20 backdrop-blur-md absolute right-0 top-0 h-screen w-[80%] shadow-2xl z-50" ref={scope}>
                <ul className="flex flex-col gap-6">
                    {navLinks.map((link, idx) => (
                        <Link key={idx} href={link.href}>
                            {link.name}
                        </Link>
                    ))}
                </ul>
                <GitHubLink />
                <button id="close_nav" onClick={() => setNavOpenOnMobile(false)}>
                    {svg.closeNavSvg()}
                </button>
            </div>
        </nav>
    )
}

export default Navbar