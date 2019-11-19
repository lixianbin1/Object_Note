import {connect} from 'react-redux';
import {openMenu,closeMenu} from '../actions'
import Menu from '../components/Menu'
const mapStateToProps=(state)=>{
  return({
    show:state.Menu,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    closeMenu:()=>{dispatch(closeMenu)},
  })
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu)