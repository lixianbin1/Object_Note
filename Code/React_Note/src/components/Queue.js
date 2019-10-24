import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {getDay} from '../actions'
import select from '../static/images/select.png'

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
const Queue=(props)=>{
  const [day,setDay]=useState('')
  const [utrue,setTrue]=useState(false)
  const [cClas,setClas]=useState('') //用于设置选中样式
  const [time,setTime]=useState('00:00')

  useEffect(()=>{
    newData()
    newTime()
  })
  function newData(){ // 判断日期
    const nDate=new Date()
    let a=nDate.getTime(),b=nDate.getDate()
    let date=parseInt((a - props.data.id)/60000)
    if(date<1440&&b==new Date(props.data.id).getDate()){
      setDay('')
    }else if(date<10080){
      setDay(getDay(new Date(props.data.id).getDay()))
    }else if(date<525600){
      setDay((new Date(props.data.id).getMonth()+1)+'月'+new Date(props.data.id).getDate()+'日')
    }else{
      setDay(parseInt(date/525600)+'年前')
    }
  }
  function newTime(){
    let Time=new Date(props.data.time)
    let Hours,Minus
    let hours=Time.getHours().toString().length
    let minus=Time.getMinutes().toString().length
    hours==2?Hours=Time.getHours():Hours='0'+Time.getHours()
    minus==2?Minus=Time.getMinutes():Minus='0'+Time.getMinutes()
    setTime(Hours+':'+Minus)
  }

  const tclick=()=>{
    if(props.seleBox){ //是否出现选择框
      utrue?setTrue(false):setTrue(true)
      let arr=props.delList
      if(utrue){
        let index=arr.indexOf(props.data.id)
        arr.splict(index,1)
      }else{
        arr.push(props.data.id)
      }
    }else{
      props.setTData(props.data)
      props.history.push('/Add')
    }
  }
  const long=()=>{
    
  }
  return(
    <div 
      className={cClas} 
      // onTouchStart={()=>{long()}} 
      // onTouchEnd={()=>{clearTimeout(setTime)}}
      onMouseDown={()=>{long()}}
      // onMouseUp={()=>{clearTimeout(setTime)}}
      onClick={()=>{tclick()}}
    >
      <p className="listText">{props.data.text}</p>
      <p className="listTime">
        {day?<span>{day}</span>:''}
        <span>{time}</span>
      </p>
      <Uset select={props.seleBox} isTrue={utrue}/>
    </div>
  )
}

export default connect()(Queue)