import React,{useState,useContext,useEffect} from 'react';
import {HomeContext,recover,ldelete,zdelete} from '../action'

const FooterButton=()=>{
  const [footTitle,setFooter]=useState("Delete")
  const {props,dispatch}=useContext(HomeContext)
  useEffect(()=>{
    props.seleBox?setFooter("Delete show"):setFooter("Delete")
  },[props.seleBox])
  const Recover=()=>{
    let obj={
      'show':true,
      'title':'恢复便签',
      'content':'确认要恢复所选的便签吗？',
      'fun':recover,
    }
    dispatch({type:'setModal',data:obj})
  }
  const Ldelete=()=>{
    let obj={
      'show':true,
      'title':'删除便签',
      'content':'确认要删除所选的便签吗？',
      'fun':ldelete,
    }
    dispatch({type:'setModal',data:obj})
  }
  const Zdelete=()=>{
    let obj={
      'show':true,
      'title':'永久删除便签',
      'content':'确认要删除所选的便签吗？',
      'fun':zdelete,
    }
    dispatch({type:'setModal',data:obj})
  }
  return(
    <footer className={footTitle}>
      {props.title=="废纸篓"?
        <p>
          <span onClick={()=>{Recover()}}>恢复</span>
          <span onClick={()=>{Zdelete()}}>永久删除</span>
        </p>:
        <p>
          <span onClick={()=>{Ldelete()}}>删除</span>
        </p>
      }
    </footer>
  )
}

export default FooterButton

