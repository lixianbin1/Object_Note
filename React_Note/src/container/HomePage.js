import React,{useReducer,useEffect} from 'react';
import ResizeBox from './ResizeBox'
import SelectHeader from './SelectHeader'
import ContextList from './ContextList'
import FooterButton from './FooterButton'
import ShowModal from './ShowModal'
import {HomeReducer} from '../reducer'
import {HomeContext,keyname} from '../action'

const HomePage=(props)=>{
  const initial={title:'便签',uList:[],seleBox:false,seleList:[],showModal:false,modaltext:{}}
  const [state,dispatch]=useReducer(HomeReducer,initial)
  useEffect(()=>{
    GetuList()
  },[state.title])
  useEffect(()=>{
    GetTitle()
  },[])
  const GetTitle=()=>{
    let hash=props.location.pathname
    if(hash=="/Delete"){
      dispatch({type:"setTitle",data:'废纸篓'})
    }
  }
  const GetuList=()=>{
    let ulist=[]
    let listn=keyname(state.title)
    if(localStorage.getItem(listn)){
      ulist=JSON.parse(localStorage.getItem(listn))
    }
    if(state.title=="废纸篓"){
      for(let i in ulist){
        let time=new Date().getTime()
        if(time-ulist[i].time>2592000000){
          ulist.split(i,1)
        }
      }
      localStorage.setItem('dlist',JSON.stringify(ulist))
    }
    dispatch({type:"setUlist",data:ulist})
  }
  return(
    <ResizeBox>
      <HomeContext.Provider value={{props:state,dispatch,history:props.history}}>
        <SelectHeader/>
        <ContextList/>
        <ShowModal />
        <FooterButton/>
      </HomeContext.Provider>
    </ResizeBox>
  )
}
export default HomePage;