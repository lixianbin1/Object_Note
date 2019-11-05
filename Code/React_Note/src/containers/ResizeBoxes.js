import {connect} from 'react-redux'
import {windowResize,setUlist} from '../actions'
import BoxSize from '../components/BoxSize'

const mapStateToProps = (state) => {
  return({
    ulist:state.Ulist,
    height:state.window.height,
    width:state.window.width,
    title:state.Title,
  })
}

const mapDispatchToProps=(dispatch)=>{
  return({
    setUlist:title=>dispatch(setUlist(title)),
    windowResize:()=>dispatch(windowResize())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxSize)
