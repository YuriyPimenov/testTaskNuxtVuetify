const listUser = [
  {
    id: 1,
    name: 'Admin',
    email: 'admin@mail.ru',
    img: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
    password: '$2a$10$NTRbXPbu/9BhNApdnmDVpOXNw.XKggvEw6QMa1VV2m1eXB8v.ZCbS'
}
]
class User{
  static findById(userId) {
    return new Promise((resolve)=>{
      const user = listUser.find(el => el.id == parseInt(userId))
      resolve(user)
    })
  }

  static findOne({email}) {
    return new Promise((resolve)=>{
      const user = listUser.find(el => el.email == email)
      resolve(user)
    })
  }
}

module.exports = User