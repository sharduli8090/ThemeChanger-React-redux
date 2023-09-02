const initialState = {
  theme: false,  
};

const reducer = (state = initialState, action) => {
  console.log("reducre")
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