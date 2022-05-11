import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import logo from '../Images/LOGO.png'

export default function Header() {
    return (
        <Popover className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-14 w-auto sm:h-16"
                                src={logo}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <a href="#about" className="text-base font-medium text-white hover:text-blue-500">
                            About
                        </a>
                        <a href="#projects" className="text-base font-medium text-white hover:text-blue-500">
                            Projects
                        </a>
                        <a href="#experience" className="text-base font-medium text-white hover:text-blue-500">
                            Experience
                        </a>
                        <a href="#resume" className="text-base font-medium text-white hover:text-blue-500">
                            Resume
                        </a>
                        <a href="#contact" className="text-base font-medium text-white hover:text-blue-500">
                            Contact
                        </a>
                    </Popover.Group>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden mytheme-bg">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-16 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <a href="#about" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white animate-[wiggle_0.6s_linear_infinite] bg-gradient-to-r from-cyan-500 to-blue-500">
                                    About
                                </a>
                            </div>
                            <div>
                                <a href="#projects" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white animate-[wiggle_0.6s_linear_infinite] delay-400 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-indigo-700">
                                    Projects
                                </a>
                            </div>
                            <div>
                                <a href="#experience" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white animate-[wiggle_0.6s_linear_infinite] delay-800 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-indigo-700">
                                    Experience
                                </a>
                            </div>
                            <div>
                                <a href="#resume" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white animate-[wiggle_0.6s_linear_infinite] delay-100 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-indigo-700">
                                    Resume 
                                </a>
                            </div>
                            <div>
                                <a href="#contact" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white animate-[wiggle_0.6s_linear_infinite] delay-600 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-indigo-700">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}