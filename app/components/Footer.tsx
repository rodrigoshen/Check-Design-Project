"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface FooterInterface {
    logo : string
    logo_width : number
    logo_height : number
}

export default function Footer( { logo, logo_height, logo_width } : FooterInterface ) {
    return (
        <footer
            className="flex pt-10 gap-5 flex-col justify-start items-start w-[80%] bg-primary-color"
        >
        <motion.div
            initial={{ opacity : 0, x : -100 }}
            whileInView={{ opacity : 1, x : 0 }}
            transition={{ duration : 0.6, ease : "anticipate"}}
            viewport={{ once : true, amount : 0.2 }}
        >
            <div>
                <h1 className="font-bold text-2xl">
                    Rotas das Páginas
                </h1>
                <h2 className="font-semibold text-base opacity-50">
                    Se direcione para nossas outras páginas
                </h2>
            </div>
        </motion.div>
        <motion.div
            initial={{ opacity : 0, x : -100 }}
            whileInView={{ opacity : 1, x : 0 }}
            transition={{ duration : 0.7, ease : "anticipate"}}
            viewport={{ once : true, amount : 0.2 }}
        >
            <div className="flex gap-2 justify-center items-start flex-col">
                <Link className="font-bold text-xl hover:text-white-color/50 transition-all " href={"/"} >Início</Link>
                <Link className="font-bold text-xl hover:text-white-color/50 transition-all " href={"/about"} >Sobre Mim</Link>
                <Link className="font-bold text-xl hover:text-white-color/50 transition-all " href={"https://rodrigoshen.com.br"} >Meu Portfólio</Link>
            </div>
        </motion.div>
        
        <motion.div
            initial={{ opacity : 0, x : -100 }}
            whileInView={{ opacity : 1, x : 0 }}
            transition={{ duration : 0.8, ease : "anticipate"}}
            viewport={{ once : true, amount : 0.2 }}
        >
            <div>
                <h1 className="font-bold text-2xl">
                    Informações para Contato
                </h1>
                <h2 className="font-semibold text-base opacity-50">
                    Aqui está nossos meios de contato
                </h2>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity : 0, x : -100 }}
            whileInView={{ opacity : 1, x : 0 }}
            transition={{ duration : 0.9, ease : "anticipate"}}
            viewport={{ once : true, amount : 0.2 }}
        >
                <div className="flex gap-2 justify-center items-start flex-col">
                    <div className="flex gap-2 flex-row justify-center items-center text-center">
                        <Image src={"/icons/phone_icon.svg"} alt="" width={25} height={25}/>
                        <Link className="flex  font-semibold text-lg text-center hover:text-white-color/50 transition-all" href={"/"} >+55 (85) 99737-6799</Link>
                    </div>

                    <div className="flex gap-2 flex-row justify-center items-center text-center">
                        <Image src={"/icons/email_icon.svg"} alt="" width={25} height={25}/>
                        <Link className="flex  font-semibold text-lg text-center hover:text-white-color/50 transition-all" href={"/about"} >rodrigocarvalhoshen@gmail.com</Link>
                    </div>
                    
                    <div className="flex gap-2 flex-row justify-center items-center text-center">
                        <Image src={"/icons/web_icon.svg"} alt="" width={25} height={25}/>
                        <Link className="flex  font-semibold text-lg text-center hover:text-white-color/50 transition-all" href={"/about"} >Meu portfólio</Link>
                    </div>
                </div>
            </motion.div>

            <motion.div
            className="flex w-full justify-center items-center"
            initial={{ opacity : 0, x : 100 }}
            whileInView={{ opacity : 1, x : 0 }}
            transition={{ duration : 1, ease : "anticipate"}}
            viewport={{ once : true, amount : 0.2 }}
        >    
                <Image src={logo} alt="logo_image" width={logo_width} height={logo_height}/>
        </motion.div>   
        </footer>
    )
}