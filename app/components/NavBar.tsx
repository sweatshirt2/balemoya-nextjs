import Image from "next/image";
import { Edu_VIC_WA_NT_Beginner } from "next/font/google";

import NavUl from "./NavUl";
import Logo from './balemoya.svg';

const edu = Edu_VIC_WA_NT_Beginner({subsets: ["latin"]});

export default function NavBar() {
  return (
    <header className="flex justify-between w-full items-center px-16 pb-3 pt-10 text-cyan-950">
      <div className="flex gap-5">
        <Image src={Logo} alt="balemoya-logo" width={30} id="header-logo" />  
        <h1 className={"font-bold text-3xl " + edu.className}>Balemoya</h1>
      </div>
      <NavUl />
    </header>
  )
}
