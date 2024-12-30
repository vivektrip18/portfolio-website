import animedb_pic from "../images/animedb_pic.png";
import medium_pic from "../images/medium_icon.png";
import vc from "../images/vc.png";
import kawasaki from  "../images/kawasaki.png";
import * as motion from "motion/react-client"


export const Projects = () => {
    return (
        <div className="h-fit setting-z-index" >
            <div className=" pl-20  ml-10 mt-20 justify-center shadow-3xl">
                <p className="text-white text-4xl font-semibold ">PROJECTS</p>
            </div>

            <div className="flex pl-10 pr-10 ml-20 mr-20 mb-20 rounded-3xl shadow-2xl grid grid-cols-2 grid-rows-2 gap-10">


                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className=" rounded-2xl p-5"
                >
                    <Animedb_card />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className=" rounded-3xl p-5"
                >
                    <Blogging_card />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className=" rounded-3xl pl-5 pr-5 pb-5"
                >
                    <Vc_card />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className=" rounded-3xl pl-5 pr-5 pb-5"
                >
                    <Kawasaki_card />
                </motion.div>
            </div>
        </div>
    )
}

const Animedb_card = () => {
    return (
        <a href="https://github.com/vivektrip18/AnimeDB" target="_blank" rel="noopener noreferrer" className="shadow-3xl rounded-3xl p-5 text-center ">
            <p className="text-white text-2xl font-semibold ">AnimeDB</p>
            <img src={animedb_pic} alt="AnimeDB" className="rounded-xl mt-2 " />
            <p className="text-white mt-2 text-md font-semibold text-left ">A web app that uses the Jikan API to display anime tiles with posters and titles, linking users to detailed MyAnimeList pages. Built with HTML, CSS, and JS.</p>
        </a>
    )
}
const Blogging_card = () => {
    return (
        <a href="https://github.com/vivektrip18/Blogging-Platform" target="_blank" rel="noopener noreferrer" className="shadow-3xl rounded-3xl p-5 text-center  ">
            <p className="text-white text-2xl font-semibold">Blogging Website</p>
            <img src={medium_pic} alt="Medium" className="rounded-xl mt-2" />
            <p className="text-white mt-2 text-md font-semibold text-left">A full-stack blog app with React, Node.js, and PostgreSQL, featuring user authentication, responsive design, and seamless blog management.
            </p>
        </a>
    )
}
const Vc_card = () => {
    return (
        <a href="https://github.com/vivektrip18/video-calling-app" target="_blank" rel="noopener noreferrer" className="shadow-3xl rounded-3xl p-5 text-center ">
            <p className="text-white text-2xl font-semibold">Video Calling App</p>
            <img src={vc} alt="VC App" className="rounded-xl mt-2" />
            <p className="text-white mt-2 text-md font-semibold text-left">Seamlessly connect and communicate with real-time video calling powered by WebRTC and Socket.IO. Create, manage, and join meeting rooms effortlessly with robust peer-to-peer streaming.
            </p>
        </a>
    )
}
const Kawasaki_card = () => {
    return (
        <a href="https://github.com/vivektrip18/kawasaki-homepage" target="_blank" rel="noopener noreferrer" className="shadow-3xl rounded-3xl p-5 text-center ">
            <p className="text-white text-2xl font-semibold ">Kawasaki Homepage</p>
            <img src={kawasaki} alt="kawasaki homepage" className="rounded-xl mt-2" />
            <p className="text-white mt-2 text-md font-semibold text-left ">A React-based site showcasing Kawasaki bikes with a Swiper-powered carousel and a responsive grid of featured models for an engaging user experience.</p>
        </a>
    )
}

