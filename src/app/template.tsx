'use client';

import React from 'react'
// import { usePathname } from 'next/navigation';

// const linkData = [
//   {name:'首页',path:'/dashboard'}
// ]
// const accessLink = ['/','/dashboard']

  export default function template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  //   const pathname = usePathname();
  //  if(!accessLink.includes(pathname)) return (
  //   <div>
  //     {children}
  //   </div>
  //  );
    return (
      <div className='bg-blue-500'>
        <h1 className=''>这是模版</h1>
        {children}
      </div>
    );
  }