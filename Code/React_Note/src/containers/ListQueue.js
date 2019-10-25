import {connect} from 'react-redux'
import {setText,setDate,setTData,selectBox,delectList} from '../actions'
import Queue from '../components/Queue'

const mapStateToProps=(state)=>{
  return({
    delList:state.DelList,
    seleBox:state.seleBox,
    title:state.Title,
  })
}

const mapDispatchToProps=(dispatch)=>{
  return({
    setText:text=>dispatch(setText(text)),
    setDate:date=>dispatch(setDate(date)),
    setTData:data=>dispatch(setTData(data)),
    selectBox:data=>dispatch(selectBox(data)),
    delectList:data=>dispatch(delectList(data))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue)