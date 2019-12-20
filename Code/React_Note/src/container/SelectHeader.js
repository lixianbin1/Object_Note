import React,{useReducer,useContext,useState} from 'react';
import {HomeContext} from '../action'
import dele from '../static/img/delete.png'
import down from '../static/img/down.png'
import menu from '../static/img/menu.png'

// import reducer from '../reducer'
const SelectHeader=()=>{
  const [TiNema,setOpen]=useState('Title')
  const {props,dispatch,history}=useContext(HomeContext)
  const openTitle=()=>{
    TiNema=='Title'?setOpen('Title open'):setOpen('Title')
  }
  const clearDel=()=>{
    dispatch({type:"setSelect",data:false})
    dispatch({type:"setDList",data:[]})
  }
  return(
    <header>
      <div className={TiNema} onClick={()=>{openTitle()}}>
        {props.seleBox?
        <p className="title" onClick={(e)=>{e.stopPropagation()}}>
          <span className="deleIco" onClick={()=>{clearDel()}}><img className="imgIco" src={dele}/></span>
          <span>已选择{props.seleList.length}项</span>
        </p>:
        <p className="title" onClick={(e)=>{e.stopPropagation()}}>
          <span onClick={()=>{openTitle()}}>{props.title}<img className="titleIco" src={down}/></span>
        </p>}
        <div className="ulist">
          <p onClick={()=>{dispatch({type:'setTitle',data:'便签'});history.replace('/')}}>便签</p>
          <p onClick={()=>{dispatch({type:'setTitle',data:'废纸篓'});history.replace('/Delete')}}>废纸篓</p>
        </div>
      </div>
    </header>
  )
}

export default SelectHeader;