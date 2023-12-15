import { LuAlignJustify } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import customer1 from "../assets/images/customer01.jpg";
export const Topbar = ({setToggleNav}) => {
    
    const toggleHandler = () => {
        setToggleNav((prevToggleNav) => !prevToggleNav);
    }

    return (
        <div className="topbar">
            <div className="toggle" onClick={toggleHandler}>
                <LuAlignJustify />
            </div>

            <div className="search">
                <label>
                    <input type="text" placeholder="Search here" />
                    <IoSearchSharp />
                </label>
            </div>

            <div className="user">
                <img src={customer1} alt="" />
            </div>
        </div>
    )
}
