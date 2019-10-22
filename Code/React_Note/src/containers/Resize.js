import {connect} from 'react-redux'
import {setHeight,setWidth} from '../actions'
import BoxSize from '../components/BoxSize'

const mapStateToProps = (state) => {
  return({
    height:state.Height,
    width:state.Width
  })
}

const mapDispatchToProps=(dispatch)=>{
  return({
    setHeight:height=>dispatch(setHeight(height)),
    setWidth:width=>dispatch(setWidth(width)),
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxSize)
