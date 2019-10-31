import {combineReducers} from 'redux'

const Title=(state='便签',action)=>{
  switch(action.type){
    case 'setTitle':
      return action.title
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
const Ulist=(state=[],action)=>{
  switch(action.type){
    case 'setUlist':
      return action.title
    default:
      return state
  }
}
// 根据页面设置窗口宽度大小
const windowResize=(state={'width':'0px','height':window.innerHeight},action)=>{
  switch(action.type){
    case 'windowResize':
      let width
      const nav=navigator.userAgent
      const android=/Android|webOS|iPhone|ipod|ipad|BlackBerry/i
      if(android.test(nav)){
        width=window.innerWidth
      }else{
        width=window.innerHeight/16*9
      }
      const fontsize=width<252?252/6.83+'px':width/6.83+'px'
      window.document.documentElement.style.fontSize=fontsize
      return({width,height:window.innerHeight})
    default:
      return state
  }
}
// 根据state.title变动而变动的两侧数据
const setLRlist=(state={'ListL':[],'ListR':[]},action)=>{
  switch(action.type){
    case 'setLRlist':
      let list=[],ListL=[],ListR=[]
      let string=action.name
      if(localStorage.getItem(string)){
        list=JSON.parse(localStorage.getItem(string))
      }
      for(let i in list){
        if(i%2==1){//奇
          ListR.push(list[i])
        }else{
          ListL.push(list[i])
        }
      }
      return{ListL,ListR}
    default:
      return state
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
      for(let u in ulist){
        let index=list.indexOf(ulist[u].id)
        if(index>=0){
          let del=ulist.splice(index,1)
          dlist=del.concat(dlist)
        }
      }
      localStorage.setItem('dlist',JSON.stringify(dlist))
      localStorage.setItem('ulist',JSON.stringify(ulist))
  }
  return ''
}
export default combineReducers({
  Ulist,
  window:windowResize,
  setLRlist,
  clickButton,
  Title,
  Select,
  seleBox,
  Text,
  Date,
  DelList,
  TData,
})