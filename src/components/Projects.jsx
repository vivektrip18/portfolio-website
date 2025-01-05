import animedb_pic from "../images/animedb_pic.png";
import medium_pic from "../images/medium_icon.png";
import vc from "../images/vc.png";
import kawasaki from "../images/kawasaki.png";
import * as motion from "motion/react-client"


export const Projects = () => {
    return (
        <div className="h-fit setting-z-index md:mt-20 pt-5 p-10" >

            <p className="text-white font-semibold  lg:text-4xl md:text-3xl sm:text:2xl text-lg">PROJECTS</p>
            <div className="flex  md:pr-10 md:ml-20 md:mr-20 md:mb-20 pr-5  rounded-3xl grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-10 " >


                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className=" rounded-2xl "
                >
                    <Animedb_card />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className=" rounded-3xl"
                >
                    <Blogging_card />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className=" rounded-3xl "
                >
                    <Vc_card />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="rounded-3xl "
                >
                    <Kawasaki_card />
                </motion.div>
            </div>
        </div>
    )
}

const Animedb_card = () => {
    return (
        <a href="https://github.com/vivektrip18/AnimeDB" target="_blank" rel="noopener noreferrer" className="shadow-3xl rounded-3xl  text-center  " >
            <p className="text-white md:text-2xl text-lg font-semibold ">AnimeDB</p>
            <img src={animedb_pic} alt="AnimeDB" className="rounded-xl  " />
            <p className="text-white  md:text-[12px] lg:text-[15px] text-[10px] pt-1 font-semibold text-left "
            >A web app that uses the Jikan API to display anime tiles with posters and titles, linking users to detailed MyAnimeList pages. Built with HTML, CSS, and JS.</p>
        </a>
    )
}
const Blogging_card = () => {
    return (
        <a href="https://github.com/vivektrip18/Blogging-Platform" target="_blank" rel="noopener noreferrer" className="shadow-3xl rounded-3xl  text-center  ">
            <p className="text-white md:text-2xl text-lg font-semibold">Blogging Website</p>
            <img src={medium_pic} alt="Medium" className="rounded-xl " />
            <p className="text-white md:text-[12px] lg:text-[15px] text-[10px] pt-1 font-semibold text-left">A full-stack blog app with React, Node.js, and PostgreSQL, featuring user authentication, responsive design, and seamless blog management.
            </p>
        </a>
    )
}
const Vc_card = () => {
    return (
        <a href="https://github.com/vivektrip18/video-calling-app" target="_blank" rel="noopener noreferrer" className="shadow-3xl rounded-3xl  text-center ">
            <p className="text-white md:text-2xl text-lg font-semibold">Video Calling App</p>
            <img src={vc} alt="VC App" className="rounded-xl " />
            <p className="text-white mt-2 md:text-[12px] lg:text-[15px] text-[10px] pt-1 font-semibold text-left">Seamlessly onnect and communicate with real-time video calling powered by WebRTC and Socket.IO. Create, manage, and join meeting rooms effortlessly with robust peer-to-peer streaming.
            </p>
        </a>
    )
}
const Kawasaki_card = () => {
    return (
        <a href="https://github.com/vivektrip18/kawasaki-homepage" target="_blank" rel="noopener noreferrer" className="shadow-3xl rounded-3xl  text-center ">
            <p className="text-white md:text-2xl text-lg font-semibold ">Kawasaki Homepage</p>
            <img src={kawasaki} alt="kawasaki homepage" className="rounded-xl" />
            <p className="text-white mt-2 md:text-[12px] lg:text-[15px] text-[10px] pt-1 font-semibold text-left ">A React-based site showcasing Kawasaki bikes with a Swiper-powered carousel and a responsive grid of featured models for an engaging user experience.</p>
        </a>
    )
}

