import {connect} from 'react-redux'
import {setTData} from '../actions'
import Textarea from '../components/Textarea'

const mapStateToProps=(state)=>{
  return({
    TData:state.TData,
    title:state.Title,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    setTData:data=>dispatch(setTData(data)),
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Textarea)