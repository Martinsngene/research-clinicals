/** @format */

import Image from "next/image";
import Link from "next/link";
import CustomButton from "../reusable/CustomButton";
import { NavbarSchema } from "./NavbarSchema";

interface NavbarPropsI {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Navbar = ({ onClick }: NavbarPropsI) => {
  return (
    <div className='bg-[#fff] h-[4rem] fixed z-10 w-[100%] flex items-center justify-between px-4 shadow lg:shadow-none'>
      <Link href='/'>
        <div className='relative w-[60px] lg:w-[80px] h-[35px] lg:h-[50px] pl-[1rem] flex items-center justify-center'>
          <Image src='/media/logo.png' layout='fill' alt='' />
        </div>
      </Link>
      <ul className='hidden lg:flex items-center justify-between w-[50%]'>
        {NavbarSchema.map((item, index) => (
          <li
            className='font-[400] text-[#001011] text-[14px] capitalize'
            key={index}>
            <Link href={`${item.route}`} passHref={true}>
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <CustomButton
            className='bg-[#430990] hover:bg-[#F64740] px-[1.3rem] py-[0.55rem] font-[700] transition'
            textStyle='text-[#fff]'>
            <Link href={"/studies"} passHref={true}>
              Join a Study
            </Link>
          </CustomButton>
        </li>
      </ul>

      <button
        onClick={onClick}
        className='block lg:hidden relative w-[40px] h-[30px] bg-[#430990] rounded-[0.75rem]'>
        <Image src='/media/menu.svg' layout='fill' alt='' />
      </button>
    </div>
  );
};

export default Navbar;
