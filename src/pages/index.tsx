import Head from 'next/head'
import Image from 'next/image'

import { Button } from '../components/DefaultButton'
import { useWindowSize } from '../hooks/useWindowSize'
import Illustration from '../assets/illustrator.svg'
import Header from '../components/Header'
import style from './home.module.scss'
import breakpoints from '../utils/breakpoints'

const Landing: React.FC = () => {

  const [screenWidth, screenHeight] = useWindowSize()

  return (
    <div className={style.container}>
      <Head>
        <title>Codehouse</title>
      </Head>
      <Header/>
      <main>
        <div>
          <h1>Get help with coding from  engineers</h1>
          <p>
            Learn how to code efficiently and create 
            apps and games that work. Consult with 
            best experts to apply skils in action.
          </p>
          {screenWidth <= breakpoints.tablet ? (null) : (
            <div>
              <Button filled value="Start learning"/>
              <Button value="Watch video"/>
            </div>
          )}
        </div>
        <aside>
          {screenWidth <= breakpoints.tablet ? (
            <section>
              <Image src={Illustration} objectFit="contain" width="900" />
              <div>
                <Button filled value="Start learning"/>
                <Button value="Watch video"/>
              </div>
            </section>
          ) : (
            <Image src={Illustration} objectFit="contain" width="900" />
          )}
        </aside>
      </main>
      
    </div>
  )
}

export default Landing