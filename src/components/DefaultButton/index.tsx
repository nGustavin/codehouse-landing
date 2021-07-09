
import style from './button.module.scss'

interface DefaultButtonProps{
  value: string
  filled?: boolean
}

const Button: React.FC<DefaultButtonProps> = ({value, filled}) => {
  return(
    <>
      {filled ? 
        <button className={style.filledButton}>{value}</button> : 
        <button className={style.button}>{value}</button>
      }
    </>
  )
}

export {Button}