"use client"

import Link from "next/link";
import { LuClock3, LuMenu } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { RiHome2Line } from "react-icons/ri";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  const isActive = (path) => pathName === path;

  const activeClass = "bg-[#244d3f] text-white hover:bg-[#1a3a30] px-3 md:px-4 py-2 rounded-sm flex items-center gap-2 font-semibold";
  const inactiveClass = "bg-[#f8fafc] hover:bg-green-100 px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-slate-500 transition-all";

  const navLinks = [
    { href: "/", label: "Home", icon: <RiHome2Line className="text-xl" /> },
    { href: "/timeline", label: "Timeline", icon: <LuClock3 className="text-xl" /> },
    { href: "/stats", label: "Stats", icon: <GoGraph className="text-xl" /> },
  ];

  return (
    <div className='navbar bg-base-100 shadow-sm container mx-auto px-4'>
      <div className='flex-1'>
        <Link href="/" className='text-black font-extrabold text-xl md:text-2xl'>
          Keen<span className="text-[#244d3f] font-semibold">Keeper</span>
        </Link>
      </div>

      <div className='flex-none'>
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <LuMenu className="text-2xl" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive(link.href) ? "bg-[#244d3f] text-white" : ""}
                >
                  {link.icon} {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className='hidden md:flex menu menu-horizontal px-1 gap-2 items-center'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive(link.href) ? activeClass : inactiveClass}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;