import React,{useState} from 'react'
import dele from '../static/images/delete.png'
import down from '../static/images/down.png'
import menu from '../static/images/menu.png'
const Header=({title,seleBox,delList,setTitle,delectList,selectBox,openMenu})=>{
  const [TiNema,setOpen]=useState('Title')
  function openTitle(){
    TiNema=='Title'?setOpen('Title open'):setOpen('Title')
  }
  const clearDel=()=>{
    delectList([])
    selectBox(false)
  }
  return(
    <header>
      <div className={TiNema} onClick={()=>{openTitle()}}>
        {seleBox?
          <p className="title" onClick={(e)=>{e.stopPropagation()}}>
            <span className="deleIco" onClick={()=>{clearDel()}}><img className="imgIco" src={dele}/></span>
            <span>已选择{delList.length}项</span>
          </p>:
          <p className="title" onClick={(e)=>{e.stopPropagation()}}>
            <span onClick={()=>{openTitle()}}>{title}<img className="titleIco" src={down}/></span>
            {/*<span className="menuTitle" onClick={()=>{openMenu()}}><img className="imgIco" src={menu}/></span>*/}
          </p>}
        <div className="ulist">
          <p onClick={()=>{setTitle('便签')}}>便签</p>
          <p onClick={()=>{setTitle('废纸篓')}}>废纸篓</p>
        </div>
      </div>
    </header>
  )
}

export default Header