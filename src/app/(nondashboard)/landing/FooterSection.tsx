import Link from 'next/link'
import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook,faInstagram,faTwitter,faLinkedin,faYoutube} from "@fortawesome/free-brands-svg-icons"

const FooterSection = () => {
  return (
    <footer className='border-t border-gray-200 py-20'>
        <div className='max-w-4xl mx-auto px-6 sm:px-8 '>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-4'>
                     <Link href="/" className='text-xl font-bold' scroll={false}>
                      Rentiful
                     </Link>
                </div>
                <nav className='mb-4 '>
                  <ul className='flex space-x-6'>
                    <li>
                       <Link href="/about">About Us</Link>
                    </li>
                    <li>
                       <Link href="/about">Contact Us</Link>
                    </li>
                    <li>
                       <Link href="/about">FAQ</Link>
                    </li>
                    <li>
                       <Link href="/about">Terms</Link>
                    </li>
                    <li>
                       <Link href="/about">Privacy</Link>
                    </li>
                  </ul>
                </nav>
                <div className='flex space-x-4'>
                    <a href='#' aria-label='Facebook' className='hover:text-primary-600'>
                       <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a href='#' aria-label='Facebook' className='hover:text-primary-600'>
                       <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href='#' aria-label='Facebook' className='hover:text-primary-600'>
                       <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href='#' aria-label='Facebook' className='hover:text-primary-600'>
                       <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href='#' aria-label='Facebook' className='hover:text-primary-600'>
                       <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                </div>
              </div>
              <div className='mt-8 text-center text-sm text-gray-500 flex justify-center space-x-4'>
                  <span></span>
                  <Link href="/privacy">
                    Privacy Policy
                  </Link>
                  <Link href="/terms">
                    Terms of Service
                  </Link>
                  <Link href="/cookie">
                    Cookie Policy
                  </Link>
              </div>
        </div>
    </footer>
  )
}

export default FooterSection
