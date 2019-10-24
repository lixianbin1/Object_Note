import React from 'react'
import {TitleList} from '../actions'

const Textarea=({TData,title,setTData})=>{
  let string=TitleList[title]
  let ulist=[]
  if(localStorage.getItem(string)){
    ulist=JSON.parse(localStorage.getItem(string))
  }
  const change=(text)=>{
    let object={
      id:TData.id,
      text:text,
      time:new Date().getTime(),
    }
    setTData(object)
    //判断是否是新增
    let ishas=false
    for(let i in ulist){
      if(ulist[i].id==TData.id){
        ishas=true
        ulist[i]=object
        break
      }
    }
    if(!ishas){
      ulist.unshift(object)
    }
    localStorage.setItem('ulist',JSON.stringify(ulist))
  }
  return(
    <textarea className="textArea" onChange={(e)=>{change(e.target.value)}} value={TData.text}/>
  )
}

export default Textarea