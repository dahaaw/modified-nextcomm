import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import Image from 'next/image'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    {/* <Container clean className="mx-auto max-w-8xl px-6"> */}
    <div>
      <header className="bg-white py-3 border-b">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap items-center">
            {/* Brand */}
            <div className="flex-shrink-0 mr-5">
              <a href="/">
                <Image
                  src="/assets/images/logo.svg"
                  width={'180'}
                  height={'50'}
                  alt="Brand"
                />
              </a>
            </div>
            {/* Brand .//end */}
            {/* Search */}
            <div className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
              <input
                className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                type="text"
                placeholder="Search"
              />
              <button
                type="button"
                className="px-4 py-2 inline-block text-white border border-transparent bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <i className="fa fa-search" />
              </button>
            </div>
            {/* Search .//end */}
            {/* Actions */}
            <div className="flex items-center space-x-2 ml-auto">
              <a
                className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                href="#"
              >
                <i className="text-gray-400 w-5 fa fa-user" />
                <span className="hidden lg:inline ml-1">Sign in</span>
              </a>
              <a
                className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                href="#"
              >
                <i className="text-gray-400 w-5 fa fa-heart" />
                <span className="hidden lg:inline ml-1">Wishlist</span>
              </a>
              <a
                className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                href="#"
              >
                <i className="text-gray-400 w-5 fa fa-shopping-cart" />
                <span className="hidden lg:inline ml-1">My cart</span>
              </a>
            </div>
            {/* Actions .//end */}
            {/* mobile-only */}
            <div className="lg:hidden ml-2">
              <button
                type="button"
                className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
              >
                <span className="sr-only">Open menu</span>
                <i className="fa fa-bars fa-lg" />
              </button>
            </div>
            {/* mobile-only //end  */}
          </div>
          {/* flex grid //end */}
        </div>
        {/* container //end */}
      </header>
      <nav className="relative shadow-sm">
        <div className="container max-w-screen-xl mx-auto px-4">
          {/* Bottom */}
          <div className="hidden lg:flex flex-1 items-center py-1">
            <Link
              className="px-3 py-2 rounded-md hover:bg-gray-100"
              href="/category"
            >
              Category
            </Link>
            <a className="px-3 py-2 rounded-md hover:bg-gray-100" href="#">
              About
            </a>
            <a className="px-3 py-2 rounded-md hover:bg-gray-100" href="#">
              Services
            </a>
            <a className="px-3 py-2 rounded-md hover:bg-gray-100" href="#">
              Projects
            </a>
            <a className="px-3 py-2 rounded-md hover:bg-gray-100" href="#">
              Offers
            </a>
            <a className="px-3 py-2 rounded-md hover:bg-gray-100" href="#">
              Others
            </a>
          </div>
          {/* Bottom //end */}
        </div>
        {/* container //end */}
      </nav>
    </div>
    {/* </Container> */}
  </NavbarRoot>
)

export default Navbar
