import React from 'react'
const Modal=({Title,show,title,content,modalSwitch,delList,clickDelete})=>{
  const deletes=()=>{
    if(Title=='废纸篓'){
      modalSwitch(false);
      
    }else{
      modalSwitch(false);
      clickDelete(delList)
    }
  }
  if(show){
    return(
      <div className="modal">
        <span className="before" onClick={()=>{modalSwitch(false)}}/>
        <div className="permanent">
          <h3>{title}</h3>
          <p>{content}</p>
          <span className="cancel" onClick={()=>{modalSwitch(false)}}>取消</span>
          <span className="delete" onClick={()=>{deletes()}}>确定</span>
        </div>
      </div>
    )
  }else{
    return('')
  }
}
export default Modal;