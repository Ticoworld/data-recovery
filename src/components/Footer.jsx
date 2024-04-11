import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-4">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <p className="text-lg font-medium">© {new Date().getFullYear()} DATA RECOVERY</p>
        </div>
        <nav className="w-full md:w-auto flex justify-end items-center">
            <Link to='/terms'> <p className="text-white hover:underline mr-4">Terms</p></Link>
            <Link to='/privacy'> <p className="text-white hover:underline">Privacy</p></Link>
        </nav>
      </div>
    </footer>
  )
  ;
};

export default Footer;
