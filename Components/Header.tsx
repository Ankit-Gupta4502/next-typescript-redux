import React from 'react'
interface propTypes{
    children?:JSX.Element
} 
const Header = ({children}:propTypes) => {
  return (
    <div>Header</div>
  )
}

export default Header