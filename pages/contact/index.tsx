/** @format */

import Container from "../../components/container/Container";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import CustomImage from "../../components/reusable/CustomImage";
import CustomSection from "../../components/reusable/CustomSection";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const styleIcons = "text-[#262987] text-[22px] mr-4";
  return (
    <Container>
      <Navbar />
      <CustomSection className='contactSection h-full lg:h-[150vh] flex flex-col items-center justify-center lg:relative'>
        <CustomSection className='lg:absolute lg:top-[30%] lg:left-[15%] backdrop-blur-[5px] w-[80%] lg:w-[417px] h-[323px] px-4 my-28 mx-8 lg:mx-0 lg:my-0 rounded-[10px] bg-[rgba(0,_16,_17,_0.2)] flex items-center justify-center'>
          <ul>
            <li>
              <h2 className='text-[#262987] text-[2.13rem] font-[800]'>
                Contact Us
              </h2>
            </li>
            <li className='flex mb-3'>
              <span className={`${styleIcons}`}>
                <BsTelephone />
              </span>
              <span>+1-300-555-0171</span>
            </li>
            <li className='flex mb-3'>
              <span className={`${styleIcons}`}>
                <HiOutlineLocationMarker />
              </span>
              <span>8502 Preston Rd. Inglewood, Maine 98380</span>
            </li>
            <li className='flex'>
              <span className={`${styleIcons}`}>
                <FiMail />
              </span>
              <span>georgia.young@example.com</span>
            </li>
          </ul>
        </CustomSection>
      </CustomSection>
      <Footer />
    </Container>
  );
};

export default Contact;
