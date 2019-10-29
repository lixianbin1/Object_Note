import React from 'react'
import {Link} from 'react-router-dom'
import addIco from '../static/images/add.png'
import ListQueue from '../containers/ListQueue' 


const List=({title,seleBox,history,leftdata,rightdata})=>{
  return(
    <div className="Content">
      {title=='废纸篓'?
        <p>注意！位于废纸篓的便签将在30天后销毁！</p>:''
      }
      <div className="canList" >
        {leftdata.map((e)=>(
          <ListQueue key={e.id} data={e} history={history}/>
        ))}
      </div>
      <div className="canList">
        {rightdata.map((e)=>(
          <ListQueue key={e.id} data={e} history={history}/>
        ))}
      </div>
      {title!=='废纸篓'&&seleBox==false?
        <Link to="./Add" className="Add" ><img src={addIco}/></Link>:
        <Link to="./Add" className="Add right" ><img src={addIco}/></Link>
      }
    </div>
  )

}

export default List