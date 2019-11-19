import {combineReducers} from 'redux'
// 展示的便签组
const Title=(state='便签',action)=>{
  switch(action.type){
    case 'setTitle':
      return action.title
    default:
      return state
  }
}
// 根据state.title变动而变动的两侧数据
const Ulist=(state,action)=>{
  if(state==undefined){
    let ulist=[],ListR=[],ListL=[]
    if(localStorage.getItem('ulist')){
      ulist=JSON.parse(localStorage.getItem('ulist'))
    }
    for(let i in ulist){
      if(i%2==1){//奇
        ListR.push(ulist[i])
      }else{
        ListL.push(ulist[i])
      }
    }
    state={
      ListL,
      ListR,
    }
  }
  switch(action.type){
    case 'setUlist':
      return action.data
    default:
      return state
  }
}
const Select=(state=false,action)=>{
  switch(action.type){
    case 'setSelect':
      return action.select
    default:
      return state
  }
}
const seleBox=(state=false,action)=>{
  switch(action.type){
    case 'selectBox':
      return action.select
    default:
      return state
  }
}
const Text=(state='',action)=>{
  switch(action.type){
    case 'setText':
      return action.text
    default:
      return state
  }
}
const TData=(state={},action)=>{
  switch(action.type){
    case 'setTData':
      return action.data
    default:
      return state
  }
}
const Date=(state='',action)=>{
  switch(action.type){
    case 'setDate':
      return action.time
    default:
      return state
  }
}
const DelList=(state=[],action)=>{
  switch(action.type){
    case 'delectList':
      return action.list
    default:
      return state
  }
}

// 根据页面设置窗口宽度大小
const windows=(state,action)=>{
  let width
  const nav=navigator.userAgent
  const android=/Android|webOS|iPhone|ipod|ipad|BlackBerry/i
  if(android.test(nav)){
    width=window.innerWidth
  }else{
    width=window.innerHeight/16*9
  }
  let obj={
    height:window.innerHeight,
    width,
  }
  switch(action.type){
    case 'windowResize':
      const fontsize=width<252?252/6.83+'px':width/6.83+'px'
      window.document.documentElement.style.fontSize=fontsize
      return(obj)
    default:
      return(obj)
  }
}

const clickButton=(state,action)=>{ //删除选中便签事件
  switch(action.type){
    case 'clickDelete':
      let ulist=[],dlist=[],list=action.data
      if(localStorage.getItem('ulist')){
        ulist=JSON.parse(localStorage.getItem('ulist'))
      }
      if(localStorage.getItem('dlist')){
        dlist=JSON.parse(localStorage.getItem('dlist'))
      }
      for(let u=ulist.length-1;u>=0;u--){
        let index=list.indexOf(ulist[u].id)
        if(index>=0){
          let del=ulist.splice(index,1)
          del[0].clearTime=action.time
          dlist=del.concat(dlist)
        }
      }
      localStorage.setItem('dlist',JSON.stringify(dlist))
      localStorage.setItem('ulist',JSON.stringify(ulist))
  }
  return ''
}
const Menu=(state=false,action)=>{
  switch(action.type){
    case 'openMenu':
      return true
    case 'closeMenu':
      return false
    default:
      return state
  }
}
// 控制Modal的一切
const Modal=(state,action)=>{
  if(state==undefined){
    state={
      'show':false,
      'title':'删除便签',
      'content':'确认要删除所选的便签吗？'
    }
  }
  switch(action.type){
    case 'delectModal':
      return({
        'show':true,
        'title':'删除便签',
        'content':'确认要删除所选的便签吗？',
        'function':'delete'
      })
    case 'resumeModal':
      return({
        'show':true,
        'title':'恢复便签',
        'content':'确认要恢复所选的便签吗？',
        'function':'resume'
      })
    case 'resumeModal2':
      return({
        'show':true,
        'title':'恢复便签',
        'content':'不能打开本便签，如需编辑请先恢复便签。',
        'function':'resume'
      })
    case 'closeModal':
      return({
        'show':false,
        'title':'删除便签',
        'content':'确认要删除所选的便签吗？',
        'function':'delete'
      })
    default:
      return state
  }
}
export default combineReducers({
  Ulist,
  Modal,
  Menu,
  window:windows,
  clickButton,
  Title,
  Select,
  seleBox,
  Text,
  Date,
  DelList,
  TData,
})