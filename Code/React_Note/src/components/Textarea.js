import React from 'react'

const Textarea=({text,date,setText})=>{
  let ulist=[]
  if(localStorage.getItem('ulist')){
    ulist=JSON.parse(localStorage.getItem('ulist'))
  }
  const change=(text)=>{
    setText(text)
    let object={
      id:date.getTime(),
      text:text,
    }
    //判断是否是新增
    let ishas=false
    for(let i in ulist){
      if(ulist[i].id==date.getTime()){
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
    <textarea className="textArea" onChange={(e)=>{change(e.target.value)}} value={text}/>
  )
}

export default Textarea