import React from 'react';
import Image from 'next/image';
import Link from 'next/dist/client/link';

const CardServices = ({ service }) => {
  return (
    <div>
      <Link href={`/products/${service.name}`}>
        <div className="bg-slate-100 w-[300px] h-[300px] md:w-[500px] md:h-[500px] p-10 mb-20 flex items-center justify-center relative ">
          <p className="tracking-widest uppercase absolute top-5 left-5 md:top-10 md:left-10">
            {service.name}
          </p>
          <div className="absolute text-center w-[60%] z-50 rounded-full md:rounded-xl p-1 md:p-2 bg-gray-400/50  opacity-0 hover:opacity-100 ease-in duration-300">
            <p className="text-[10px] md:text-[14px]">{service.desc}</p>
          </div>
          <button className="rounded-full overflow-hidden hover:scale-110 ease-in duration-300 w-[95%] h-[95%] md:w-[85%] md:h-[85%]">
            <div>
              {service.video ? (
                <video src={`/images/${service.video}`} loop autoPlay muted />
              ) : (
                <Image
                  alt=""
                  src={`/images/${service.photo}`}
                  layout="responsive"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              )}
            </div>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CardServices;
