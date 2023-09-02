const initialState = {
  theme: false,  
};

const reducer = (state = initialState, action) => { 
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;