"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
    { href : "/", label : "Home"},
    { href : "/about", label : "About Me"}
];

export default function Header() {

    const pathname = usePathname();

    return (
        <header className="flex items-center w-full flex-col">
        <motion.div
            initial={{ opacity : 0, y : -100 }}
            animate={{ opacity : 1, y : 0 }}
            transition={{ duration : 0.8, ease : "easeOut" }}
        >
            <Image alt="logo_photo" src={"/logo/logo.png"} width={250} height={250}/>
        </motion.div>

        <motion.div
            initial={{ opacity : 0, x : -100 }}
            animate={{ opacity : 1, x : 0 }}
            transition={{ duration : 0.8, ease : "easeOut" }}
        >
            <nav className="flex w-[80vw] h-12 bg-white justify-around items-center">
                { links.map( (link) => {

                    const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex justify-center items-center font-bold w-full h-full ${ isActive ? "text-black-color bg-secundary-color hover:opacity-80" : "text-primary-color"} hover:text-blue-300 transition-colors`}
                        >
                            {link.label}
                        </Link>
                    )
                })}
                
            </nav>
        </motion.div>
        </header>
    )
}