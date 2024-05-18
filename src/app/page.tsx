"use client"
import { Canvas } from "@react-three/fiber";
import {Suspense, useState} from "react"
import Loading from "./laoding";
import Universe from "@/models/Univers"
import { Center } from "@react-three/drei";
import Link from "next/link";
import { motion } from "framer-motion";
import LinkIcon from "@/components/Icons/LinkIcon";
import {Shapes} from "@/components/Shapes"
const quoto = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  },
};

export default function Home() {
  const [isRotating,setIsRotating] = useState(false);
  const [currentStage,setCurrentStage]=useState(0);

  return (
   <section className="w-full min-h-screen  relative bg-black">
    <Canvas 
    className={`w-full h-screen bg-transparent hidden md:block ${isRotating ? "cursor-grabbing":"cursor-grab"}`}
    camera={{near:0.1, far:1000}}
    style={{height:'100vh'}}
    >

      <Suspense fallback={<Loading/>}>
      <Center>
        <directionalLight/>
        <ambientLight/>
        <pointLight/>
        <spotLight/>
        <hemisphereLight/>

        <Universe isRotating = {isRotating}  setIsRotating = {setIsRotating} setCurrentStage={setCurrentStage}/>
      </Center>
      </Suspense>
    </Canvas>

    <div className="h-screen max-w-screen-xl mx-auto px-4 py-3 mt-5 md:mt-0">
        <div className=" flex flex-col md:flex-row  h-full gap-5 md:gap-0">
          <div className="flex-1 flex flex-col  justify-center">
            <h1 className="text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter text-slate-300">Sumit</h1>
            <h1 className="text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter text-slate-500">Mahour</h1>
            <p className=" bg-gradient-to-tr from-[#6C22A6] via-[#6962AD]  to-[#83C0C1] block w-max  bg-clip-text font-bold text-2xl uppercase tracking-[.2em] text-transparent md:text-4xl opacity-100">Full-Stack Developer</p>
          </div>

          <div className="flex-1  flex justify-center px-4 sm:px-6 md:px-8 flex-col">
            <Shapes/>
          </div>
        </div>
      </div>
   </section>
  );
}
