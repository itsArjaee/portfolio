import Image from "next/image";

import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] mb-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-1 py-8">
          <Link href={'/'}>
            <Image
              src={"/name-logo-1.png"}
              width={200}
              height={38}
              alt=""
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
