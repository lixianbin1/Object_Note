import {connect} from 'react-redux'
import {delectModal,resumeModal} from '../actions'
import Footer from '../components/Footer'

const mapStateToProps=(state)=>{
  return({
    seleBox:state.seleBox,
    title:state.Title,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    delectModal:()=>dispatch(delectModal),
    resumeModal:()=>dispatch(resumeModal),
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)