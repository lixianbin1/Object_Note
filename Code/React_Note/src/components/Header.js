import React,{useState} from 'react'
import dele from '../static/images/delete.png'
import down from '../static/images/down.png'

const Header=({title,setTitle})=>{
  const [TiNema,setOpen]=useState('Title')
  function openTitle(){
    TiNema=='Title'?setOpen('Title open'):setOpen('Title')
  }
  return(
    <header>
      <div className={TiNema} onClick={()=>{openTitle()}}>
        <p className="title" onClick={(e)=>{e.stopPropagation()}}>
          <span onClick={()=>{openTitle()}}>{title}<img className="titleIco" src={down}/></span>
        </p>
        <div className="ulist">
          <p onClick={()=>{setTitle('便签')}}>便签</p>
          <p onClick={()=>{setTitle('废纸篓')}}>废纸篓</p>
        </div>
      </div>
    </header>
  )
}

export default Header