import React,{useState,useEffect,useReducer,useContext} from 'react'
import back from '../static/img/back.png'
import ResizeBox from './ResizeBox'
import {AddReducer} from '../reducer'
import {AppContext,keyname} from '../action'

const AddPage=(props)=>{
  const date=new Date();
  const initial={
    id:date.getTime(),
    time:date.getTime(),
    text:''
  }
  const [state,dispatch]=useReducer(AddReducer,initial)
  const [month,setMonth]=useState()//月份
  const [time,setTime]=useState() //时间
  useEffect(()=>{
    createId()
  },[])
  useEffect(()=>{
    createTime()
  },[state.time])
  const createId=()=>{
    let location=props.location.pathname
    let ID=location.split('Add/')[1]
    if(ID){
      let ulist=[]
      if(localStorage.getItem('ulist')){
        ulist=JSON.parse(localStorage.getItem('ulist'))
      }
      //判断是否存在
      for(let i in ulist){
        if(ulist[i].id==ID){
          let obj={
            id:ID,
            text:ulist[i].text,
            time:ulist[i].time,
          }
          dispatch({type:"setObj",data:obj})
          break
        }
      }
    }
  }
  const createTime=()=>{
    let Time=new Date(state.time)
    let Hours,Minus
    let hours=Time.getHours().toString().length
    let minus=Time.getMinutes().toString().length
    hours==2?Hours=Time.getHours():Hours='0'+Time.getHours()
    minus==2?Minus=Time.getMinutes():Minus='0'+Time.getMinutes()
    setMonth((Time.getMonth()+1)+'月'+Time.getDate()+'日')
    setTime(Hours+':'+Minus)
  }

  const change=(text)=>{
    let ulist=[]
    if(localStorage.getItem('ulist')){
      ulist=JSON.parse(localStorage.getItem('ulist'))
    }
    let object={
      id:state.id,
      text:text,
      time:new Date().getTime(),
    }
    dispatch({type:"setObj",data:object})
    //判断是否存在
    for(let i in ulist){
      if(ulist[i].id==state.id){
        ulist.splice(i,1)
        break
      }
    }
    ulist.unshift(object)
    localStorage.setItem('ulist',JSON.stringify(ulist))
  }
  const callBack=()=>{
    if(state.text==""){
      let ulist=[]
      if(localStorage.getItem('ulist')){
        ulist=JSON.parse(localStorage.getItem('ulist'))
      }
      for(let i in ulist){
        if(ulist[i].id==state.id){
          ulist.splice(i,1)
          break
        }
      }
      localStorage.setItem('ulist',JSON.stringify(ulist))
    }
    props.history.push('/')
  }
  return(
    <ResizeBox>
      <div className="addTitle">
        <p>
          <span className="backIco" onClick={()=>{callBack()}}><img src={back}/></span>
        </p>  
        <p className="addTime">
          <span>{month}</span>
          <span>{time}</span>
          <span>{state.text.length}字</span>
        </p>
      </div>
      <textarea className="textArea" onChange={(e)=>{change(e.target.value)}} value={state.text}/>
    </ResizeBox>
  )
}
export default AddPage;