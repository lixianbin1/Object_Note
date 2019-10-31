import {connect} from 'react-redux'
import {setLRlist,windowResize,setUlist} from '../actions'
import BoxSize from '../components/BoxSize'

const mapStateToProps = (state) => {
  console.log(state)
  return({
    LRlist:state.setLRlist,
    height:state.window.height,
    width:state.window.width,
    title:state.Title,
  })
}

const mapDispatchToProps=(dispatch)=>{
  return({
    setUlist:title=>dispatch(setUlist(title)),
    setLRlist:name=>dispatch(setLRlist(name)),
    windowResize:()=>dispatch(windowResize())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxSize)
