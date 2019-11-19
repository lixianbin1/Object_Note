import React from 'react';
const Menu=(props)=>{
  let name="menu"
  if(!props.show){name="menu hide"}
  return(
    <div className={name}>
      <span className="before" onClick={()=>{props.closeMenu()}}/>
      <ul className="menuList">
        <li id="addApp" onClick={()=>{props.closeMenu()}}>安装</li>
      </ul>
    </div>
  )
}
export default Menu;