export const login = () => {
  return fetch('/users', {
    method: 'GET',
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
      console.log(err)
    })
}