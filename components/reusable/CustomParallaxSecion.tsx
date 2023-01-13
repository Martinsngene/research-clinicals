/** @format */

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";

interface CustomParallaxSectionI {
  img: string;
  header: string;
  onLoad?: any;
  children: React.ReactNode;
}

const CustomParallaxSecion = ({
  img,
  header,
  children,
}: CustomParallaxSectionI) => {
  return (
    <div className='w-full bg-white lg:bg-[#ECE6F4] flex flex-col lg:flex-row justify-between items-center lg:odd:flex-row-reverse mb-6 lg:mb-0'>
      <div className='itemOne relative w-full lg:w-[710px] h-[345px] lg:h-[545px]'>
        <Image alt='' layout='fill' src={img} />
      </div>

      <div className='itemTwo bg-white lg:bg-[#ECE6F4] w-full lg:w-[50%] px-4 lg:px-12'>
        <div className='head'>
          <h1 className='text-[1.5rem] lg:text-[2.13rem] font-[600] text-[#001011]'>
            {header}
          </h1>
        </div>
        <div className='body'>
          <p className='text-[1rem] lg:text-[1.25rem] font-[400] text-[#001011]'>
            {children}
          </p>
        </div>
        <div className='button mt-4'>
          <CustomButton
            className='bg-[#430990] hover:bg-[#F64740] px-[0.5rem] py-[0.6rem] font-[700] transition w-[6.89rem] flex items-center justify-center '
            textStyle='text-[#fff]'>
            <Link href={`/studies/study`} passHref={true}>
              Read more
            </Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CustomParallaxSecion;
