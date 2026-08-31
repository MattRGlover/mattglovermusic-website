const Footer = () => (
  <footer className="relative py-10 px-6 border-t border-white/5">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Matt Glover. All rights reserved.</p>
      <p>Stonebridge Records</p>
    </div>
  </footer>
)

export default Footer
