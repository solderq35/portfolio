/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'

const navigation = [
  { name: 'Home', href:"/", current: false },
  { name: 'Projects', href: 'projects', current: false },
  { name: 'Resume', href: 'https://drive.google.com/file/d/1CqM_wI6JGQeAJnHvVDDWbIs2lCKXOWRO/view?usp=sharing', current: false },
  { name: 'Github', href: 'https://github.com/solderq35', current: false },
  { name: 'Email', href: 'mailto:huangjeff.cs@gmail.com', current: false },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/huangjeffcs/', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="">
            <div className="relative flex items-center justify-between h-16">

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a

                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-gray-100 hover:bg-gray-700 hover:text-white' : 'text-gray-100 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium text-lg'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
