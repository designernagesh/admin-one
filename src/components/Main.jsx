import { Topbar } from "./Topbar"
import { FaRegEye } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GoCommentDiscussion } from "react-icons/go";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { cards } from '../data/data.json';
import { Card } from "./Card";
import { RecentOrders } from "./RecentOrders";
import { RecentCustomers } from "./RecentCustomers";

export const Main = ({ toggleNav, setToggleNav }) => {
    const getIcon = (iconName) => {
        switch (iconName) {
            case "FaRegEye":
                return <FaRegEye />;
            case "IoCartOutline":
                return <IoCartOutline />;
            case "GoCommentDiscussion":
                return <GoCommentDiscussion />;
            case "HiOutlineBanknotes":
                return <HiOutlineBanknotes />;
            default:
                return null;
        }
    }

    return (
        <div className={`main ${toggleNav ? "active" : "" }`} >
            <Topbar setToggleNav={setToggleNav} />
            <div className="cardBox">
                {
                    cards.map(card => {
                        return (
                            <Card key={card.id} getIcon={getIcon} card={card} />
                        )
                    })
                }
            </div>

            <div className="details">
                <RecentOrders />
                <RecentCustomers />
            </div>
        </div>
    )
}