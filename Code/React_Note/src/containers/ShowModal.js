import {connect} from 'react-redux';
import {selectBox,delectList,clickDelete,modalSwitch} from '../actions'
import Modal from '../components/Modal'
const mapStateToProps=(state)=>{
  return({
    Title:state.Title,
    show:state.Modal.show,
    title:state.Modal.title,
    content:state.Modal.content,
    delList:state.DelList,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    modalSwitch:(show,title,content)=>{dispatch(modalSwitch(show,title,content))},
    clickDelete:(data)=>{
      dispatch(clickDelete(data));
      dispatch(selectBox(false));
      dispatch(delectList([]));
    },
  })
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal)