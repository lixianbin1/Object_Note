import React,{useEffect} from 'react'
import {TitleList} from '../actions'
const BoxSize=({title,width,height,setWidth,setHeight,setLeft,setRight,children})=>{
  const layout=()=>{
    //判断手机及屏幕宽度
    let Width
    const nav=navigator.userAgent
    const android=/Android|webOS|iPhone|ipod|ipad|BlackBerry/i
    if(android.test(nav)){
      Width=window.innerWidth
    }else{
      Width=window.innerHeight/16*9
    }
    const fontsize=Width<252?252/6.83+'px':Width/6.83+'px'
    window.document.documentElement.style.fontSize=fontsize
    setHeight(window.innerHeight)
    setWidth(Width)
  }
  const response=()=>{
    let list=[],ListL=[],ListR=[]
    let string=TitleList[title]
    if(localStorage.getItem(string)){
      list=JSON.parse(localStorage.getItem(string))
    }
    for(let i in list){
      if(i%2==1){//奇
        ListR.push(list[i])
      }else{
        ListL.push(list[i])
      }
    }
    setLeft(ListL)
    setRight(ListR)
  }
  useEffect(()=>{
    layout()
    window.addEventListener('resize',layout)
    return ()=>{window.removeEventListener('resize',layout)}
  },[])
  useEffect(()=>{
    response()
  })
  return(
    <div className="App" style={{width:width,height:height}}>
      {children}
    </div>
  )
}

export default BoxSize