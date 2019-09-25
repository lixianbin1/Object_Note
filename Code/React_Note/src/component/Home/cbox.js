import React,{useState,useEffect} from 'react';
import select from '../../asset/images/select.png'
let setTime,isLong=false
function Cbox(props){
  const data=props.data
  const [day,setDay]=useState('')
  const [utrue,setTrue]=useState(false) //是否选中
  const [cClas,setClas]=useState('') //用于设置选中样式
  // const [isShow,setShow]=useState(false) // modal确认窗口
  // const [modalData,setModalData]=useState({}) //modal数据
  let uset=props.select // 判断是否出现选择框
  let list=props.selist // 通过数组列判断是否被选择

  useEffect(()=>{
    newData()
  },[])
  useEffect(()=>{
    setData()
  })

  function newData(){ // 判断便签的时间
    const nDate=new Date()
    let a=nDate.getTime(),b=nDate.getDate()
    let date=parseInt((a - data.start)/60000)
    if(date<1440&&b==new Date(data.start).getDate()){
      setDay('')
    }else if(date<10080){
      setDay(getDay(new Date(data.start).getDay()))
    }else if(date<525600){
      setDay((new Date(data.start).getMonth()+1)+'月'+new Date(data.start).getDate()+'日')
    }else{
      setDay(parseInt(date/525600)+'年前')
    }
  }

  function setData(){ // 判断是否选中
    if(uset){
      for(let i in list){
        if(data.id==list[i]){
          setClas('select')
          setTrue(true)
        }
      }
    }else{
      setTrue(false)
      setClas('')
    }
  }
  function getDay(n){
    switch(n){
      case 0:
        return '星期日';
      case 1:
        return '星期一';
      case 2:
        return '星期二';
      case 3:
        return '星期三';
      case 4:
        return '星期四';
      case 5:
        return '星期五';
      case 6:
        return '星期六';
      default:
        return '未知'
    }
  }
  function long(){ // 开始长按
    if(!uset){
      setTime=setTimeout(()=>{
        isLong=true
        if(!isSelist(data.id,list)){
          list.push(data.id)
          props.onSelect(list)
        }
        props.onChange(true)
      },1000)
    }
  }
  function click(){ // 点击选中
    if(isLong){
      isLong=false
    }else{
      if(uset){
        if(utrue){
          for(let i in list){
            if(data.id==list[i]){
              list.splice(i,1)
            }
          }
          props.onSelect(list)
          setClas('')
          setTrue(false)
        }else{
          list.push(data.id)
          props.onSelect(list)
          setClas('select')
          setTrue(true)
        }
      }else{
        if(props.witch=='Basket'){
          props.cover(data.id)
        }else{
          props.toNote(data.id)
        }
      }
    }
  }
  function Uset(){ // 选择框组件
    if(uset){
      if(utrue){
        return <span className="uSet" style={{border:0}}><img src={select}/></span>
      }else{
        return <span className="uSet"/>
      }
    }else{
      return ''
    }
  }
  function isSelist(arr,array){ //判断arr是否在array里
    let konw=false
    for(let i in array){
      if(arr==array[i]){
        konw=true
      }
    }
    return konw
  }
  return(
    <div 
      className={cClas} 
      onTouchStart={()=>{long()}} 
      onTouchEnd={()=>{clearTimeout(setTime)}}
      onMouseDown={()=>{long()}}
      onMouseUp={()=>{clearTimeout(setTime)}}
      onClick={()=>{click()}}
    >
      <p className="listText">{data.text}</p>
      <p className="listTime">
        {day?<span>{day}</span>:''}
        <span>{data.time}</span>
      </p>
      <Uset/>
    </div>
  )
}
export default Cbox