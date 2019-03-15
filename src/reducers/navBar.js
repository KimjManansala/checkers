
  function deepCopy(x) {
    return JSON.parse(JSON.stringify(x));
  }
  
  let initial = 'Checkers H vs H'

  const navBarReducer = (state = initial, action) =>{
      let newState= deepCopy(state)
    switch(action.type){
     case 'CHANGE_TAB':
        newState= action.value
        return newState
        default:
        return state
    }
  }

  export default navBarReducer