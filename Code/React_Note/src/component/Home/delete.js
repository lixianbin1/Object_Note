import React,{useState,useEffect} from 'react';
import * as Sceen from '../../constant/screen.js'
import dowm from '../../asset/images/down.png'
import Modal from './modal'
function Delete(props){
  const [clas,setClas]=useState("Delete")
  const [isDele,setDele]=useState(false) // 永久删除确认窗口
  const [modalData,setModalData]=useState({}) //modal数据
  let witch=props.witch
  let show=props.open

  useEffect(()=>{
    newData()
  })
  useEffect(()=>{
    let obj={
      title:'删除便签',
      content:'确认要删除所选便签吗？',
      show:isDele,
      onShow:function(){setDele(false)},
      onSure:function(){permanent()},
    }
    setModalData(obj)
  },[isDele])
  function newData(){
    show?setClas("Delete show"):setClas("Delete");
  }
  function remove(){
    if(witch=='Basket'){
      setDele(true)
    }else{
      props.delete('Note')
    }
  }
  function permanent(){
    props.delete('Basket')
  }
  function Dtext(){
    if(witch=='Basket'){
      return(
        <p>
          <span onClick={()=>{props.recovery()}}>恢复</span>
          <span onClick={()=>{remove()}}>永久删除</span>
        </p>
      )
    }else{
      return(
        <p>
          <span onClick={()=>{remove()}}>删除</span>
        </p>
      )
    }

  }
  return(
  	<div className={clas}>
      <Dtext/>
      <Modal data={modalData}/>
  	</div>
  )
}

export default Delete;