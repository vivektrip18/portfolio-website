import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg";
import { DropDown } from "./Dropdown";
import { Github, Leetcode, Linkedin, Resume } from "./Links";

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="flex navbar opacity-75 bg-black space-x-4 pb-6 pt-6 " style={{ justifyContent: "space-between" }}>
            <div className="justify-start">
                <button onClick={()=>{
                    navigate("/");
                }}>
                    <img src={logo} alt="Logo" className="w-11 h-8 rounded-full ml-4" />

                </button>
            </div>
            <DropDown className="links" />
            <div className="flex links space-x-2">
                <Github />
                <Leetcode />
                <Linkedin />
                <Resume />
            </div>
        </nav>
    )
}
