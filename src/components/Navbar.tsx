import React from 'react'
import { LuUser } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import food from '../assets/img/f2.png'
import Image from 'next/image'

import { GiBroccoli } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {

  const navbarText = ['Home', 'Shop', 'Product', 'Blog', 'Contact Us'];

  return (
    <div className='bg-[#F7F4EB] md:h-[550px] h-[590px]'>
      {/* navbar div */}
      <div className='flex justify-between p-5 px-5 md:px-40'>
        <div className='flex'>
          <GiBroccoli className='text-4xl md:mt-0 mt-10 text-[#80B600]' />
          <h1 className='mt-10 ml-1 text-xl font-bold md:text-3xl md:mt-0'>  Broccoli</h1>

        </div>

        <div className='flex justify-between gap-9 '>
          <ul className='hidden gap-10 mt-3 font-sans font-medium md:flex '>
            {
              navbarText.map((text, index) => (
                <li key={index}>{text}</li>
              ))
            }
          </ul>
          {/* icons */}
          <div className='flex gap-5 mt-10 ml-4 text-xl md:mt-3'>
            <p className='h-10 p-2 bg-white shadow-xl'><IoSearch /></p>
            <p className='h-10 p-2 bg-white shadow-xl'><LuUser /></p>
            <p className='h-10 p-2 bg-white shadow-xl'> <MdOutlineShoppingCart /></p>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className='gap-5 pt-10 pl-5 md:justify-between md:flex md:pt-24 md:pl-32'>
        {/* left text  */}
        <div className='text-center md:text-start md:mt-15'>
          <p className='md:mt-5 text-[#80B600] font-bold'>100% genuine Products</p>
          <h1 className='font-bold text-lg md:text-[2.5rem] mt-4 '>Tasty & Healty <p className='md:mt-5'>Organic Food.</p></h1>
          <button className='p-2.5 font-bold border-2 rounded-sm md:px-7 mt-7 bg-[#80B600] text-white '>Shop Now</button>
        </div>
        {/* right img */}
        {/* <div className=''>
          <img className='mb-10' src={food} alt="" />
        </div> */}
        <div className="">
          <Image
            className=" md:w-[500px] h-auto relative ml-14 md:right-28 "
            src={food}
            alt="Delicious food"
            width={500}
            height={400}
          />
        </div>

      </div>

    </div>
  )
}