/** @format */

import Container from "../../components/container/Container";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import CustomImage from "../../components/reusable/CustomImage";
import CustomSection from "../../components/reusable/CustomSection";
import CustomSectionHeader from "../../components/reusable/CustomSectionHeader";

const About = () => {
  return (
    <Container>
      <CustomSection className='h-[75vh] aboutSection'> </CustomSection>
      <CustomSection className='bg-[#F2F2F2] flex flex-col items-center justify-center pt-[3rem]'>
        <CustomSectionHeader
          headerText='GADALOIN'
          IconWidth={20}
          IconSrc='/media/dot.png'
          IconHeight={20}
          textAlign='center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </CustomSectionHeader>
        <div className='w-[90%] flex items-center justify-center mb-[5rem]'>
          <CustomImage src='/media/pictureThree.png' width={580} height={648} />
          <CustomImage
            src='/media/pictureFour.png'
            className='ml-10'
            width={580}
            height={456}
          />
        </div>
        <div className='w-[90%] flex items-center justify-center mb-[5rem]'>
          <p className='text-[1rem] lg:text-[1.4rem] font-[400]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='w-[90%] flex items-center justify-center'>
          <p className='text-[1rem] lg:text-[1.4rem] font-[400]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </CustomSection>
      <CustomSection className='bg-[#F2F2F2] pb-[10rem] w-[100%] flex items-center justify-center pt-[10rem]'>
        <CustomImage
          src='/media/pictureFive.png'
          className='w-[80%]'
          width={1180}
          height={545}
        />
      </CustomSection>
    </Container>
  );
};

export default About;
