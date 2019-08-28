let initState = {
  heading: "",
  description: ""
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE":
      console.log(action);

      return {
        heading: action.payload,
          description: action.payload
      };
    case "SUBMIT":
      console.log("ef", action.payload);
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;