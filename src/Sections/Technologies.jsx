import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import InView from "../Animation/InView";
const Technologies = () => {
    return (
        <div id="technologies" className="mb-4 md:mb-16 pb-4 md:pb-20">
            <InView>
            <h2 className="text-3xl md:text-4xl text-gray-700 font-secondary font-bold mb-12">- Technologies I Work With -</h2>
            </InView>
            <InView>
                <div className="flex justify-center text-4xl md:text-7xl mx-auto gap-4 md:gap-8 mb-8">
                <FaHtml5 className="text-yellow-400"/>
                <FaCss3Alt className="text-blue-500"/>
                <IoLogoJavascript className="text-yellow-400"/>
                <FaReact className="text-blue-400"/>
                <IoLogoFirebase className="text-yellow-400"/>

            </div>
            <div className="flex justify-center text-4xl md:text-7xl mx-auto gap-5 md:gap-8">
                <FaNodeJs className="text-green-500"/>
                <SiExpress/>
                <BiLogoMongodb className="text-green-600"/>
                <FaGithub/>
            </div>
            </InView>
            
        </div>
    );
};

export default Technologies;