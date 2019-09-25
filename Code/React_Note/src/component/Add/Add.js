import React,{useState,useEffect} from 'react';
import * as Sceen from '../../constant/screen.js'
import * as Router from 'react-router-dom'
import back from '../../asset/images/back.png'
import '../../asset/css/Home.css';

function Add(props) {
  const [Height,setHeight]=useState(window.innerHeight)
  const [ulist,setUlist]=useState([])
  const [Width,setWidth]=useState()
  const [start,setStart]=useState()//开始
  const [month,setMonth]=useState()//月份
  const [time,setTime]=useState() //时间
  const [word,setWord]=useState(0)//字数
  const [text,setText]=useState() //文本
  const [id,setId]=useState()
  const Time=new Date()
  useEffect(()=>{
    newData()
  },[])
  useEffect(()=>{
    layout()
  })


  function layout(){ // 判断手机及屏幕宽度
    const nav=navigator.userAgent
    const android=/Android|webOS|iPhone|ipod|ipad|BlackBerry/i
    if(android.test(nav)){
      setWidth(window.innerWidth)
    }else{
      setWidth(Height/16*9)
    }
    const fontsize=Width<252?252/6.83+'px':Width/6.83+'px'
    document.documentElement.style.fontSize=fontsize
  }
  window.onresize=()=>{
    setHeight(window.innerHeight)
    Sceen.setHeight(window.innerHeight)
  }
  function newData(){
    if(localStorage.getItem('new')){
      const newData=JSON.parse(localStorage.getItem('new'))
      setStart(newData.start)
      setMonth(newData.month)
      setTime(newData.time)
      setWord(newData.word)
      setText(newData.text)
      setId(newData.id)
    }else{
      setStart(Time.getTime())
      setMonth((Time.getMonth()+1)+'月'+Time.getDate()+'日')
      setTime(Time.getHours()+':'+Time.getMinutes())
      setId(Time.getTime())
    }
    if(localStorage.getItem('ulist')){
      const ulist=JSON.parse(localStorage.getItem('ulist'))
      setUlist(ulist)
    }
  }

  function change(e){
    let Time=new Date()
    setWord(e.target.value.length)
    setText(e.target.value)
    setStart(Time.getTime())
    setMonth((Time.getMonth()+1)+'月'+Time.getDate()+'日')
    setTime(Time.getHours()+':'+Time.getMinutes())
    let object={id,month,time,start,
      word:e.target.value.length,
      text:e.target.value,
    }
    let ishas=false
    for(let i in ulist){
      if(ulist[i].id==id){
        ishas=true
        ulist[i]=object
        break
      }
    }
    if(!ishas){
      ulist.unshift(object)
    }
    localStorage.setItem('ulist',JSON.stringify(ulist))
    localStorage.setItem('new',JSON.stringify(object))
  }
  function callBack(){
    props.history.push('/')
    localStorage.removeItem('new')
  }
  return (
    <div className="App" style={{width:Width,height:Height}}>
      <div className="addTitle">
        <p>
          <span className="backIco" onClick={()=>{callBack()}}><img src={back}/></span>
        </p>
        <p className="addTime">
          <span>{month}</span>
          <span>{time}</span>
          <span>{word}字</span>
        </p>
      </div>
      <textarea className="textArea" onChange={(e)=>{change(e)}} value={text}/>
    </div>
  );
}

export default Add;