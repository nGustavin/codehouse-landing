import Image from 'next/image'

import {Button} from '../DefaultButton/index'
import Logo from '../../assets/Logo.svg'
import style from './header.module.scss'
import breakpoints from '../../utils/breakpoints'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useState } from 'react'
import {IoMdMenu} from 'react-icons/io'



const Header: React.FC = () => {
  
  const [screenWidth, screenHeight] = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)

  const openMenuBar = () => {
    setIsOpen(!isOpen)
  }

  const { mobileL } = breakpoints

  return(
    <div className={style.Container}> 
      <div className="ImageContainer">
        <Image width='160' src={Logo} objectFit="fill" alt="Codehouse"/>
      </div>
      {screenWidth <= mobileL ? (
        <>
          <button onClick={openMenuBar} className={style.OpenMenuButton}>
            <IoMdMenu color={'#000000'} size={24}/>
          </button>
          {isOpen ? (
            <div className={style.OpenedMenu}>
              <main>
                <Button value="Features"/>
                <Button value="Solutions +"/>
                <Button value="Resources"/>
                <Button value="Pricing 🌶"/>
              </main>
              <div className={style.ButtonContainerMenu}>
                <Button value="Log In"/>
                <Button value="Try for free" filled/>
              </div>
            </div>
          ) : (
            <div className={style.ClosedMenu}>
            </div>
          )}
        </>
      ) : (
      <main>
        <Button value="Features"/>
        <Button value="Solutions +"/>
        <Button value="Resources"/>
        <Button value="Pricing 🌶"/>
      </main>
    )}
      <div className={style.ButtonContainer}>
        <Button value="Log In"/>
        <Button value="Try for free" filled/>
      </div>
    </div>
  )
}

export default Header