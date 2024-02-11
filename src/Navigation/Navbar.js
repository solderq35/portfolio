/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Portfolio', href: '/', target: '_self', rel: 'noreferrer', current: false },
  { name: 'Contact Me', href: '/contact', target: '_self', rel: 'noreferrer', current: false },
];

const resumeItem = { name: 'Resume', href: '/resume.pdf', target: '_blank', rel: 'noreferrer', current: false };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Fragment>
      <header className="sticky top-0 z-50">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center sm:ml-5">
                      <img className="block lg:hidden h-8 w-auto" src="/favicon.ico" alt="Workflow" />
                      <img className="hidden lg:block h-8 w-auto" src="/favicon.ico" alt="Workflow" />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            to={'../' + item.href}
                            key={item.name}
                            className={classNames(
                              item.current
                                ? 'text-gray-100 hover:bg-gray-700 hover:text-white'
                                : 'text-gray-100 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md font-medium text-lg'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                        <a
                          href={resumeItem.href}
                          target={resumeItem.target}
                          rel={resumeItem.rel}
                          className={classNames(
                            resumeItem.current
                              ? 'text-gray-100 hover:bg-gray-700 hover:text-white'
                              : 'text-gray-100 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md font-medium text-lg'
                          )}
                          aria-current={resumeItem.current ? 'page' : undefined}
                        >
                          {resumeItem.name}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button key={item.name} className={'w-full text-left'}>
                      <NavLink
                        to={'../' + item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    </Disclosure.Button>
                  ))}
                  <a
                    href={resumeItem.href}
                    target={resumeItem.target}
                    rel={resumeItem.rel}
                    className={classNames(
                      resumeItem.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={resumeItem.current ? 'page' : undefined}
                  >
                    {resumeItem.name}
                  </a>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </header>
    </Fragment>
  );
}
