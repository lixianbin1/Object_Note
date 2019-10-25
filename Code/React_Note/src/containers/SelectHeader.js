import {connect} from 'react-redux'
import {setTitle,setSelect,delectList,selectBox} from '../actions'
import Header from '../components/Header'

const mapStateToProps=(state)=>{
  return({
    title:state.Title,
    seleBox:state.seleBox,
    select:state.Select,
    delList:state.DelList,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    setTitle:title=>dispatch(setTitle(title)),
    setSelect:select=>dispatch(setSelect(select)),
    delectList:arr=>dispatch(delectList(arr)),
    selectBox:data=>dispatch(selectBox(data)),
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)