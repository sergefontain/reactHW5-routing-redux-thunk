export const fetchJoke = (chainDispatch) => () => {
  setTimeout(() => {
    fetch("https://icanhazdadjoke.com", {
      headers: {
        accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        chainDispatch((dispatch) =>
          dispatch({ type: "SET_JOKE", payload: data })
        )
      })
  }, 3000)
}

export const fetchUser = (chainDispatch) => () => {
  setTimeout(() => {
    fetch("https://randomuser.me/api/", {
      headers: {
        url: "https://randomuser.me/api/",
        accept: "application/json",
      },
    })
      .then((r) => r.json())
    .then((data) => {
      chainDispatch((dispatch) =>
        dispatch({ type: "SET_USER", payload: data })
      )
    })
  }, 3000)
}

export const checkLoginPass = (login, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      login === "admin" && password === "123" ? resolve("ok") : reject("wrong")
    }, 3000)
  })
}
