export default function({store, redirect}) {
  if (!store.getters['auth/isAuthenticated']) {
    redirect('/login?message=login')
  }
}