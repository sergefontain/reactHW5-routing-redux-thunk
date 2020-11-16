const initialState = {
  name: "",
  familyName: "",
}

export default function JokeReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        name: action.payload.results[0].name.first,
        familyName: action.payload.results[0].name.last,
      }
    default:
      return state
  }
}
