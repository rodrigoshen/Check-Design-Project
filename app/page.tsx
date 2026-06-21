"use client"

import Header from "./components/Header";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex gap-5 w-[80vw] justify-start items-start flex-col">
      <Header/>
      <motion.div
        initial={{ opacity : 0, y : 100 }}
        animate={{ opacity : 1, y : 0 }}
        transition={{ duration : 0.8, ease : "easeInOut"}}
      >
      <main>
        <section 
          className="flex flex-col gap-2"
        >
          <h1 className="font-bold text-2xl">Bem vindo ao<br/>Check Design</h1>
          <h2 className="font-semibold text-xl opacity-50">O aplicativo de análise de <br/> screenshots de designers UX</h2>
          <p className="font-normal text-[0.50rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including.
          </p>
          <button 
            className="flex px-5 py-2 w-26 h-9 justify-center items-center bg-secundary-color text-black-color text-[0.5rem]"
          >
            See More
          </button>
        </section>
      </main>
        
      </motion.div>
      
    </div>
    
  );
}
