import React,{useState,useEffect,useContext} from 'react';
import select from '../static/img/select.png'
import {HomeContext,getDay,recover,AnorPC} from '../action'

const ListQueue=(pro)=>{
  const {props,dispatch,history}=useContext(HomeContext)
  let Timeout,TimeClick
  const [day,setDay]=useState('') //组件显示的时间
  const [utrue,setTrue]=useState(false) //是否被选中
  const [cClas,setClas]=useState('') //用于设置选中样式
  const [time,setTime]=useState('00:00')
  useEffect(()=>{
    setTrues()
    newData()
    newTime()
  })
  const setTrues=()=>{ //判断是否选中
    let arr=props.seleList.concat()
    let index=arr.indexOf(pro.data.id)
    if(index>=0){
      setTrue(true)
    }else{
      setTrue(false)
    }
  }
  const newData=()=>{ // 判断日期
    const nDate=new Date()
    let a=nDate.getTime(),b=nDate.getDate()
    let date=parseInt((a - pro.data.time)/60000)
    if(date<1440&&b==new Date(pro.data.time).getDate()){
      setDay('')
    }else if(date<10080){
      setDay(getDay(new Date(pro.data.time).getDay()))
    }else if(date<525600){
      setDay((new Date(pro.data.time).getMonth()+1)+'月'+new Date(pro.data.time).getDate()+'日')
    }else{
      setDay(parseInt(date/525600)+'年前')
    }
  }
  const newTime=()=>{
    let Time=new Date(pro.data.time)
    let Hours,Minus
    let hours=Time.getHours().toString().length
    let minus=Time.getMinutes().toString().length
    hours==2?Hours=Time.getHours():Hours='0'+Time.getHours()
    minus==2?Minus=Time.getMinutes():Minus='0'+Time.getMinutes()
    setTime(Hours+':'+Minus)
  }
  let isLong
  const tclick=()=>{ //已松手
    if(isLong){ //长按定时已执行
      isLong=false
    }else{ //长按定时已执行
      if(props.seleBox){ //有选择框
        utrue?setTrue(false):setTrue(true)
        let arr=props.seleList.concat() //返回数组副本
        if(utrue){
          let index=arr.indexOf(pro.data.id)
          arr.splice(index,1)
        }else{
          arr.push(pro.data.id)
        }
        dispatch({type:'setDList',data:arr})
      }else{ //无选择框
        if(props.title=='废纸篓'){
          dispatch({type:'setDList',data:[pro.data.id]})
          Recover()
        }else{
          history.push('/Add/'+pro.data.id)
        }
      }
    }
  }
  const Recover=()=>{
    let obj={
      'show':true,
      'title':'恢复便签',
      'content':'不能打开本便签，如需编辑需要恢复，确认要恢复所选的便签吗？',
      'fun':recover,
    }
    dispatch({type:'setModal',data:obj})
  }
  let isAr=false
  const long=()=>{ //长按未松开
    setTimeout(()=>{
      isAr=true
    },5)
    if(!props.seleBox){
      Timeout=setTimeout(()=>{ //长按定时
        let arr=props.seleList.concat()
        arr.push(pro.data.id)
        isAr=false
        isLong=true
        setTrue(true)
        dispatch({type:'setSelect',data:true})
        dispatch({type:'setDList',data:arr})
      },500)
    }
  }
  const clearl=()=>{ //清除定时
    if(isAr){
      clearTimeout(Timeout)
      if(!props.seleBox){
        isAr=false
      }
    }else{
      clearTimeout(TimeClick)
    }
  }
  const clickt=()=>{
    TimeClick=setTimeout(()=>{
      tclick()
    },10)
  }
  const onMdown=()=>{
    if(AnorPC()){
      long()
    }
  }
  const onMmove=()=>{
    if(AnorPC()){
      clearl()
    }
  }
  const onMup=()=>{
    if(AnorPC()){
      clickt()
      clearl()
    }
  }
  const onTstart=()=>{
    if(!AnorPC()){
      long()
    }
  }
  const onTmove=()=>{
    if(!AnorPC()){
      clearl()
    }
  }
  const onTend=()=>{
    if(!AnorPC()){
      clickt()
      clearl()
    }
  }
  return(
    <div 
      className={cClas} 
      onMouseDown={()=>{onMdown()}}
      onMouseMove={()=>{onMmove()}}
      onMouseUp={()=>{onMup()}}
      onTouchStart={()=>{onTstart()}}
      onTouchMove={()=>{onTmove()}}
      onTouchEnd={()=>{onTend()}}
    >
      <p className="listText">{pro.data.text}</p>
      <p className="listTime">
        {day?<span>{day}</span>:''}
        <span>{time}</span>
      </p>
      <Uset select={props.seleBox} isTrue={utrue}/>
    </div>
  )
}
const Uset=(props)=>{ // 选择框组件
  if(props.select){
    if(props.isTrue){
      return <span className="uSet" style={{border:0}}><img src={select}/></span>
    }else{
      return <span className="uSet"/>
    }
  }else{
    return ''
  }
}
export default ListQueue;