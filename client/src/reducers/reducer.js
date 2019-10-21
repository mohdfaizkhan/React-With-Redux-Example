
const iState={
    text:'',
    myWishes:[{_id:1,wish:"loading"}]
}

const reducer = (state=iState,action)=>{
switch(action.type){
  case 'UPDATE_INPUT' : return {
        ...state,
        text:action.payload
    } 
   case 'GET_WISH': return {
    ...state, 
    myWishes: action.payload
   }
   case 'ADD_WISH': return {
       myWishes: [...state.myWishes,action.payload]
   }
   case 'DELETE_WISH': 
    const newWishes = state.myWishes.filter(item=>{
        return item._id !== action.payload._id
    })
    return {
       ...state,
       mywishes:newWishes
   };
   default:return state;
}

}
  

export default reducer;