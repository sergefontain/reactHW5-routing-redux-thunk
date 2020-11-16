import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { checkLoginPass } from "../../store/actions"

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { setEmail: (payload) => ({ type: "LOGIN_SUCCESS", payload }) },
    dispatch
  )

const LoginForm = (props) => {
  const [login, setLogin] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit = async (e) => {
    e.preventDefault() // нужно, чтобы анулировать умолчательное поведение
    // браузера при отправке формы, которая перезагружает страницу. Если
    // это произойдет, то мы потеряем данные и нечего будет отправлять
    // на сервер...
    // Далее по коду должен идти запрос на сервер для проверки введенного
    // логина и пароля. Вместо него вызываем функцию, имитирующую запрос...
    try {
      await checkLoginPass(login, password)
      props.setEmail(login)
      componentUnmount()
    } catch (e) {
      pageRefresh(e)
    }
  }

  const componentUnmount = () => {
    props.setIsChecked(true)
  }

  const pageRefresh = (e) => {
    alert(`Check your credentials. Your input is ${e}.`)
    var segmentCount = 1;
        var l = window.location;
        l.replace(
            l.protocol + '//' + l.hostname + ( l.port ? ':' + l.port : '' ) +
            l.pathname.split( '/' ).slice( 0, 1 + segmentCount ).join( '/' )
        );
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
      <input value={login} onChange={(e) => setLogin(e.target.value)} />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
    </form>
  )
}

//если в компоненте нет состояния и нужно только менять значение, то
// вместо mapStateToProps в коннект передается null, а сама функция
// mapStateToProps в компоненте не создается.
export default connect(null, mapDispatchToProps)(React.memo(LoginForm))
