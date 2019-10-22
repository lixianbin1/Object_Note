import React,{useEffect} from 'react'

const BoxSize=({width,height,setWidth,setHeight,children})=>{
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
  useEffect(()=>{
    layout()
    window.addEventListener('resize',layout)
    return ()=>{window.removeEventListener('resize',layout)}
  })
  return(
    <div className="App" style={{width:width,height:height}}>
      {children}
    </div>
  )
}

export default BoxSize