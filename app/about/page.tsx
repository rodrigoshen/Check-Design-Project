"use client"

import Image from "next/image"
import Footer from "../components/Footer"
import Header from "../components/Header"

import { motion } from "framer-motion"


const skills = [
    {
        title : "Desenvolvedor de Software Front-End",
        text : "habilidades técnicas comferramentas e bibliotecas Front-end, como HTML, CSS, Javascript, React, Typescript, Next.js",
    },
    {
        title : "Desenvolvedor de Software Back-End",
        text : "habilidades técnicas comferramentas e bibliotecas Back-end, como Python, Flask, Django, Node.js, express.js"
    },
    {
        title : "Designer UX/UI",
        text : "habilidades técnicas com conceitos bases do UX/UI, como Grid, Tipografia, Experiência do usuário, layout, pesquisa do usuário, jornada do usuário"
    }
]

export default function AboutPage() {

    return (
        <div className="flex gap-5 w-screen justify-center items-center flex-col overflow-x-hidden">
            <div
                className="flex flex-col items-center bg-black-color w-full "
            >
                <main
                    className="flex flex-col w-[80%] pb-5"
                >
                    <Header logo="/logo/white-logo.png" logo_width={200} logo_height={200}/>
                    <div
                        className="flex flex-col pt-5 pb-10 items-center"
                    >
                    <motion.div
                        initial={{opacity : 0, x : 100}}
                        whileInView={{ opacity : 1, x : 0}}
                        transition={{ duration : 0.8, ease : "anticipate"}}
                        viewport={{ once : true, amount: 0.2}}
                    >
                        <Image 
                            className="flex items-center pt-5 pb-5 rounded-full"
                            src={"/images/my-photo.png"} alt="my-photo" width={250} height={250}
                        />
                    </motion.div>
                        <div 
                            className="flex flex-col gap-1 pt-5 pb-5"
                        >
                        <motion.div
                            initial={{opacity : 0, x : -100}}
                            whileInView={{ opacity : 1, x : 0}}
                            transition={{ duration : 1, ease : "anticipate"}}
                            viewport={{ once : true, amount : 0.2}}
                        >
                            <h1 className={`font-bold text-2xl`}>
                            Rodrigo carvalho
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{opacity : 0, x : -100}}
                            whileInView={{ opacity : 1, x : 0}}
                            transition={{ duration : 1.2, ease : "anticipate"}}
                            viewport={{ once : true, amount : 0.2}}
                        >
                            <h2 className="font-normal text-lg opacity-50">
                                Desenvolvedor de Software e Designer UX/UI
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{opacity : 0, x : -100}}
                            whileInView={{ opacity : 1, x : 0}}
                            transition={{ duration : 1.4, ease : "anticipate"}}
                            viewport={{ once : true, amount : 0.2}}
                        >
                            <p className="font-normal text-sm" 
                            >Tenho uma longa carreira na área de TI desde 2022, onde comecei minha jornada fazendo um curso simples de desenvolvedor Full Stack, embora tenham se passado mais de 4 anos acumulando experiências, minha vontade de aprender e aprimorar minhas habilidade só vem evoluindo com o tempo, estou sempre a procura de novas oportunidade e conhecimento nunca é demais, agora também atuo como Designer UX/UI, profissão essa que conquistou meu coração</p>
                        </motion.div>
                        <motion.div
                            initial={{opacity : 0, x : -100}}
                            whileInView={{ opacity : 1, x : 0}}
                            transition={{ duration : 1.6, ease : "anticipate"}}
                            viewport={{ once : true, amount : 0.2}}
                        >
                            <button className="flex items-center justify-center mt-5 text-black bg-white-color h-12 w-34 hover:bg-white-color/50 hover:text-white-color transition-all ">
                                Portfólio
                            </button>
                        </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 pb-10">
                        { skills.map( (skill) => {
                            
                           return (
                            <div
                                key={skill.title}
                            >
                                { skill.title === "Desenvolvedor de Software Back-End" ? <motion.div
                                className="flex flex-col items-center gap-2 p-4 w-60 h-92 bg-zinc-700 border-2"
                                initial={{ opacity : 0, x : 100 }}
                                whileInView={{ opacity : 1, x : 0 }}
                                transition={{ duration : 0.6, ease : "anticipate"}}
                                viewport={{ once : true, amount : 0.35}}

                                >
                                        <p  className="font-bold text-xl text-center">
                                            {skill.title}
                                        </p>
                                        <p className="font-normal text-base text-center">
                                            {skill.text}
                                        </p>
                                </motion.div> : <motion.div
                                className="flex flex-col items-center gap-2 p-4 w-60 h-92 bg-zinc-700 border-2"
                                initial={{ opacity : 0, x : -100 }}
                                whileInView={{ opacity : 1, x : 0 }}
                                transition={{ duration : 0.6, ease : "anticipate"}}
                                viewport={{ once : true, amount : 0.5}}

                                >
                                        <p  className="font-bold text-xl text-center">
                                            {skill.title}
                                        </p>
                                        <p className="font-normal text-base text-center">
                                            {skill.text}
                                        </p>
                                </motion.div>}
                            </div>
                           )
                            
                        })}
                    </div>
                </main>
            </div>
            
            <Footer logo="/logo/white-logo.png" logo_width={200} logo_height={200}/>
            <span className="flex px-8 py-4 justify-center items-center bg-black-color text-sm w-full " >
                Copyright © 2026 Todos os direitos reservados 
            </span>
        </div>
    )

}