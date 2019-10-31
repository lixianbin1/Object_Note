import {connect} from 'react-redux'
import {selectBox,delectList,clickDelete} from '../actions'
import Footer from '../components/Footer'

const mapStateToProps=(state)=>{
  return({
    seleBox:state.seleBox,
    delList:state.DelList,
    title:state.Title,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    clickDelete:(data)=>{
      dispatch(clickDelete(data));
      dispatch(selectBox(false));
      dispatch(delectList([]));
    },
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)