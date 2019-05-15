export const isUserLogged = () => sessionStorage.getItem('user')
export const isAdminLogged = () => sessionStorage.getItem('admin')
export const isLogged = () => sessionStorage.getItem('user') || sessionStorage.getItem('admin')