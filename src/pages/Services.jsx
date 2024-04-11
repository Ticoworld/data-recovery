
const Services = () => {
  return (
    <div className="">
         <div className="serv-showcase bg-gray-800 text-white py-20 px-8 xl:px-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-center">Our Services</h2>         
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <h3 className="text-lg font-bold mb-2">Data Recovery</h3>
          <p className="mb-4">We specialize in recovering data from a variety of storage devices including hard drives, SSDs, RAID arrays, flash drives, and more.</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <h3 className="text-lg font-bold mb-2">Hard Drive Recovery</h3>
          <p className="mb-4">Our expert technicians can recover data from physically damaged, logically corrupted, or failed hard drives, ensuring minimal data loss.</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <h3 className="text-lg font-bold mb-2">RAID Recovery</h3>
          <p className="mb-4">We offer comprehensive RAID recovery services, helping businesses and organizations restore critical data from RAID arrays of all configurations.</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <h3 className="text-lg font-bold mb-2">SSD Recovery</h3>
          <p className="mb-4">Our SSD recovery specialists utilize advanced techniques to retrieve lost data from solid-state drives, ensuring fast and reliable recovery.</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <h3 className="text-lg font-bold mb-2">Flash Drive Recovery</h3>
          <p className="mb-4">We provide efficient flash drive recovery services to retrieve data from USB flash drives, memory cards, and other flash storage devices.</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <h3 className="text-lg font-bold mb-2">Data Transfer</h3>
          <p className="mb-4">In addition to recovery, we offer secure data transfer services to migrate your data between devices or storage media, ensuring data integrity.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
