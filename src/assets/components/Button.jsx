

export const Button = ({label, estilo, onClick, isActive}) => {
  const buttonClass = isActive ? 'button2' : estilo;
  return (
    <button className={buttonClass} onClick={onClick}>{label}</button>
  )
}
