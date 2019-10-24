import React from 'react'
import {Link} from 'react-router-dom'
import addIco from '../static/images/add.png'
import ListQueue from '../containers/ListQueue' 

const List=({text,history,leftdata,rightdata})=>{
  return(
    <div className="Content">
      {text=='废纸篓'?
        <p>注意！位于废纸篓的便签将在30天后销毁！</p>:''
      }
      <div className="canList">
        {leftdata.map((e)=>(
          <ListQueue key={e.id} data={e} history={history}/>
        ))}
      </div>
      <div className="canList">
        {rightdata.map((e)=>(
          <ListQueue key={e.id} data={e} history={history}/>
        ))}
      </div>
      <Link to="./Add" className="Add" ><img src={addIco}/></Link>
    </div>
  )

}

export default List