import {connect} from 'react-redux'
import {setTitle,setSelect} from '../actions'
import Header from '../components/Header'

const mapStateToProps=(state)=>{
  return({
    title:state.Title,
    select:state.Select,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    setTitle:title=>dispatch(setTitle(title)),
    setSelect:select=>dispatch(setSelect(select)),
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)