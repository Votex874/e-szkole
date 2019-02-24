export const login = user => {
  return fetch('/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(res => {
      localStorage.setItem('usertoken', res)
      return res
    })
    .catch(err => {
      console.log(err)
    })
}