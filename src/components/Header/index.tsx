import Image from 'next/image'

import {Button} from '../DefaultButton/index'
import Logo from '../../assets/Logo.svg'
import style from './header.module.scss'

const Header: React.FC = () => {
  return(
    <div className={style.Container}> 
      <div className="ImageContainer">
        <Image width='160' src={Logo} objectFit="fill" alt="Codehouse"/>
      </div>
      <main>
        <Button value="Features"/>
        <Button value="Solutions +"/>
        <Button value="Resources"/>
        <Button value="Pricing 🌶"/>
      </main>
      <div className={style.ButtonContainer}>
        <Button value="Log In"/>
        <Button value="Try for free" filled/>
      </div>
    </div>
  )
}

export default Header