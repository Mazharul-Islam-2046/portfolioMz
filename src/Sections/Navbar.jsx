import React from "react";
import InView from "../Animation/InView";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { BiMenu } from "react-icons/bi";


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div>
            <InView>
                <div className='flex justify-between items-center px-5 pb-8 pt-2 border-b-2 border-gray-100'>
                    <div className='text-lg md:text-2xl uppercase font-secondary font-bold text-gray-800'><a href="#"><span className="text-orange-400">Mazharul</span> Islam</a></div>
                    <div className='font-secondary hidden md:flex gap-x-7 font-semibold text-gray-700'>
                        <div className='border-l-0 border-orange-400 hover:text-orange-400 hover:border-b-2'><a href="#">Home</a></div>
                        <div className='border-l-0 border-orange-400 hover:text-orange-400 hover:border-b-2'><a href="#about">About Me</a></div>
                        <div className='border-l-0 border-orange-400 hover:text-orange-400 hover:border-b-2'><a href="#technologies">Technologies</a></div>
                        <div className='border-l-0 border-orange-400 hover:text-orange-400 hover:border-b-2'><a href="#projects">My Projects</a></div>
                        <div className='border-l-0 border-orange-400 hover:text-orange-400 hover:border-b-2'><a href="#contactme">Contact Me</a></div>
                    </div>
                    <div className="flex md:hidden">
                        <button onClick={toggleDrawer} className="text-xl">
                            <BiMenu />
                        </button>
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='right'
                            className='bla bla bla'
                        >
                            <div className='font-secondary flex flex-col gap-y-4 text-left py-6 px-8 font-semibold text-gray-700'>
                                <div className='border-l-0 border-orange-400 hover:text-orange-400 hover:border-b-2'><a href="#">Home</a></div>
                                <div className='border-l-0 border-orange-400 hover:text-orange-400 hover:border-b-2'><a href="#about">About Me</a></div>
                                <div className='border-l-0 border-orange-400 hover:text-orange-400 hover:border-b-2'><a href="#technologies">Technologies</a></div>
                                <div className='border-l-0 border-orange-400 hover:text-orange-400 hover:border-b-2'><a href="#projects">My Projects</a></div>
                                <div className='border-l-0 border-orange-400 hover:text-orange-400 hover:border-b-2'><a href="#contactme">Contact Me</a></div>
                            </div>
                        </Drawer>
                    </div>
                </div>
            </InView>
        </div>
    );
};

export default Navbar;