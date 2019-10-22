import React from 'react'
import {Link} from 'react-router-dom'
import addIco from '../static/images/add.png'

const List=(props)=>{
console.log(props)
  return(
    <div className="Content">

      <Link to="./Add" className="Add" ><img src={addIco}/></Link>
    </div>
  )

}

export default List

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