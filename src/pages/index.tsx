import Head from 'next/head'

import style from './home.module.scss'

const Landing: React.FC = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>Codehouse</title>
      </Head>
      <h1>js</h1>
    </div>
  )
}

export default Landing