import React,{useEffect} from 'react'
import {TitleList} from '../actions'
const BoxSize=({title,width,height,windowResize,children,setLRlist,setUlist})=>{
  useEffect(()=>{
    windowResize()
    window.addEventListener('resize',windowResize)
    return ()=>{window.removeEventListener('resize',windowResize)}
  },[])
  useEffect(()=>{
    setLRlist(TitleList[title])
    setUlist(title)
  },[title])
  return(
    <div className="App" style={{width:width,height:height}}>
      {children}
    </div>
  )
}

export default BoxSize