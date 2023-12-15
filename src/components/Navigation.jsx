import { TbBrandApplePodcast } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { GrHelpBook } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import { navItems } from '../data/data.json';
import { useState } from "react";

export const Navigation = ({ toggleNav }) => {
    const getIcon = (iconName) => {
        switch (iconName) {
            case "TbBrandApplePodcast":
                return <TbBrandApplePodcast />;
            case "IoHomeOutline":
                return <IoHomeOutline />;
            case "PiUsersThree":
                return <PiUsersThree />;
            case "TiMessages":
                return <TiMessages />;
            case "GrHelpBook":
                return <GrHelpBook />;
            case "IoSettingsOutline":
                return <IoSettingsOutline />;
            case "RiLockPasswordLine":
                return <RiLockPasswordLine />;
            case "PiSignOutBold":
                return <PiSignOutBold />;
            default:
                return null;
        }
    }

    const [activeLink, setActiveLink] = useState(navItems[0].id);

    const clickHandler = (itemId) => {
        setActiveLink(itemId);
    }

    return (
        <div className={`navigation ${toggleNav ? 'active' : ''}`}>
            <div className="logo">
                <a href="#">
                    <span className="icon">
                        <TbBrandApplePodcast />
                    </span>
                    <strong className="title">Admin One</strong>
                </a>
            </div>

            <ul>
                {
                    navItems.map(nav => {
                        return (
                            <li key={nav.id} onClick={() => clickHandler(nav.id)} className={activeLink === nav.id ? "active" : ""}>
                                <a href="#">
                                    <span className="icon">
                                        {getIcon(nav.icon)}
                                    </span>
                                    <span className="title">{nav.name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}