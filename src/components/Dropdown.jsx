import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Github, Leetcode, Linkedin, Resume } from './Links'

export const DropDown = () => {
    return <div >
        <Menu as="div" className="relative  inline-block text-left dropdown">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-white shadow-lg  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in bg-black"
            >
                <div className="py-1 bg-black">
                    <MenuItem>
                        <a
                            className="block px-4 py-2 text-sm flex "
                        >
                            <Github /> 
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            className="block flex px-4 py-2 text-sm"
                        >
                            <Leetcode /> 
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            className="flex block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            <Linkedin /> 
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            type="submit"
                            className="block flex w-full px-4 py-2 text-left text-sm  " style={{alignItems:"left"}}
                        >
                            <Resume /> 
                        </a>
                    </MenuItem>

                </div>
            </MenuItems>
        </Menu>
    </div>
}