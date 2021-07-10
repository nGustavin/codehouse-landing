import Head from 'next/head'
import Image from 'next/image'

import { Button } from '../components/DefaultButton'
import Header from '../components/Header'
import style from './home.module.scss'
import Illustration from '../assets/illustrator.svg'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'

const Landing: React.FC = () => {

  const [screenWidth, screenHeight] = useWindowSize()

  
  const breakpoints = {
    mobile: 375,
    mobileL: 411,
    tablet: 768,
    laptop: 1366
  }

  return (
    <div className={style.container}>
      <Head>
        <title>Codehouse</title>
      </Head>
      <Header/>
      <main>
        <div>
          {screenWidth <= breakpoints.tablet ? null : <h1>Get help with coding from  engineers</h1>}
          <p>
            Learn how to code efficiently and create 
            apps and games that work. Consult with 
            best experts to apply skils in action.
          </p>
          <div>
            <Button filled value="Start learning"/>
            <Button value="Watch video"/>
          </div>
        </div>
        <aside>
          <Image src={Illustration} objectFit="contain" width="900" />
        </aside>
      </main>
      
    </div>
  )
}

export default Landing