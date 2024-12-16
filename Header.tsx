import image from "../../public/DRDO_icon.png"
import home from "../../public/home.png"
import power from "../../public/power.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Link, useLocation } from "react-router-dom";


function Header() {
    const location=useLocation();
   
  return (
    <div className="fixed">
        <div className="w-screen h-64">
            <div className="flex w-full h-32 bg-blue-900">
                <div className="w-24 h-full flex ml-7 items-center">
                    <img src={image} className="w-24 h-24"/>
                </div>
                <div className="ml-8 h-full w-[35vw] mt-7 text-white text-xl font-sans">
                ठोसअवस्था भौतिकी प्रयोगशाला बुलेटिन बोर्ड/Solid State Physics Laboratory Bulletin Board
                </div>
                <div className="w-[50vw] flex justify-end mt-10">
                    <div className="w-60 bg-white h-7 flex ">
                        <input className="w-52 h-7 rounded-sm pl-2" placeholder="Search"/>
                        <button>
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className=" mt-5 ml-4 flex justify-between">
                <div className="flex">
                    <div className="">
                        <img src={home} className="h-5 w-5"/>
                    </div>
                    <div className="text-sm ml-2">
                        <Link to="/">
                        Board index </Link>{location.pathname}
                    </div>
                </div>
                <Link to="/login">
                    <div className="mr-5 flex">
                        <div>
                            <img src={power} className="h-5 w-5 font-bold"/>
                        </div>
                        <div className="text-sm ml-2 font-bold">
                            Login
                        </div>
                    </div>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Header