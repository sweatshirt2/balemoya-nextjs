'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAtom } from "jotai";

import { nav_state } from "@/states/navbar";

export default function NavUl () {
  
  const [ navState, setNavState ] = useAtom(nav_state);
  const raw_path = usePathname();
  raw_path === '/' ? setNavState('Home') : setNavState(raw_path[1].toUpperCase() + raw_path.slice(2));
  const links = ['Home', 'Jobs', 'Profile']

  return (
    <ul className="flex justify-around gap-10 items-center text-xl font-semibold">
      {
        links.map((link) => (  
          <li key={link} className={`cursor-pointer p-2 ${navState === link ? 'underline-default' : 'underline-onhover' }`}
            onClick={() => setNavState(link)} >
            <Link href={ link === 'Home' ? '/' : ('/' + link.toLowerCase()) }>
            { link }</Link></li>
        ))
      }
    </ul>
  )
}
