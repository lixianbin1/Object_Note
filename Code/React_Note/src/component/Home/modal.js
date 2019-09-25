import React,{useState,useEffect} from 'react';

function Modal(props){
  const Data=props.data||{}
  const [title,setTitle]=useState()
  const [content,setContent]=useState()
  const [cancel,setCancel]=useState()
  const [sure,setSure]=useState()
  const [show,setShow]=useState()

  useEffect(()=>{
    newData()
  })

  function newData(){
    Data.title?setTitle(Data.title):setTitle('模块')
    Data.content?setContent(Data.content):setContent('内容')
    Data.cancel?setCancel(Data.cancel):setCancel('取消')
    Data.sure?setSure(Data.sure):setSure('确定')
    Data.show?setShow(Data.show):setShow(false)
    if(!Data.onCancel){Data.onCancel=function(){}}
    if(!Data.onSure){Data.onSure=function(){}}
    if(!Data.onShow){Data.onShow=function(){}}
  }
  function onCancel(){
    Data.onShow()
    Data.onCancel()
  }
  function onSure(){
    Data.onShow()
    Data.onSure()
  }
  if(show){
  return(
    <div className="modal">
      <span className="before" onClick={()=>{Data.onShow()}}/>
      <div className="permanent">
        <h3>{title}</h3>
        <p>{content}</p>
        <span className="cancel" onClick={()=>{onCancel()}}>{cancel}</span>
        <span className="delete" onClick={()=>{onSure()}}>{sure}</span>
      </div>
    </div>
  )
  }else{
    return('')
  }
}

export default Modal;