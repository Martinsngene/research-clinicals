import Link from "next/link";
import CustomButton from "../reusable/CustomButton";
import CustomImage from "../reusable/CustomImage";
import { FooterItemOne, FooterItemTwo } from "./FooterSchema";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const styleIcons = "text-[#fff] text-[20px] mr-4";
  return (
    <div className="h-[20rem] bg-[#1B0538] w-[100%] float-right">
      <div className="footerContainer flex items-center justify-between w-full px-8 pt-8">
        <div className="contactContainer">
          <ul className="text-[#fff] ">
            <li>
              <CustomImage
                className="mb-[1rem]"
                src="/media/logo.png"
                width={116}
                height={63}
              />
            </li>
            <li className="flex mb-3">
              <span className={`${styleIcons}`}>
                <BsTelephone />
              </span>
              <span>+1-300-555-0171</span>
            </li>
            <li className="flex mb-3">
              <span className={`${styleIcons}`}>
                <HiOutlineLocationMarker />
              </span>
              <span>8502 Preston Rd. Inglewood, Maine 98380</span>
            </li>
            <li className="flex">
              <span className={`${styleIcons}`}>
                <FiMail />
              </span>
              <span>georgia.young@example.com</span>
            </li>
          </ul>
        </div>
        <div className="flex  justify-around w-full flex-wrap">
          <div className="col-span-1">
            <ul className="text-[#fff]">
              <li>
                <h2 className="text-[2rem] font-bold">Current Studies</h2>
              </li>
              {FooterItemTwo.map((item, index) => (
                <li className="font-[400] text-[1.2rem]" key={index}>
                  <Link href={`${item.link}`} passHref={true}>
                    {item.searchName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="">
              {FooterItemOne.map((item, index) => (
                <li
                  className="text-[#fff] font-[400] text-[1.2rem]"
                  key={index}
                >
                  <Link href={`${item.route}`} passHref={true}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <CustomButton
                  className="bg-[#0C0D27] hover:bg-[#F64740] px-[0.5rem] py-[0.6rem] font-[700] transition w-[6.89rem] flex items-center justify-center mt-2"
                  textStyle="text-[#fff]"
                >
                  <Link href={"/studies"} passHref={true}>
                    Join a Study
                  </Link>
                </CustomButton>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#430990] w-full h-[3.5rem] flex items-center justify-between p-4">
        <div className="text-[1rem] text-[#fff] font-[700] flex items-center justify-center">
          <CustomImage src="/media/copyright.png" width={23} height={23} />
          <span className="ml-2">2022. Research Clinical</span>
        </div>
        <div className="text-[1rem] text-[#fff] font-[300]">
          Powered by Trinus Enterprises
        </div>
      </div>
    </div>
  );
};

export default Footer;
