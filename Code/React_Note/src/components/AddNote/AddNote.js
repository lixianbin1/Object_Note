import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {setTData} from '../../actions'
import * as Router from 'react-router-dom'
import back from '../../asset/images/back.png'
import ResizeBoxes from '../../containers/ResizeBoxes'
import ADDText from '../../containers/ADDText'

const mapStateToProps=(state)=>{
  return({
    TData:state.TData,
  })
}

const AddNote=(props)=>{
  let Time=new Date(props.TData.time)||new Date()
  let Text=props.TData.text||''
  const [month,setMonth]=useState()//月份
  const [time,setTime]=useState() //时间
  useEffect(()=>{
    let Hours,Minus
    let hours=Time.getHours().toString().length
    let minus=Time.getMinutes().toString().length
    hours==2?Hours=Time.getHours():Hours='0'+Time.getHours()
    minus==2?Minus=Time.getMinutes():Minus='0'+Time.getMinutes()
    setMonth((Time.getMonth()+1)+'月'+Time.getDate()+'日')
    setTime(Hours+':'+Minus)
  })
  useEffect(()=>{
    createId()
  },[])
  const createId=()=>{
    let ID=props.TData.id
    if(!ID){
      let date=new Date()
      let obj={
        id:date.getTime(),
        time:date.getTime(),
        text:'',
      }
      props.dispatch(setTData(obj))
    }
  }
  const callBack=()=>{
    props.dispatch(setTData({}))
    props.history.push('/')
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
          <span>{Text.length}字</span>
        </p>
      </div>
      <ADDText/>
    </ResizeBoxes>
  )
}
export default connect(mapStateToProps)(AddNote)