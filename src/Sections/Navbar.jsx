import InView from "../Animation/InView";


const Navbar = () => {
    return (
        <div>
            <InView>
            <div className='flex justify-between px-5 pb-8 pt-2 border-b-2 border-gray-100'>
                <div className='text-2xl uppercase font-secondary font-bold text-gray-800'><a href="#">Mazharul Islam</a></div>
                <div className='font-secondary flex gap-x-7 font-semibold text-gray-700'>
                    <div className='border-l-0 border-purple-700 hover:text-purple-700 hover:border-b-2'><a href="#">Home</a></div>
                    <div className='border-l-0 border-purple-700 hover:text-purple-700 hover:border-b-2'><a href="#about">About Me</a></div>
                    <div className='border-l-0 border-purple-700 hover:text-purple-700 hover:border-b-2'><a href="#projects">My Projects</a></div>
                    <div className='border-l-0 border-purple-700 hover:text-purple-700 hover:border-b-2'><a href="#">Contact Me</a></div>
                </div>
            </div>
            </InView>
        </div>
    );
};

export default Navbar;