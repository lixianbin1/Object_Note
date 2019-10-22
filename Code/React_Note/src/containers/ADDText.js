import {connect} from 'react-redux'
import {setText} from '../actions'
import Textarea from '../components/Textarea'

const mapStateToProps=(state)=>{
  console.log(state)
  return({
    text:state.Text,
    date:state.Date,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    setText:title=>dispatch(setText(title)),
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Textarea)