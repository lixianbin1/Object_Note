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
const Text=(state='',action)=>{
  switch(action.type){
    case 'setText':
      return action.text
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
export default combineReducers({
  Height,
  Width,
  Title,
  Select,
  Text,
  Date,
})