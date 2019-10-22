import {connect} from 'react-redux'
import {setTitle} from '../actions'
import Footer from '../components/Footer'

const mapStateToProps=(state)=>{
  return({
    title:state.Title,
    select:state.Select,
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
)(Footer)