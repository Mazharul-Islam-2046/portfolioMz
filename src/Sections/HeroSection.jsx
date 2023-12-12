import { Typewriter } from "react-simple-typewriter";
import InView from "../Animation/InView";

const HeroSection = () => {
    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = '/resume.pdf'; 
        downloadLink.download = 'resume.pdf';
        downloadLink.click();
      };
    return (
        <div className="h-[40vw] max-h-[600px] flex bg-[url('https://i.postimg.cc/tCFvmD7f/images.png')] mb-14 text-left">
            
            <div className="bg-white bg-opacity-80 w-full px-7 flex flex-col pt-28"><InView>
                <p className="text-2xl font-secondary font-semibold mb-3">Hello....</p>
                <h1 className="text-5xl uppercase font-secondary font-bold ">I am <span className="text-orange-400">Mazharul Islam</span></h1>
                <p className="text-2xl font-primary font-medium mt-6">I am a <span><Typewriter
                words={['Front End Developer', 'Junior Web Developer', 'React Developer']}
                loop={Infinity}
                cursor
                cursorStyle='_'
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1000}
                /></span></p>
                <button onClick={handleDownload} className="border-2 border-gray-800 rounded-md text-lg px-6 py-3 w-[20vw] mt-20 hover:bg-gray-800 hover:text-white">Download My Resume</button>
</InView>
            </div>
            
        </div>
    );
};

export default HeroSection;