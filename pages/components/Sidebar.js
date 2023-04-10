import React from "react";
import Link from "next/link";
import { ImHome3 } from "react-icons/im";
import {
  RiSearch2Line,
  RiFolder2Fill,
  RiAddBoxLine,
  RiHeartFill,
  RiCloseFill, 
} from "react-icons/ri";
const Sidebar=(props) =>{
  const{showSidebar,setShowSidebar}=props;
  return (
    <div className={`bg-black fixed top-0 w-64 h-full p-4 flex flex-col justify-between ${showSidebar?"left-0":"-left-full"}md:left-0 transition-all duration-300`}>
      <div>
        <div className="md:hidden absolute right-4 top-4 ">
< RiCloseFill className="text-2xl p-2 box-content" onClick={()=>setShowSidebar(false)}/>
        </div>
        <div className="my-4 mb-7">
          <img
            src="https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-4.png"
            alt="Spotify"
            width={130}
            height={130}
          />
        </div>
        <nav>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
                href="#"
              >
                {" "}
                <ImHome3 className="text-2xl " />
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
                href="#"
              >
                {" "}
                <RiSearch2Line className="text-2xl " />
                Buscar
              </Link>
            </li>
            <li className="mb-8">
              <Link
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
                href="#"
              >
                {" "}
                <RiFolder2Fill className="text-2xl " />
                Tu Biblioteca
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
                href="#"
              >
                {" "}
                <RiAddBoxLine className="text-2xl " />
                Crear playlist
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
                href="#"
              >
                {" "}
                <RiHeartFill className="text-2xl " />
                Tus me gusta
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className="flex flex-col gap-y-2">
            <li>
              <Link href="#" className="text-sm hover:underline">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Privacidad
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Sidebar;