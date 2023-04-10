import React from 'react'
import Link from 'next/link';
import {
  RiMenuFill
} from "react-icons/ri";

const  Headers =(props) =>{
  const{setShowSidebar}= props;
  return (
 <header onClick={()=> setShowSidebar(true)} className='fixed left-0 top-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-spotify-black flex items-center justify-between p-4'>
  <div>
<RiMenuFill className='text-2xl hover:cursor-pointer p-2 box-content'/>
  </div>
  <div className='flex items-center gap-6'>
  <Link href="#" className='hover:text-white transition-colors'>Registrate</Link>
  <Link href="#" className='py-2 md:py-3 px-4 rounded-full bg-white text-spotify-lightgray font-medium hover:scale-105 transition-transform'>Inicia sesion</Link>
  </div>
 </header>
  )
}
export default Headers