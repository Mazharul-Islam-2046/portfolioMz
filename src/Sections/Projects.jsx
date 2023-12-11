import InView from "../Animation/InView";


const Projects = () => {
    return (
        <div id="projects" className="mb-14 mt-16">
            <div>
                <h2 className="text-4xl text-gray-700 font-secondary font-bold mb-4">- Projects -</h2>
            </div>
            <div className="grid grid-cols-2 mx-auto py-6">
                {/* Text */}
                <InView>
                    <div className="px-10 py-14 text-left">
                        <h3 className="text-3xl font-secondary font-semibold mb-8">Blood Donation</h3>
                        <p className="text-xl font-primary leading-loose mb-12">In This Project I have made a platform to share Blood Donation requests and also the donors can Donate blood their to them</p>
                        <ul className="list-disc leading-loose text-lg font-primary">
                            <li>
                                <p>This Project Has Back End Made With Express JS and Node Js</p>
                            </li>
                            <li>
                                <p>This Project Has Dynamic Database made with MongoDB Data Base</p>
                            </li>
                            <li>
                                <p>This Project Dashboard For Admin, Volunteer and Donor</p>
                            </li>
                        </ul>
                        <button className="text-lg font-semibold font-secondary py-2 px-6 border-2 border-gray-800 rounded-md mt-12 hover:bg-gray-900 hover:text-white"><a href="https://blood-donation-client-e03ab.web.app/">Live Link</a></button>
                    </div>
                </InView>

                {/* Image */}
                <InView>
                    <div className="flex justify-center p-10">
                        <img className="h-full" src="https://i.postimg.cc/YS4f6cc1/blooddonationmockup.png" alt="" />
                    </div>
                </InView>
            </div>
            <div className="grid grid-cols-2 mx-auto py-6">
                {/* Image */}
                <InView>
                    <div className="flex justify-center p-10">
                        <img className="h-full" src="https://i.postimg.cc/L4PnMczx/blooddonationmockup.png" alt="" />
                    </div>
                </InView>

                {/* Text */}
                <InView>
                    <div className="px-10 py-14 text-left">
                        <h3 className="text-3xl font-secondary font-semibold mb-8">Camera And Gear Renting Site</h3>
                        <p className="text-xl font-primary leading-loose mb-12">In This Project I have made a platform to list your camera and gears for rent and also you can rent form there</p>
                        <ul className="list-disc leading-loose text-lg font-primary">
                            <li>
                                <p>This Project Has Back End Made With Express JS and Node Js</p>
                            </li>
                            <li>
                                <p>This Project Has Dynamic Database made with MongoDB Data Base</p>
                            </li>
                            <li>
                                <p>This Project Dashboard for users</p>
                            </li>
                        </ul>
                        <button className="text-lg font-semibold font-secondary py-2 px-6 border-2 border-gray-800 rounded-md mt-12 hover:bg-gray-900 hover:text-white"><a href="https://camr-e98af.web.app/">Live Link</a></button>
                    </div>
                </InView>
            </div>
            {/* <div> */}
            {/* Text */}
            {/* <div></div> */}

            {/* Image */}
            {/* <div></div> */}
            {/* </div> */}
        </div>
    );
};

export default Projects;