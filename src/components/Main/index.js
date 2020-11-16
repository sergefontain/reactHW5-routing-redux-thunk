import React from "react"
import { connect } from "react-redux"
import { fetchJoke } from "../../store/actions"

const mapStateToProps = (state) => ({
  jokeText: state.joke.text,
})

const mapDispatchToProps = (dispatch) => ({
  fetchJoke: fetchJoke(dispatch),
})

const Main = (props) => {
  // console.log("Joke -> props", props);

  const updateJoke = () => {
    props.fetchJoke()
  }

  React.useEffect(() => {
    updateJoke()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <p onClick={() => updateJoke()}>Joke: {props.jokeText}</p>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Main))
