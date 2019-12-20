import React,{useReducer,useEffect} from 'react'
import {resizeReducer} from '../reducer'

const ResizeBox=({children})=>{
  const initial={height:'',width:'',}
  const [state,dispatch]=useReducer(resizeReducer,initial)
  useEffect(()=>{
    windowResize()
    window.addEventListener('resize',windowResize)
    return ()=>{window.removeEventListener('resize',windowResize)}
  },[])
  const windowResize=()=>{
    let width
    const nav=navigator.userAgent
    const android=/Android|webOS|iPhone|ipod|ipad|BlackBerry/i
    if(android.test(nav)){
      width=window.innerWidth
    }else{
      width=window.innerHeight/16*9
    }
    let obj={
      height:window.innerHeight,
      width,
    }
    const fontsize=width<252?252/6.83+'px':width/6.83+'px'
    window.document.documentElement.style.fontSize=fontsize
    dispatch({type:"reSize",data:obj})
  }
  return(
    <div className="App" style={{width:state.width,height:state.height}}>
      {children}
    </div>
  )
}

export default ResizeBox