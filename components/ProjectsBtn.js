import Image from "next/image";

import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-10">
      <Link
        href={"/work"}
        className="relative w-[135px] h-[135px] md:w-[185px] md:h-[185px] flex justify-center items-center
         bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer "
      >
        <Image
          src={"/rounded-text.png"}
          width={111}
          height={118}
          alt=""
          className="animate-spin-slow w-full h-full md:max-w-[141px] md:max-h-[148px] max-w-[101px] max-h-[108px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300
        " />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
