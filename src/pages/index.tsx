import Head from 'next/head'
import Image from 'next/image'

import { Button } from '../components/DefaultButton'
import Header from '../components/Header'
import style from './home.module.scss'
import Illustration from '../assets/illustrator.svg'

const Landing: React.FC = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>Codehouse</title>
      </Head>
      <Header/>
      <main>
        <div>
          <h1>Get help with <br/> coding from <br/> engineers</h1>
          <p>
            Learn how to code efficiently and create <br/>
            apps and games that work. Consult with <br/>
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