import Head from 'next/head'
import Image from 'next/image'

import { Button } from '../components/DefaultButton'
import Header from '../components/Header'
import style from './home.module.scss'
import Illustration from '../assets/illustrator.svg'

const Landing: React.FC = () => {

  const pageWidth  = document.documentElement.scrollWidth;
  const pageHeight = document.documentElement.scrollHeight;

  console.log(pageHeight, pageWidth)

  return (
    <div className={style.container}>
      <Head>
        <title>Codehouse</title>
      </Head>
      <Header/>
      <main>
        <div>
          {/* {screenWidth < 1700 ? null :  <h1>Get help with coding from  engineers</h1>} */}
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