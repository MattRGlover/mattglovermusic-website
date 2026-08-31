import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
    <h1 className="font-display text-6xl gradient-text mb-4">404</h1>
    <p className="text-gray-400 mb-8">This page doesn't exist.</p>
    <Link
      to="/"
      className="px-7 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-tertiary text-dark-900 font-semibold hover:opacity-90 transition-opacity"
    >
      Back home
    </Link>
  </div>
)

export default NotFoundPage
