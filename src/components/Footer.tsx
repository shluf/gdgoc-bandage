import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white">
      <div className="mx-4 px-8 py-8">
        <div className="mt-8 pt-8 border-t text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} Bandage. All rights reserved.</p>
          <p className='mt-3'>Made with ❤️ by <Link href="https://github.com/shluf">@shluf</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer