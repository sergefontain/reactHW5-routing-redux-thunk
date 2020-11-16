const initialState = {
  id: "",
  text: "",
}

export default function JokeReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_JOKE":
      return {
        ...state,
        id: action.payload.id,
        text: action.payload.joke,
      }
    default:
      return state
  }
}
