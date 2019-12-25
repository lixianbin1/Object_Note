import React from 'react';

export const AppContext=React.createContext(null)
export const HomeContext = React.createContext(null);
export const keyname=(title)=>{
  switch(title){
    case '便签':
      return 'ulist';
    case '废纸篓':
      return 'dlist';
    default:
      return 'ulist'
  }
}
export const getDay=(n)=>{
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
export const AnorPC=()=>{
  const nav=navigator.userAgent
  const android=/Android|webOS|iPhone|ipod|ipad|BlackBerry/i
  if(android.test(nav)){
    return false
  }else{
    return true
  }
}
export const recover=(arr)=>{
  let ulist=[],dlist=[]
  if(localStorage.getItem('ulist')){
    ulist=JSON.parse(localStorage.getItem('ulist'))
  }
  if(localStorage.getItem('dlist')){
    dlist=JSON.parse(localStorage.getItem('dlist'))
  }
  for(let i=dlist.length-1;i>=0;i--){
    if(arr.indexOf(dlist[i].id)>-1){
      let obj=dlist.splice(i,1)[0]
      ulist.unshift(obj)
    }
  }
  localStorage.setItem('dlist',JSON.stringify(dlist))
  localStorage.setItem('ulist',JSON.stringify(ulist))
}
export const ldelete=(arr)=>{
  let ulist=[],dlist=[]
  if(localStorage.getItem('ulist')){
    ulist=JSON.parse(localStorage.getItem('ulist'))
  }
  if(localStorage.getItem('dlist')){
    dlist=JSON.parse(localStorage.getItem('dlist'))
  }
  for(let i=ulist.length-1;i>=0;i--){
    if(arr.indexOf(ulist[i].id)>-1){
      let obj=ulist.splice(i,1)[0]
      dlist.push(obj)
    }
  }
  localStorage.setItem('dlist',JSON.stringify(dlist))
  localStorage.setItem('ulist',JSON.stringify(ulist))
}
export const zdelete=(arr)=>{
  let dlist=[]
  if(localStorage.getItem('dlist')){
    dlist=JSON.parse(localStorage.getItem('dlist'))
  }
  for(let i=dlist.length-1;i>=0;i--){
    if(arr.indexOf(dlist[i].id)>-1){
      let obj=dlist.splice(i,1)[0]
    }
  }
  localStorage.setItem('dlist',JSON.stringify(dlist))
}
export default keyname