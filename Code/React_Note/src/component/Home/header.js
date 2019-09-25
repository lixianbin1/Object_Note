import React,{useState,useEffect} from 'react';
import * as Sceen from '../../constant/screen.js'
import dele from '../../asset/images/delete.png'
import down from '../../asset/images/down.png'
function Header(props){
  const [Title,setTitle]=useState('便签')
  const [TiNema,setOpen]=useState('Title')

  useEffect(()=>{
    newData()
  })

  function newData(){
    if(props.select){
      if(props.selist.length>0){
        setTitle('已选择'+props.selist.length+'项')
      }else{
        setTitle('请选择项目')
      }
    }else{
      if(props.witch=='Basket'){
        setTitle('废纸篓')
      }else{
        setTitle('便签')
      }
    }
  }
  function cancel(){
    props.onSelect([])
    props.onChange(false)
    setTitle('请选择项目')
  }
  function openTitle(){
    TiNema=='Title'?setOpen('Title open'):setOpen('Title')
  }
  function toPage(a){
    if(a=='Basket'){
      setTitle('废纸篓')
    }else{
      setTitle('便签')
    }
    props.switch(a)
  }
  if(props.select){
    return(
      <div className={TiNema}>
        <p className="title" >
          <span className="deleIco" onClick={()=>{cancel()}}><img className="titleIco" src={dele}/></span>
          <span>{Title}</span>
        </p>
      </div>
    )
  }else{
    return(
      <div className={TiNema} onClick={()=>{openTitle()}}>
        <p className="title" onClick={(e)=>{e.stopPropagation()}}>
          <span onClick={()=>{openTitle()}}>{Title}<img className="titleIco" src={down}/></span>
          </p>
        <div className="ulist">
          <p onClick={()=>{toPage('Note')}}>便签</p>
          <p onClick={()=>{toPage('Basket')}}>废纸篓</p>
        </div>
      </div>
    )
  }
}

export default Header;