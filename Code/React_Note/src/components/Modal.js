import React from 'react'
const Modal=({Title,show,title,content,fun,delectModal,resumeModal,closeModal,delList,clickDelete,getUlist})=>{
  const deletes=()=>{
    if(fun=='delete'){
      if(Title=='废纸篓'){
        let dlist=JSON.parse(localStorage.getItem('dlist'))
        for(let i=dlist.length-1;i>=0;i--){
          if(delList.indexOf(dlist[i].id)>-1){
            dlist.splice(i,1)
          }
        }
        localStorage.setItem('dlist',JSON.stringify(dlist))
        clickDelete()
        getUlist('dlist')
        closeModal()
      }else{
        clickDelete(delList,new Date().getTime())
        getUlist('ulist')
        closeModal()
      }
    }else if(fun=='resume'){
      let ulist=[],dlist=[],list=delList
      if(localStorage.getItem('ulist')){
        ulist=JSON.parse(localStorage.getItem('ulist'))
      }
      if(localStorage.getItem('dlist')){
        dlist=JSON.parse(localStorage.getItem('dlist'))
      }
      for(let u=dlist.length-1;u>=0;u--){
        let index=list.indexOf(dlist[u].id)
        if(index>=0){
          let del=dlist.splice(index,1)
          delete del[0].clearTime
          ulist=del.concat(ulist)
        }
      }
      localStorage.setItem('dlist',JSON.stringify(dlist))
      localStorage.setItem('ulist',JSON.stringify(ulist))
      clickDelete()
      getUlist('dlist')
      closeModal()
    }
  }
  if(show){
    return(
      <div className="modal">
        <span className="before" onClick={()=>{closeModal()}}/>
        <div className="permanent">
          <h3>{title}</h3>
          <p>{content}</p>
          <span className="cancel" onClick={()=>{closeModal()}}>取消</span>
          <span className="delete" onClick={()=>{deletes()}}>确定</span>
        </div>
      </div>
    )
  }else{
    return('')
  }
}
export default Modal;