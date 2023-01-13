/** @format */

import Image from "next/image";
import CustomLink from "./CustomLink";
import { BsArrowRight } from "react-icons/bs";

interface CardPropsI {
  children: React.ReactNode;

  buttonLabel: string;
  src: string;
  link?: string;
}

const Card = ({ children, src, buttonLabel, link }: CardPropsI) => {
  return (
    <div className='bg-[#fff] w-[120px] lg:w-[320px] p-2 hover:shadow-2xl mb-[1rem] md:mb-0'>
      <div className='cardImgContainer relative w-full h-[60px] lg:h-[150px] lg:w-[300px] flex  items-center justify-center bg-black'>
        <Image src={src} layout='fill' alt='' />
      </div>
      <div className='cardDescriptionContainer text-[0.5rem] lg:text-[1rem] mt-1 lg:mt-0 lg:p-2'>
        <p>{children}</p>
      </div>
      <div className='cardBtnContainer my-1 lg:my-4 lg:mx-3'>
        <CustomLink
          href={link}
          textStyle='text-[#123384] text-[0.5rem] lg:text-[1rem] font-[600] flex w-full items-center justify-between'
          className='w-[35%] cursor-pointer'>
          <span>{buttonLabel}</span>
          <BsArrowRight />
        </CustomLink>
      </div>
    </div>
  );
};

export default Card;
