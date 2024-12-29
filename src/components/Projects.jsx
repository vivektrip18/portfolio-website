import animedb_pic from "../images/animedb_pic.png";
import medium_pic from "../images/medium_icon.png";
import vc from "../images/vc.png";
import * as motion from "motion/react-client"


export const Projects = () => {
    return (
        <div className="h-fit">
            <div className=" pl-20  ml-10 mt-20 justify-center shadow-3xl">
                <p className="text-white text-4xl font-semibold ">PROJECTS</p>
            </div>

            <div className="flex pl-5 pr-5 ml-20 mr-20 mb-20 rounded-3xl shadow-2xl grid grid-cols-3 gap-4">


                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="anime-db rounded-2xl p-2"
                >
                    <Animedb_card />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="blogging rounded-3xl p-5"
                >
                    <Blogging_card />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="vc rounded-3xl p-5"
                >
                    <Vc_card />
                </motion.div>
            </div>
        </div>
    )
}

const Animedb_card = () => {
    return (
        <a href="https://github.com/vivektrip18/AnimeDB" target="_blank" rel="noopener noreferrer" className="shadow-3xl rounded-3xl p-5 text-center ">
            <p className="text-white text-2xl font-semibold ">AnimeDB</p>
            <img src={animedb_pic} alt="AnimeDB" className="rounded-xl mt-2" />
            <p className="text-white mt-2 text-sm font-semibold text-left ">A web app that uses the Jikan API to display anime tiles with posters and titles, linking users to detailed MyAnimeList pages. Built with HTML, CSS, and JS.</p>
        </a>
    )
}
const Blogging_card = () => {
    return (
        <a href="https://github.com/vivektrip18/Blogging-Platform" target="_blank" rel="noopener noreferrer" className="shadow-3xl rounded-3xl p-5 text-center  ">
            <p className="text-white text-2xl font-semibold">Blogging Website</p>
            <img src={medium_pic} alt="Medium" className="rounded-xl mt-2" />
            <p className="text-white mt-2 text-sm font-semibold text-left">A full-stack blog app with React, Node.js, and PostgreSQL, featuring user authentication, responsive design, and seamless blog management.
            </p>
        </a>
    )
}
const Vc_card = () => {
    return (
        <a href="https://github.com/vivektrip18/video-calling-app" target="_blank" rel="noopener noreferrer" className="shadow-3xl rounded-3xl p-5 text-center ">
            <p className="text-white text-2xl font-semibold">Video Calling App</p>
            <img src={vc} alt="VC App" className="rounded-xl mt-2" />
            <p className="text-white mt-2 text-sm font-semibold text-left">Seamlessly connect and communicate with real-time video calling powered by WebRTC and Socket.IO. Create, manage, and join meeting rooms effortlessly with robust peer-to-peer streaming.
            </p>
        </a>
    )
}

