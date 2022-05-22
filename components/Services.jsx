import React from 'react';
import CardServices from './CardServices';

const Services = ({ services }) => {
  return (
    <div>
      <div>
        <p className=" border-b-4 inline-block border-green-400 font-bold text-3xl mb-10 ml-4 md:ml-20 mt-10 ">
          Our Services
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {services.map((service) => (
          <div key={service.id}>
            <CardServices service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
