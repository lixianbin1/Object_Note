import React,{useContext} from 'react';
import {HomeContext,keyname} from '../action';
const ShowModal=(pro)=>{
  const {props,dispatch}=useContext(HomeContext)
  const closeModal=()=>{
    let obj={
      'show':false,
    }
    dispatch({type:'setModal',data:obj})
  }
  const confirm=()=>{
    closeModal()
    props.modaltext.fun(props.seleList)
    dispatch({type:'setSelect',data:false})
    dispatch({type:'setDList',data:[]})
    reconfig()
  }
  const reconfig=()=>{
    let ulist
    let listn=keyname(props.title)
    if(localStorage.getItem(listn)){
      ulist=JSON.parse(localStorage.getItem(listn))
    }
    dispatch({type:"setUlist",data:ulist})
  }
  if(props.showModal){
    return(
      <div className="modal">
        <span className="before" onClick={()=>{closeModal()}}/>
        <div className="permanent">
          <h3>{props.modaltext.title}</h3>
          <p>{props.modaltext.content}</p>
          <span className="cancel" onClick={()=>{closeModal()}}>取消</span>
          <span className="delete" onClick={()=>{confirm()}}>确定</span>
        </div>
      </div>
    )
  }else{
    return('')
  }
}

export default ShowModal;