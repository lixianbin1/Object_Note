import React,{useState,useEffect} from 'react'

const Footer=(props)=>{
  const [footTitle,setFooter]=useState("Delete")
  useEffect(()=>{
    props.seleBox?setFooter("Delete show"):setFooter("Delete")
  },[props.seleBox])
  return(
    <footer className={footTitle}>
      {props.title=="废纸篓"?
        <p>
          <span onClick={()=>{props.resumeModal()}}>恢复</span>
          <span onClick={()=>{props.delectModal()}}>永久删除</span>
        </p>:
        <p>
          <span onClick={()=>{props.delectModal()}}>删除</span>
        </p>
      }
    </footer>
  )
}

export default Footer