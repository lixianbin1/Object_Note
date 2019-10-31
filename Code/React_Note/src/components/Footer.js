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
          <span>恢复</span>
          <span>永久删除</span>
        </p>:
        <p>
          <span onClick={()=>{props.clickDelete(props.delList)}}>删除</span>
        </p>
      }
    </footer>
  )
}

export default Footer