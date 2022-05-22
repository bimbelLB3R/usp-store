import React from 'react';
import { data } from '../../data';
import Image from 'next/image';
import Link from 'next/link';

import style from '../../styles/Product.module.css';

const Product = ({ product }) => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.cardL}>
          {product.images.map((img) => (
            <div key={img.id} className={style.imgContainer}>
              <Image
                src={img.url}
                alt=""
                width="100%"
                height="100%"
                objectFit="cover"
                layout="responsive"
                className=""
              />
            </div>
          ))}
        </div>
        <div className={style.cardS}>
          <h1 className={style.title}>{product.title}</h1>
          <p className={style.desc}>{product.longDesc}</p>
          <button className={style.button}>
            <Link href="https://wa.me/+6281392552459">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      // ini object ctx-nya
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Product;
