import reactjs from "../images/reactjs.png";
import * as motion from "motion/react-client";
import jslogo from "../images/jslogo.png";
import htmllogo from "../images/htmllogo.png"
import css3logo from "../images/CSS3_logo.svg";
import cpplogo from "../images/cpplogo.png";
import tslogo from "../images/tslogo.png";
import nodejslogo from "../images/nodejslogo.png";
import exjslogo from "../images/exjslogo.png";
import mysqllogo from "../images/mysqllogo.png";
import mongologo from "../images/mongologo.png";
import pythonlogo from "../images/pythonlogo.png";
import tailwindcss from "../images/tailwindcss.svg";
import nextui from "../images/nextui.png";
import motionlogo from "../images/motionlogo.png";
import psql from "../images/psql.png";
import cflogo from "../images/cflogo.png";
import prisma from "../images/prisma.png";
import postman from "../images/postman.png";
import docker from "../images/docker.png";




export const Technologies = () => {
    return (
        <div className=" pl-20  ml-10 mt-20 justify-center shadow-3xl pb-10 setting-z-index">
            <p className="text-white text-4xl font-semibold ">TECHNOLOGIES</p>

            <div className="grid grid-cols-8 grid-rows-3 gap-6 pt-10 pr-20">
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={reactjs} alt="ReactJS" className="rounded-3xl overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={jslogo} alt="JS" className="rounded-3xl overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={htmllogo} alt="HTML" className="rounded-3xl overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={css3logo} alt="CSS" className="rounded-3xl overflow-hidden w-[95px] h-[90px]" />
                </motion.div>

                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.9" }}>
                    <img src={cpplogo} alt="CPP" className="rounded-3xl overflow-hidden w-[89px] h-[92px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={tslogo} alt="TS" className="rounded-3xl overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={nodejslogo} alt="NodeJS" className="rounded-3xl overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={exjslogo} alt="EXJS" className="rounded-3xl overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={mysqllogo} alt="MYSQL" className="rounded-3xl overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={mongologo} alt="MongoDB" className="rounded-3xl overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={pythonlogo} alt="Python" className="rounded-3xl overflow-hidden w-[85px] h-[95px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={tailwindcss} alt="Tailwind" className="rounded-3xl overflow-hidden w-[95px] h-[90px] bg-white p-1" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={nextui} alt="NextUI" className="rounded-3xl overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={motionlogo} alt="Motion" className="rounded-full overflow-hidden w-[90px] h-[92px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={psql} alt="PSQL" className="rounded-3xl p-3 bg-white overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={cflogo} alt="Cloudflare" className="rounded-3xl    overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={prisma} alt="prisma" className="rounded-3xl p-2 bg-white overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={postman} alt="Postman" className="rounded-full  overflow-hidden w-[90px] h-[90px]" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: "1.03" }}
                    whileTap={{ scale: "0.98" }}>
                    <img src={docker} alt="Docker" className="rounded-3xl p-3 bg-white overflow-hidden w-[95px] h-[90px]" />
                </motion.div>
                



            </div>
        </div>
    )
}