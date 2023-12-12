import { Typewriter } from "react-simple-typewriter";
import InView from "../Animation/InView";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const HeroSection = () => {
    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = '/resume.pdf';
        downloadLink.download = 'resume.pdf';
        downloadLink.click();
    };
    return (
        <div className="h-auto lg:h-[40vw] max-h-[600px] relative flex bg-[url('https://i.postimg.cc/tCFvmD7f/images.png')] mb-14 text-left">

            <div className="bg-white bg-opacity-80 w-full px-2 md:px-7 flex flex-col pt-14 md:pt-28"><InView>
                <p className="text-xl md:text-2xl font-secondary font-semibold mb-3">Hello....</p>
                <h1 className="text-3xl md:text-5xl uppercase font-secondary font-bold ">I am <span className="text-orange-400">Mazharul Islam</span></h1>
                <p className="text-lg md:text-2xl font-primary font-medium mt-3 md:mt-6">I am a <span><Typewriter
                    words={['Front End Developer', 'Junior Web Developer', 'React Developer']}
                    loop={Infinity}
                    cursor
                    cursorStyle='_'
                    typeSpeed={90}
                    deleteSpeed={60}
                    delaySpeed={1000}
                /></span></p>
                <button onClick={handleDownload} className="border-2 border-gray-800 rounded-md md:text-lg px-6 py-3 w-auto md:w-[20vw] mt-8 md:mt-20 hover:bg-gray-800 hover:text-white">Download My Resume</button>
            </InView>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 text-2xl pr-6 bg-white bg-opacity-80">
                <a href="https://www.linkedin.com/in/md-mazharul-islam-mzshishir/"><FaLinkedin/></a>
                <div className="h-20 w-[2px] bg-gray-600"></div>
                <a href="https://github.com/Mazharul-Islam-2046"><FaGithub/></a>
                <div className="h-20 w-[2px] bg-gray-600"></div>
                <a href="https://twitter.com/Mzshishir2046"><FaTwitter/></a>
            </div>

        </div>
    );
};

export default HeroSection;