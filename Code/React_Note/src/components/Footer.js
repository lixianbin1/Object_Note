import React from 'react'


const Footer=(props)=>{
  return(
    <footer className="Delete show">
      {props.title=="废纸篓"?
        <p>
          <span>恢复</span>
          <span>永久删除</span>
        </p>:
        <p>
          <span>删除</span>
        </p>
      }
    </footer>
  )

}

export default Footer

  // if(props.select){
  //   return(
  //     <div className={TiNema}>
  //       <p className="title" >
  //         <span className="deleIco" onClick={()=>{cancel()}}><img className="titleIco" src={dele}/></span>
  //         <span>{Title}</span>
  //       </p>
  //     </div>
  //   )
  // }else{
  //   return(
  //     <div className={TiNema} onClick={()=>{openTitle()}}>
  //       <p className="title" onClick={(e)=>{e.stopPropagation()}}>
  //         <span onClick={()=>{openTitle()}}>{Title}<img className="titleIco" src={down}/></span>
  //         </p>
  //       <div className="ulist">
  //         <p onClick={()=>{toPage('Note')}}>便签</p>
  //         <p onClick={()=>{toPage('Basket')}}>废纸篓</p>
  //       </div>
  //     </div>
  //   )
  // }