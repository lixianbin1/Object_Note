import {combineReducers} from 'redux'

const Height=(state=window.innerHeight,action)=>{
  switch(action.type){
    case 'setHeight':
      return action.height
    default:
      return state
  }
}
const Width=(state=window.innerWidth,action)=>{
  switch(action.type){
    case 'setWidth':
      return action.width
    default:
      return state
  }
}
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
const LeftData=(state=[],action)=>{
  switch(action.type){
    case 'setLeft':
      return action.data
    default:
      return state
  }
}
const RightData=(state=[],action)=>{
  switch(action.type){
    case 'setRight':
      return action.data
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
export default combineReducers({
  Height,
  Width,
  Title,
  Select,
  seleBox,
  Text,
  Date,
  LeftData,
  RightData,
  DelList,
  TData,
})