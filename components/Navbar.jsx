import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between list-none pr-4 md:pr-16 pl-4 md:pl-16 pt-6 pb-6 bg-gray-900 text-gray-100 z-30">
        <Link href={`/`}>
          <div>
            <p className="text-gray-50 tracking-widest text-3xl mb-2">
              USP <span className="border-b-4 border-fuchsia-400">Store</span>
            </p>
            <p className="text-[12px] italic">
              Kaos, percetakan dan jasa sablon
            </p>
          </div>
        </Link>
        <div className="flex space-x-3">
          {/* <li>Home</li>
          <li>Experience</li>
          <li>Contact</li> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
