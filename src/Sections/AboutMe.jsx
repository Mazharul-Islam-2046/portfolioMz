import InView from "../Animation/InView";


const AboutMe = () => {
    return (
        <div id="about" className="mb-16 relative grid grid-cols-1 gap-y-8 md:grid-cols-2">
            <div className="text-left p-2 md:p-10">
                <InView>
                    <h2 className="text-3xl md:text-4xl font-secondary font-bold mb-4 md:mb-8 text-orange-400">About Me</h2>
                </InView>
                <InView>
                    <p className="md:w-10/12 leading-relaxed md:leading-loose font-primary text-lg md:text-xl text-gray-700">I am Junior Frontend Developer with a passion for creating websites that are not just functional but also easy on the eyes. I specialize in React JS, Express JS, Node JS, and MongoDB, and I am always excited to explore the latest in AI and tech.

                        Recently, I have been playing around with Next JS and Material-UI (MUI) to add some extra flair to my work. I believe in keeping things simple and reliable</p>
                </InView>
            </div>

            <div className="flex justify-center">
                <InView>
                <img className="h-4/5" src="https://i.postimg.cc/8CnNMjTT/Untitled-design-1.png" alt="" />
                </InView>
            </div>

        </div>
    );
};

export default AboutMe;