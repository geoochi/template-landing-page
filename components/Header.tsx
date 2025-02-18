import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className='w-full bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto py-4 px-6 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link href='/' className='text-2xl font-bold text-blue-600'>
            StreamLine
          </Link>
        </div>
        <nav className='hidden md:flex space-x-4'>
          <Link href='#features' className='text-gray-600 hover:text-gray-900'>
            Features
          </Link>
          <Link
            href='#testimonials'
            className='text-gray-600 hover:text-gray-900'
          >
            Testimonials
          </Link>
          <Link href='#pricing' className='text-gray-600 hover:text-gray-900'>
            Pricing
          </Link>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}
