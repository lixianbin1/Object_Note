import {connect} from 'react-redux';
import {selectBox,delectList,clickDelete,delectModal,resumeModal,closeModal,setUlist} from '../actions'
import Modal from '../components/Modal'
const mapStateToProps=(state)=>{
  return({
    Title:state.Title,
    show:state.Modal.show,
    title:state.Modal.title,
    content:state.Modal.content,
    delList:state.DelList,
    fun:state.Modal.function,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    delectModal:()=>{dispatch(delectModal)},
    resumeModal:()=>{dispatch(resumeModal)},
    closeModal:()=>{dispatch(closeModal)},
    getUlist:title=>{dispatch(setUlist(title))},
    clickDelete:(data,time)=>{
      if(data){dispatch(clickDelete(data,time));}
      dispatch(selectBox(false));
      dispatch(delectList([]));
    },
  })
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal)