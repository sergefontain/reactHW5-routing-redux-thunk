import React from "react"
import { connect } from "react-redux"
import { fetchUser } from "../../store/actions"

const mapStateToProps = (state) => ({
  firstName: state.user.name,
  lastName: state.user.familyName,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: fetchUser(dispatch),
})

const UserProfile = (props) => {
  const updateUser = () => {
    props.fetchUser()
  }

  React.useEffect(() => {
    updateUser()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <p onClick={() => updateUser()}>
        User: <span>{props.firstName}</span> <span>{props.lastName}</span>
      </p>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UserProfile))
