import {connect} from 'react-redux'
import {setHeight,setWidth,setLeft,setRight} from '../actions'
import BoxSize from '../components/BoxSize'

const mapStateToProps = (state) => {
  return({
    height:state.Height,
    width:state.Width,
    title:state.Title,
  })
}

const mapDispatchToProps=(dispatch)=>{
  return({
    setHeight:height=>dispatch(setHeight(height)),
    setWidth:width=>dispatch(setWidth(width)),
    setLeft:data=>dispatch(setLeft(data)),
    setRight:data=>dispatch(setRight(data)),
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxSize)
