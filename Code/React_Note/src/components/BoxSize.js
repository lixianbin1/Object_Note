import React,{useEffect} from 'react'
import {TitleList} from '../actions'
const BoxSize=({title,width,height,windowResize,children,setUlist})=>{
  useEffect(()=>{
    windowResize()
    window.addEventListener('resize',windowResize)
    return ()=>{window.removeEventListener('resize',windowResize)}
  },[])
  useEffect(()=>{
    setUlist(TitleList[title])
  },[title])
  return(
    <div className="App" style={{width:width,height:height}}>
      {children}
    </div>
  )
}

export default BoxSize