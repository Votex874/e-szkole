export const login = user => {
  return fetch('/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(res => {
      console.log(typeof res)
      localStorage.setItem('usertoken', res)
      return res
    })
    .catch(err => {
      console.log(err)
    })
}