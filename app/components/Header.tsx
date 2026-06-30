"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
    { href : "/", label : "Home"},
    { href : "/about", label : "About Me"}
];

interface HeaderInterface {
    logo : string
    logo_width : number
    logo_height : number
}

export default function Header( { logo, logo_height, logo_width } : HeaderInterface) {

    const pathname = usePathname();

    return (
        <header className={`flex ${ pathname === "/about" ? "gap-5" : "gap-0"} items-center w-full flex-col`}>
        <motion.div
            initial={{ opacity : 0, y : -100 }}
            animate={{ opacity : 1, y : 0 }}
            transition={{ duration : 0.8, ease : "anticipate" }}
        >
            <Image alt="logo_photo" src={logo} width={logo_width} height={logo_height}/>
        </motion.div>

        <motion.div
            initial={{ opacity : 0, x : -100 }}
            animate={{ opacity : 1, x : 0 }}
            transition={{ duration : 0.8, ease : "anticipate" }}
        >
            <nav className="flex w-[80vw] h-12 bg-white justify-around items-center">
                { links.map( (link) => {

                    const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                    return (
                        <div
                            key={link.href}
                            className="flex flex-row w-full h-full"
                        >
                            { link.href === "/about" ? <Link
                            href={link.href}
                            className={`flex justify-center items-center font-bold w-full h-full ${ isActive ? "text-white-color bg-primary-color hover:opacity-80" : "text-primary-color"} hover:text-blue-300 transition-colors`}
                        >
                            {link.label}
                        </Link> : <Link
                            href={link.href}
                            className={`flex justify-center items-center font-bold w-full h-full ${ isActive ? "text-black-color bg-secundary-color hover:opacity-80" : "text-primary-color"} hover:text-blue-300 transition-colors`}
                        >
                            {link.label}
                        </Link>  }
                        </div>
                    )
                })}
                
            </nav>
        </motion.div>
        </header>
    )
}