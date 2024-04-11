import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)

  const toggleMenu = () => {
    setModalOpen(!modalOpen);
  }
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  }
  return (
      <div className="px-8 py-2 bg-blue-900 shadow-md sticky top-0">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div>
              <p className="text-xl text-white">DATA RECOVERY</p>
            </div>
          </Link>
          
            <div className={`xl:relative xl:flex absolute top-14 m-auto xl:top-0 ${!searchVisible ? 'hidden' : ''}`}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="xl:rounded-3xl rounded-md outline-gray-400 outline-1 xl:outline-0 py-2 pl-10 w-full md:w-80 px-4 outline-none"              
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <BsSearch className="text-gray-400" />
              </div>
            </div>
          <div className={`xl:flex items-center justify-between gap-2 absolute xl:static xl:w-[500px] xl:bg-transparent top-12 right-0 bg-blue-300 w-full py-5 ${!modalOpen && 'hidden'}`}>
                <Link to="/services">
                    <p className="font-semi-bold text-xl px-2 text-white hover:text-blue-950 cursor-pointer py-2 xl:py-0  border-b-[0.01rem] xl:border-0">Services</p>
                </Link>
                <Link to="/about">
                   <p className="font-semi-bold text-xl px-2 text-white hover:text-blue-950 cursor-pointer py-2 xl:py-0  border-b-[0.01rem] xl:border-0">About</p>
                </Link>
                <Link to='/contact'>
                   <p className="font-semi-bold text-xl px-2 text-white hover:text-blue-950 cursor-pointer py-2 xl:py-0  border-b-[0.01rem] xl:border-0">Contact</p>
                </Link>
                <Link to="/clients">
                <p className="font-semi-bold text-xl px-2 text-white hover:text-blue-950 cursor-pointer py-2 xl:py-0  border-b-[0.01rem] xl:border-0">Clients</p>
                </Link>
                <Link to="/news">
                  <p className="font-semi-bold text-xl px-2 text-white hover:text-blue-950 cursor-pointer py-2 xl:py-0  border-b-[0.01rem] xl:border-0">News</p>
                </Link>
                
          </div>
            <div className="flex items-center justify-between gap-2 xl:hidden">
              <BsSearch className="text-white text-xl xl:hidden" onClick={toggleSearch}/>
              <IoMdMenu className="text-white text-3xl xl:hidden" onClick={toggleMenu}/>
            </div>
        </div>
      </div>);
};

export default Header;
