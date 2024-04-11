import { Link } from "react-router-dom";
const Showcase = () => {
  return (
    <div className="showcase bg-gray-800 text-white py-20 px-8 xl:px-20">
      <h1 className="text-4xl lg:text-6xl font-bold text-center">Data Recovery</h1>
      <p className="mt-4 text-lg text-center">Your Trusted Partner for Fast, Secure, and Reliable Data Recovery Solutions. With cutting-edge technology and expert care, we restore your valuable data, ensuring peace of mind when data loss strikes.</p>
    <div className="flex items-center justify-center gap-8 mt-6 flex-col md:flex-row uppercase">
      <Link to='/quotes'>
        <p className="border-2 font-semibold px-6 py-2 border-white hover:bg-white hover:text-blue-950 cursor-pointer">Get a Free Quote</p>
      </Link>
        
        <p className="border-2 font-semibold px-6 py-2 border-white hover:bg-white hover:text-blue-950 cursor-pointer">Reviews</p>
    </div>
      
    </div>
  );
};

export default Showcase;
