export const AppReducer=(state,action)=>{
  switch(action.type){
    case 'setTitle':
      return{
        ...state,
        title:action.data
      }
    default:
      return state;
  }
}
export const resizeReducer=(state,action)=>{
  switch(action.type){
    case 'reSize':
      return {
        ...state,
        height:action.data.height,
        width:action.data.width
      };
    default:
      return state;
  }
}
export const HomeReducer=(state,action)=>{
  switch(action.type){
    case 'setUlist':
      return{
        ...state,
        uList:action.data,
      }
    case 'setTitle':
      return{
        ...state,
        title:action.data
      }
    case 'setSelect':
      return{
        ...state,
        seleBox:action.data
      }
    case 'setDList':
      return{
        ...state,
        seleList:action.data
      }
    case 'setModal':
      return{
        ...state,
        showModal:action.data.show,
        modaltext:{
          title:action.data.title,
          content:action.data.content,
          fun:action.data.fun
        }
      }
    default:
      return state;
  }
}
export const AddReducer=(state,action)=>{
  switch(action.type){
    case 'setObj':
      return{
        ...state,
        id:action.data.id,
        text:action.data.text,
        time:action.data.time,
      }
    default:
      return state;
  }
}

export default HomeReducer