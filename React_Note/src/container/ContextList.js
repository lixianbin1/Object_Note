import React,{useState,useEffect,useContext} from 'react';
import {Link} from  'react-router-dom';
import ListQueue from './ListQueue'
import {HomeContext} from '../action';
import addIco from '../static/img/add.png'

const ContextList=()=>{
  const {props,dispatch}=useContext(HomeContext)
  const [ListL,setL]=useState([])
  const [ListR,setR]=useState([])
  useEffect(()=>{
    setList()
  },[props.uList])
  const setList=()=>{
    let ListL=[],ListR=[]
    let ulist=props.uList
    for(let i in ulist){
      if(i%2==1){//奇
        ListR.push(ulist[i])
      }else{
        ListL.push(ulist[i])
      }
    }
    setL(ListL)
    setR(ListR)

  }
  return(
    <div className="Content">
      {props.title=='废纸篓'?
        <p>注意！位于废纸篓的便签将在30天后销毁！</p>:''
      }
      <div className="canList" >
        {ListL.map((e)=>(
          <ListQueue key={e.id} data={e}/>
        ))}
      </div>
      <div className="canList">
        {ListR.map((e)=>(
          <ListQueue key={e.id} data={e}/>
        ))}
      </div>
      {props.title!=='废纸篓'&&props.seleBox==false?
        <Link to="./Add" className="Add" ><img src={addIco}/></Link>:
        <Link to="./Add" className="Add right" ><img src={addIco}/></Link>
      }
    </div>
  )
}

export default ContextList;
