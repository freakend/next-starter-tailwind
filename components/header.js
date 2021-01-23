import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-center text-xl py-4 mb-6 md:mb-0">
      
      <Link href="/">
        <a className="pr-3 md:pr-6 md:text-lg hover:text-gray-300">Home</a>
      </Link>
      <Link href="/about">
        <a className="pr-3 md:pr-6 md:text-lg hover:text-gray-300">About</a>
      </Link>
      <a className="md:text-lg hover:text-gray-300" href="/static/resume.pdf" target="_blank">
        Resume
      </a>
      
      </nav>
  );
}
