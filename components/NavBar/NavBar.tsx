import React, {FC} from "react";
import {Nunito} from "next/font/google";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons'

const ubuntu = Nunito({subsets: ['latin'], weight: '400'})

const NavBar:FC = () => {
    return (
        <div className="fixed w-40 h-[100vh] left-0 top-0 bg-gray-950 z-10 flex flex-col justify-evenly">
            <div></div>
            <nav>
                <ul className={`text-white flex flex-col [&>*]:mt-2 items-center  ${ubuntu.className}`}>
                    <li className="hover:text-violet-400 transition-all duration-300">about me</li>
                    <li className="hover:text-violet-400 transition-all duration-300">works</li>
                    <li className="hover:text-violet-400 transition-all duration-300">contact me</li>
                    <li className="hover:text-violet-400 transition-all duration-300">guest book</li>
                </ul>
            </nav>
            <div>
                <ul className="text-white flex flex-row justify-evenly mx-auto w-24">
                    <li className="opacity-60 hover:opacity-100">
                        <FontAwesomeIcon  icon={faLinkedinIn}/>
                    </li>
                    <li className="opacity-60 hover:opacity-100"><FontAwesomeIcon  icon={faTelegram}/></li>
                    <li className="opacity-60 hover:opacity-100"><FontAwesomeIcon  icon={faDiscord}/></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;