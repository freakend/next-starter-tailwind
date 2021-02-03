import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    // <nav className="flex items-center justify-center text-xl py-4 mb-6 md:mb-0">
      
    //   <Link href="/">
    //     <a className="pr-3 md:pr-6 md:text-lg hover:text-gray-300">Home</a>
    //   </Link>
    //   <Link href="/about">
    //     <a className="pr-3 md:pr-6 md:text-lg hover:text-gray-300">About</a>
    //   </Link>
    //   <a className="md:text-lg hover:text-gray-300" href="/static/resume.pdf" target="_blank">
    //     Resume
    //   </a>
      
    //   </nav>
           <header class="text-gray-700 bg-white border-t border-b body-font">
             <div class="container flex flex-col flex-wrap p-3 mx-auto md:items-center md:flex-row ">

             <Link href="/">
               <a class="flex items-center w-40 mb-4 hidden md:block font-medium text-gray-900 title-font md:mb-0">
                    <p>Ferdiansyah Rahman</p>
                </a>
               </Link>
               
                <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto ">
                <Link href="/"><a className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800">Home</a></Link>
                <Link href="/about"><a className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800">About</a></Link>
                <Link href="/portfo"><a className="text-sm font-semibold text-gray-600 hover:text-gray-800">Portfolio</a></Link>
                </nav>
             </div>
          </header>

  );
}
