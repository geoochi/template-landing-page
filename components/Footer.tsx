import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='w-full bg-gray-800 text-white'>
      <div className='max-w-7xl mx-auto py-6 px-4 md:px-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Product</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#features'>Features</Link>
              </li>
              <li>
                <Link href='#pricing'>Pricing</Link>
              </li>
              <li>
                <Link href='#'>Integrations</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Company</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#'>About Us</Link>
              </li>
              <li>
                <Link href='#'>Careers</Link>
              </li>
              <li>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Resources</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#'>Blog</Link>
              </li>
              <li>
                <Link href='#'>Documentation</Link>
              </li>
              <li>
                <Link href='#'>Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Follow Us</h3>
            <div className='flex space-x-4'>
              <Link href='#'>
                <Facebook className='h-6 w-6' />
              </Link>
              <Link href='#'>
                <Twitter className='h-6 w-6' />
              </Link>
              <Link href='#'>
                <Instagram className='h-6 w-6' />
              </Link>
              <Link href='#'>
                <Linkedin className='h-6 w-6' />
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <p>
            &copy; {new Date().getFullYear()} StreamLine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
