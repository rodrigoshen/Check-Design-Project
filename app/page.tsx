"use client"

import Header from "./components/Header";
import { motion } from "framer-motion"
import SectionIntro from "./components/section/SectionIntro";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex gap-5 w-[80vw] justify-start items-start flex-col">
        <Header/>
        <motion.div
          initial={{ opacity : 0, x : -100 }}
          animate={{ opacity : 1, x : 0 }}
          transition={{ duration : 0.8, ease : "easeInOut"}}
        >
        <main>
          <section 
            className="flex pb-5 flex-col gap-2"
          >
            <h1 className="font-bold text-2xl">Bem vindo ao<br/>Check Design</h1>
            <h2 className="font-semibold text-xl opacity-50">O aplicativo de análise de <br/> screenshots de designers UX</h2>
            <p className="font-normal text-[0.75rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including.
            </p>
            <button 
              className="flex px-5 py-2 mt-5 w-40 h-12 justify-center items-center bg-secundary-color text-black-color text-[0.8rem]"
            >
              See More
            </button>
          </section>
          
        </main>
        </motion.div>      
      </div>
      <div
        className="flex pb-5 justify-center items-start flex-col bg-secundary-color mt-5" 
      >
        <div className="flex justify-center items-center">
          <SectionIntro/>
        </div>

        <motion.div
          initial={{ opacity : 0, x : -200 }}
          whileInView={{ opacity : 1, x : 0}}
          transition={{ duration : 0.6, ease : "easeOut"}}
          viewport={{ once : true, amount : 0.2 }}
        >
          <div
            className="flex flex-col"
          >
            <Image
                className="flex relative right-10 z-10"
                src={"/images/background/arm.png"} alt="photo_award_3" width={300} height={300}
            />
            <Image
                className="flex relative bottom-55 left-18 z-0"
                src={"/images/background/phone.png"} alt="photo_award_3" width={300} height={300}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity : 0, x : 100 }}
          whileInView={{ opacity : 1, x : 0 }}
          transition={{ duration : 0.6, ease : "easeOut" }}
          viewport={{ once : true, amount : 0.2 }}
        >
         <div 
          className="flex justify-center items-center mt-[-180px]"
         >
          <p
            className="text-black-color w-[80%]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including.
          </p>
         </div>
         </motion.div>
      </div>
      <Footer/>
      <span className="flex px-8 py-4 justify-center items-center bg-black-color text-sm w-full " >
        Copyright © 2026 Todos os direitos reservados 
      </span>
    </div>
  );
}
