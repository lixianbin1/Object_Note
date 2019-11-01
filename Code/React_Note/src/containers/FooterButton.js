import {connect} from 'react-redux'
import {modalSwitch} from '../actions'
import Footer from '../components/Footer'

const mapStateToProps=(state)=>{
  return({
    seleBox:state.seleBox,
    title:state.Title,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    modalSwitch:show=>dispatch(modalSwitch(show))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)