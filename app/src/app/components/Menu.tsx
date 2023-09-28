"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  {id: 1, title: "Homepage", url: "/"},
  {id: 2, title: "Menu", url: "/"},
  {id: 3, title: "Working Hours", url: "/"},
  {id: 4, title: "Contact", url: "/"},
];

const Menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
         {!open ? (
         <Image src="/open.png" alt="menu-open" width={20} height={20} onClick={()=>setOpen(true)}/>
         ) : (
         <Image src="/close.png" alt="menu-close" width={20} height={20} onClick={()=>setOpen(false)}/>
         )}

         <div>
          {/* {links.map(item=>(
          // <Link href={item.url} key={item.id}> {item.title} </Link>
            ))} */}
         </div>
    </div>
  );
};

export default Menu