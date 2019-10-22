import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {setText} from '../../actions'
import * as Router from 'react-router-dom'
import {setDate} from '../../actions'
import back from '../../asset/images/back.png'
import ResizeBoxes from '../../containers/ResizeBoxes'
import ADDText from '../../containers/ADDText'

const mapStateToProps=(state)=>{
  return({
    text:state.Text,
  })
}

const AddNote=(props)=>{
  const [month,setMonth]=useState()//月份
  const [time,setTime]=useState() //时间
  useEffect(()=>{
    const Time=new Date()
    let Hours,Minus
    let hours=Time.getHours().toString().length
    let minus=Time.getMinutes().toString().length
    hours==2?Hours=Time.getHours():Hours='0'+Time.getHours()
    minus==2?Minus=Time.getMinutes():Minus='0'+Time.getMinutes()
    props.dispatch(setDate(Time))
    setMonth((Time.getMonth()+1)+'月'+Time.getDate()+'日')
    setTime(Hours+':'+Minus)
  },[])
  function callBack(){
    props.dispatch(setText(''))
    props.history.push('/')
    // localStorage.removeItem('new')
  }
  return(
    <ResizeBoxes>
      <div className="addTitle">
        <p>
          <span className="backIco" onClick={()=>{callBack()}}><img src={back}/></span>
        </p>  
        <p className="addTime">
          <span>{month}</span>
          <span>{time}</span>
          <span>{props.text.length}字</span>
        </p>
      </div>
      <ADDText/>
    </ResizeBoxes>
  )
}
export default connect(mapStateToProps)(AddNote)