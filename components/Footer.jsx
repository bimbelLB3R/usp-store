import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-100 flex items-center justify-center p-4">
      <Link href="/">Back</Link>
    </div>
  );
};

export default Footer;
