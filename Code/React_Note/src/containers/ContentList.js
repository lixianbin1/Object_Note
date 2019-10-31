import {connect} from 'react-redux'
import {setTitle} from '../actions'
import List from '../components/List'

const mapStateToProps=(state)=>{
  return({
    title:state.Title,
    seleBox:state.seleBox,
    leftdata:state.setLRlist.ListL,
    rightdata:state.setLRlist.ListR,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    setTitle:title=>dispatch(setTitle(title))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)