/** @format */

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "../navigation/Footer";
import Navbar from "../navigation/Navbar";
import { NavbarSchema } from "../navigation/NavbarSchema";
import CustomButton from "../reusable/CustomButton";

interface LayoutPropsI {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: LayoutPropsI) => {
  const [showBot, setShowBot] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <>
      <Navbar onClick={toggleMenu} />
      <div className={`${className}`}>
        {showMenu && (
          <div className='bg-[#fff] flex items-start justify-center h-full top-[4rem] fixed z-10 w-[100%]'>
            <ul className='flex flex-col items-center justify-between w-[80%] h-1/2'>
              {NavbarSchema.map((item, index) => (
                <li
                  className='font-[400] text-[#001011] text-[14px]'
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
          </div>
        )}
        {children}
        <div className='chatbot fixed bottom-[5%] right-[2%]'>
          {showBot ? (
            <div className='relative'>
              <iframe
                className='w-[220px] md:w-[320px] lg:w-[420px] xl:w-[520px] h-[220px] md:h-[320px] lg:h-[420px] xl:h-[520px]'
                allow='microphone;'
                src='https://console.dialogflow.com/api-client/demo/embedded/cbd6db21-1e8a-43fe-a517-7805bf9aa6eb'></iframe>
              <button
                onClick={() => setShowBot(false)}
                className='bg-[transparent] z-50 text-[#F64740] text-[1.5rem] lg:text-[3rem]'>
                X
              </button>
            </div>
          ) : (
            <div
              onClick={() => setShowBot(true)}
              className='bg-[#1B0538] w-[75px] lg:w-[125px] h-[75px] lg:h-[125px] rounded-full flex justify-center items-center'>
              <div className='relative w-[70px] lg:w-[120px] h-[70px] lg:h-[120px] rounded-full flex justify-center items-center'>
                <Image
                  layout='fill'
                  className='rounded-full'
                  src='/media/bot.jpg'
                  alt='chatbot figure'
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Container;
