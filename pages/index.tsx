import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Particles from "react-particles";
import {useCallback, useState} from "react";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import BgParticles from "@/components/BgParticles";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
        <NavBar/>
      <BgParticles />
    </div>
  )
}
