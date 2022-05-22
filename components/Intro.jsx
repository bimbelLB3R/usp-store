import React from 'react';
import Image from 'next/image';
import Circle from './Circle';
import Link from 'next/link';
import Carousel from './Carousel';

const Intro = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:grid  md:grid-cols-2">
        <div className="flex items-center justify-center m-auto p-4 md:p-16 md:relative">
          <Circle backgroundColor="#F0ABFC" left="-50vh" top="-50vh" />
          <div className="">
            <div className="mb-16 font-bold text-4xl  z-50 relative">
              <p>
                <span className="text-fuchsia-400">USP</span> UWAIS
              </p>
              <p>SCREEN PRINTING</p>
            </div>
            <div>
              <p className="text-justify">
                Kami bekerja secara profesional dan memberikan pelayanan terbaik
                kepada konsumen. USP sudah berdiri sejak 2017 sehingga sudah
                cukup berpengalaman dalam menyediakan produk dengan kualitas
                terbaik. Anda akan lebih hemat karena kami memberikan harga yang
                kompetitif. Kami juga senantiasa menjaga komunikasi dengan
                pelanggan agar didapatkan produk yang sesuai harapan.
              </p>
            </div>
            <div>
              <Link href="https://g.page/UWAIS_SP?share">
                <button className="bg-green-400 rounded p-4 mt-10 font-semibold">
                  FIND US
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Circle backgroundColor="#C026D3" right="-50vh" />
          {/* <Image
            src="/images/kaos.avif"
            alt="image"
            width="100%"
            height="100%"
            objectFit="cover"
            layout="responsive"
            className=""
          /> */}
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Intro;
