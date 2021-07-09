import Image from 'next/image'

import {Button} from '../DefaultButton/index'
import Logo from '../../assets/Logo.svg'
import style from './header.module.scss'

const Header: React.FC = () => {
  return(
    <div className={style.Container}> 
      <div className="image-container">
        <Image width='160' src={Logo} objectFit="contain"/>
      </div>
      <main>
        <h4>Features</h4>
        <h4>Solutions +</h4>
        <h4>Resources</h4>
        <h4>Pricing 🌶</h4>
      </main>
      <div className={style.ButtonContainer}>
        <Button value="Log In"/>
        <Button value="Try for free" filled/>
      </div>
    </div>
  )
}

export default Header