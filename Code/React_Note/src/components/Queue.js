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
  let Timeout
  const [day,setDay]=useState('')
  const [utrue,setTrue]=useState(false) //是否被选中
  const [isLong,setLong]=useState(false) //是否长按中
  const [cClas,setClas]=useState('') //用于设置选中样式
  const [time,setTime]=useState('00:00')
  useEffect(()=>{
    setTrues()
    newData()
    newTime()
  })
  const setTrues=()=>{ //判断是否选中
    let arr=props.delList.concat()
    let index=arr.indexOf(props.data.id)
    if(index>=0){
      setTrue(true)
    }else{
      setTrue(false)
    }
  }
  const newData=()=>{ // 判断日期
    const nDate=new Date()
    let a=nDate.getTime(),b=nDate.getDate()
    let date=parseInt((a - props.data.time)/60000)
    if(date<1440&&b==new Date(props.data.time).getDate()){
      setDay('')
    }else if(date<10080){
      setDay(getDay(new Date(props.data.time).getDay()))
    }else if(date<525600){
      setDay((new Date(props.data.time).getMonth()+1)+'月'+new Date(props.data.time).getDate()+'日')
    }else{
      setDay(parseInt(date/525600)+'年前')
    }
  }
  const newTime=()=>{
    let Time=new Date(props.data.time)
    let Hours,Minus
    let hours=Time.getHours().toString().length
    let minus=Time.getMinutes().toString().length
    hours==2?Hours=Time.getHours():Hours='0'+Time.getHours()
    minus==2?Minus=Time.getMinutes():Minus='0'+Time.getMinutes()
    setTime(Hours+':'+Minus)
  }
  const tclick=()=>{
    if(isLong){
      setLong(false)
    }else{
      if(props.seleBox){ //是否出现选择框
        utrue?setTrue(false):setTrue(true)
        let arr=props.delList.concat()
        if(utrue){
          let index=arr.indexOf(props.data.id)
          arr.splice(index,1)
        }else{
          arr.push(props.data.id)
        }
        props.delectList(arr)
      }else{
        if(props.title=='废纸篓'){
          props.resumeModal()
        }else{
          props.setTData(props.data)
          props.history.push('/Add')
        }
      }
    }
  }
  const long=()=>{
    if(!props.seleBox){
      Timeout=setTimeout(()=>{
        setLong(true)
        setTrue(true)
        props.selectBox(true)
        let arr=props.delList.concat()//
        arr.push(props.data.id)
        props.delectList(arr)
      },500)
    }
  }
  return(
    <div 
      className={cClas} 
      onTouchStart={()=>{long()}} 
      onTouchEnd={()=>{clearTimeout(Timeout)}}
      onMouseDown={()=>{long()}}
      onMouseUp={()=>{clearTimeout(Timeout)}}
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