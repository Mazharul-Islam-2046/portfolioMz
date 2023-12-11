

const AboutMe = () => {
    return (
        <div className="mb-16 grid grid-cols-2">
            <div className="text-left p-10">
            <h2 className="text-4xl font-secondary font-bold mb-8 text-gray-700">About Me</h2>
            <p className="w-10/12 leading-loose font-primary text-xl text-gray-700">I am Junior Frontend Developer with a passion for creating websites that are not just functional but also easy on the eyes. I specialize in React JS, Express JS, Node JS, and MongoDB, and I am always excited to explore the latest in AI and tech.

                Recently, I have been playing around with Next JS and Material-UI (MUI) to add some extra flair to my work. I believe in keeping things simple and reliable</p>
            </div>
            <div className="flex justify-center">
                <img className="h-4/5" src="https://i.postimg.cc/8CnNMjTT/Untitled-design-1.png" alt="" />
            </div>
        </div>
    );
};

export default AboutMe;