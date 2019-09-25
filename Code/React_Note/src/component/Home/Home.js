import React,{useState,useEffect} from 'react';
import * as Sceen from '../../constant/screen.js'
import addIco from '../../asset/images/add.png'
import {Link} from 'react-router-dom'
import Header from './header'
import Delete from './delete'
import Cbox from './cbox'
import Modal from './modal'
import '../../asset/css/Home.css';


function Home(props) {
  const [Height,setHeight]=useState(window.innerHeight)
  const [Width,setWidth]=useState(window.innerWidth)
  const [conten,seConten]=useState('Content')
  const [witch,setWitch]=useState('Note') // 便签or纸篓
  const [ulist,setUlist]=useState([]) //便签列表
  const [dlist,setDlist]=useState([]) //纸篓列表
  const [listL,setLeft]=useState([])  //右侧列表
  const [listR,setRight]=useState([]) //左侧列表
  const [uset,setUs]=useState(false)  //是否出现选择
  const [selist,setLise]=useState([]) //选中的便签列
  const [modal,setModal]=useState(false)//是否显示Modal
  const [modalData,setMData]=useState({})

  let addClass='Add'
  useEffect(()=>{
    newData()
    remove()
  },[])
  useEffect(()=>{
    fontsize()
    layout()
    init()
  })
  useEffect(()=>{
    let object={
      title:'恢复便签',
      content:'不能打开本便签，如需进行编辑，请先恢复该便签。',
      show:modal,
      onShow:function(){setModal(false)},
      onSure:recovery,
    }
    setMData(object)
  },[modal])

  function layout(){ // 判断手机及屏幕宽度
    const nav=navigator.userAgent
    const android=/Android|webOS|iPhone|ipod|ipad|BlackBerry/i
    if(android.test(nav)){
      setWidth(window.innerWidth)
    }else{
      setWidth(Height/16*9)
    }
    const fontsize=Width<252?252/6.83+'px':Width/6.83+'px'
    document.documentElement.style.fontSize=fontsize
  }
  window.onresize=()=>{
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }
  function fontsize(){ //制定字体大小
    const fontsize=Width<252?252/6.83+'px':Width/6.83+'px'
    document.documentElement.style.fontSize=fontsize
  }

  function init(){
    uset?seConten('Content show'):seConten('Content')
  }
  function newData(){ // 初始化数据分左右列
    let ulist,dlist
    if(localStorage.getItem('ulist')){
      ulist=JSON.parse(localStorage.getItem('ulist'))
      setUlist(ulist)
    }
    if(localStorage.getItem('dlist')){
      dlist=JSON.parse(localStorage.getItem('dlist'))
      setDlist(dlist)
    }
    if(witch=='Basket'){
      setData(dlist)
    }else{
      setData(ulist)
    }
  }
  function remove(){
    const time=new Date().getTime()
    for(let i in dlist){
      if((time - dlist[i].end)/60000>=43200){
        dlist[i].splice(i--,1)
      }
    }
  }
  function setData(array){
    let ListL=[],ListR=[]
    for(let i in array){
      if(i%2==1){//奇
        ListR.push(array[i])
      }else{
        ListL.push(array[i])
      }
    }
    setLeft(ListL)
    setRight(ListR)
  }
  function useWitch(a){ // 切换便签纸篓
    setWitch(a)
    if(a=='Basket'){
      setData(dlist)
    }else{
      setData(ulist)
    }
  }
  function useChage(a){ //长按通知改变
    setUs(a)
  }
  function useSelect(a){ //选中通知改变
    setLise(a)
  }
  function useDelete(a){  //删除选中便签
    if(a=='Basket'){
      for(let i in selist){
        for(let k in dlist){
          if(dlist[k].id==selist[i]){
            dlist.splice(k--,1)
            break
          }
        }
      }
    }else{
      for(let i in selist){
        for(let k in ulist){
          if(ulist[k].id==selist[i]){
            let dele=ulist.splice(k--,1)
            dele[0]['end']=new Date().getTime()
            dlist.unshift(dele[0])
            break
          }
        }
      }
    }
    resize()
  }
  function recovery(){ //恢复选中便签
    for(let i in selist){
      for(let k in dlist){
        if(dlist[k].id==selist[i]){
          let insert=false
          let arrs=dlist.splice(k--,1)
          for(let m in ulist){
            if(selist[i]>ulist[m].id){
              ulist.splice(m,0,arrs[0])
              insert=true
              break
            }
          }
          if(!insert){
            ulist.push(arrs[0])
          }
          break
        }
      }
    }
    resize()
  }
  function cover(id){ //恢复独立便签
    selist.push(id)
    setModal(true)
  }
  function resize(){ //重置函数
    localStorage.setItem('ulist',JSON.stringify(ulist))
    localStorage.setItem('dlist',JSON.stringify(dlist))
    setUs(false)
    setLise([])
    newData()
  }
  function toNote(id){
    let data
    for(let i in ulist){
      if(id==ulist[i].id){
        data=ulist[i]
      }
    }
    localStorage.setItem('new',JSON.stringify(data))
    props.history.push('./Add')
  }
  return (
    <div className="App" style={{width:Width,height:Height}}>
      <Header select={uset} selist={selist} onSelect={useSelect} onChange={useChage} witch={witch} switch={useWitch}/>
      <div className={conten}>
        {witch=='Basket'?
          <p>注意！位于废纸篓的便签将在30天后销毁！</p>:''
        }
        <div className="canList">
          {listL.map((e)=>{
            return <Cbox data={e} key={e.id} cover={cover} witch={witch} select={uset} selist={selist} onSelect={useSelect} onChange={useChage} toNote={toNote} witch={witch}/>
          })}
        </div>
        <div className="canList">
          {listR.map((e)=>{
            return <Cbox data={e} key={e.id} cover={cover} witch={witch} select={uset} selist={selist} onSelect={useSelect} onChange={useChage} toNote={toNote} witch={witch}/>
          })}
        </div>
      </div>
      <Modal data={modalData}/>
      <Delete open={uset} witch={witch} delete={useDelete} recovery={recovery}/>
      {uset||witch=='Basket'?
        <Link to="./Add" className="Add right" ><img src={addIco}/></Link>:
        <Link to="./Add" className="Add" ><img src={addIco}/></Link>
      }
    </div>
  );
}

export default Home;
