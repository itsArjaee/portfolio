import Link from "next/link";

import { RiFacebookLine, RiDiscordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaViber } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg font-extrabold ">
      <Link href={"/"} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={"/"} className="hover:text-accent transition-all duration-300">
        <RiDiscordLine />
      </Link>
      <Link href={"/"} className="hover:text-accent transition-all duration-300">
        <MdOutlineMailOutline />
      </Link>
      <Link href={"/"} className="hover:text-accent transition-all duration-300">
        <FaViber />
      </Link>
      <Link href={"/"} className="hover:text-accent transition-all duration-300">
        <CiLinkedin />
      </Link>
      <Link href={"/"} className="hover:text-accent transition-all duration-300">
        <SiIndeed />
      </Link>
    </div>
  );
};

export default Socials;
