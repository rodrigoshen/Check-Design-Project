"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionIntro() {

    return (
        <section
            className="flex pt-5 justify-center items-start flex-col bg-secundary-color w-[80%] "
        >
            <motion.div
                initial={{ opacity : 0, x : 100 }}
                whileInView={{ opacity : 1, x : 0}}
                transition={{ duration : 0.6, ease : "easeOut"}}
                viewport={{ once : true, amount : 0.2}}
            >
                <h1 className="font-bold text-2xl text-black-color">
                    Features de nossa ferramenta 
                </h1>
                <h2 className="font-semibold text-base text-black-color opacity-50">
                    Alguns dos problemas aos quais nossa IA resolve para UX
                </h2>
            </motion.div>
            <div
                className=""
            >
                <motion.div
                    initial={{ opacity : 0, x : -100 }}
                    whileInView={{ opacity : 1, x : 0}}
                    transition={{ duration : 0.6, ease : "easeOut"}}
                    viewport={{ once : true, amount : 0.2}}
                >
                    <div
                        className="flex flex-row items-center"
                    >
                        <Image
                        src={"/images/award/award_1.png"} alt="photo_award_1" width={100} height={100}/>
                        <p
                            className="text-black-color opacity-50"
                        >Análise de erros de layout do design</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity : 0, x : -150 }}
                    whileInView={{ opacity : 1, x : 0}}
                    transition={{ duration : 0.8, ease : "easeOut"}}
                    viewport={{ once : true, amount : 0.2}}
                >
                    <div
                        className="flex flex-row items-center"
                    >
                        <Image
                        src={"/images/award/award_2.png"} alt="photo_award_2" width={100} height={100}/>
                        <p
                            className="text-black-color opacity-50"
                        >Sugestão de melhorias de design </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity : 0, x : -200 }}
                    whileInView={{ opacity : 1, x : 0}}
                    transition={{ duration : 0.9, ease : "easeOut"}}
                    viewport={{ once : true, amount : 0.2}}
                >
                    <div
                        className="flex flex-row items-center"
                    >
                        <Image
                        src={"/images/award/award_3.png"} alt="photo_award_3" width={100} height={100}/>
                        <p
                            className="text-black-color opacity-50"
                        >Análise de experiência de usuário adequada</p>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity : 0, x : -200 }}
                whileInView={{ opacity : 1, x : 0 }}
                transition={{ duration : 0.8, ease : "easeOut"}}
                viewport={{ once : true, amount : 0.2}}
            >
            <div>
                <h1
                    className="font-bold text-2xl text-black-color"
                >
                    Como utilizar nossa ferramenta
                </h1>
                <h2
                    className="font-semibold text-base text-black-color opacity-50"
                >
                    Sempre importante estar atualizado em como usar uma boa ferramenta
                </h2>
            </div>
            </motion.div>
        </section>
    )
}