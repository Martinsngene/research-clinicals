/** @format */

import type { NextPage } from "next";
import Container from "../components/container/Container";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import Card from "../components/reusable/Card";
import CustomButton from "../components/reusable/CustomButton";
import CustomLink from "../components/reusable/CustomLink";
import CustomSection from "../components/reusable/CustomSection";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import CustomImage from "../components/reusable/CustomImage";

const Home: NextPage = () => {
  const CardMockData = [
    {
      url: "/media/cardImgOne.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonLabel: "Read",
    },
    {
      url: "/media/cardImgOne.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonLabel: "Read",
    },
    {
      url: "/media/cardImgOne.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonLabel: "Read",
    },
  ];
  return (
    <Container>
      <Navbar />
      <CustomSection className='heroSection h-[120vh] lg:relative flex items-center justify-center'>
        <CustomSection className='bg-[rgba(0,_0,_0,_0.06] backdrop-blur-[2px] w-full lg:w-[50%] lg:absolute lg:top-[25%] lg:left-[7%] p-8'>
          <h1 className='text-[#F1F1F1] font-bold text-[2.5rem]'>
            Better Health Through <br /> Quality Research
          </h1>
          <CustomButton
            className='flex items-center justify-center bg-[#430990] w-[150px] hover:bg-[#F64740] px-[1.3rem] py-[0.7rem] mt-[2rem] font-[700] transition'
            textStyle='text-[#fff]'>
            Join a Study
          </CustomButton>
        </CustomSection>
      </CustomSection>

      <CustomSection>
        <div className='w-full flex flex-col lg:flex-row justify-center lg:justify-between bg-[#F3F3F3] items-center p-[2rem]'>
          <CustomImage
            className='itemOne w-full lg:w-[50%] h-full flex items-center justify-center'
            src='/media/one.png'
            width={387}
            height={358}
          />

          <div className='itemTwo bg-[#430990] w-full lg:w-[50%] p-2 md:p-5 text-[#F1F1F1]'>
            <div className='head'>
              <h1 className='text-[2rem] font-[600]'>It Starts With You</h1>
            </div>
            <div className='body'>
              <p className='text-[14px] font-[400]'>
                Clinical research are a great way to learn more about your
                health status, treatment options, and even acess to medication
                at no cost to you. Our expertly trained medical staff is
                committed to providing the highest quality health care to
                patients. our patients always comes first. If you have any
                questions about participating in research, Call us at
                +1-300-555-0171 or send us a mail at georgia.young@example.com
              </p>
            </div>
            <div className='button'>
              <CustomButton
                className='bg-[#EE4036] hover:bg-[#F64740] px-[0.5rem] py-[0.6rem] font-[700] transition w-[6.89rem] flex items-center justify-center mt-3'
                textStyle='text-[#fff]'>
                <Link href={"/studies"} passHref={true}>
                  Join a Study
                </Link>
              </CustomButton>
            </div>
          </div>
        </div>
      </CustomSection>

      <CustomSection className='pb-[3rem] bg-[#F2F2F2] lg:relative'>
        <div className='welcomeSection w-[100%] h-[450px]'></div>
        <div className='h-[200px] hidden lg:block bg-[#F2F2F2]'></div>
        <div className='lg:absolute p-[1.5rem] lg:top-[45%] lg:left-[10%] w-full lg:w-[80%] bg-[#fff] h-full lg:h-[300px]'>
          <h2 className='text-[#430990] text-[2rem] mb-[0.6rem] font-[700]'>
            Welcome to Research Clinical
          </h2>
          <p className='mb-[0.5rem] text-[18px]'>
            At Research Clinical we are working hard to improve the quality of
            life and health of our patients. We conduct clinical research
            studies that help make groundbreaking medicine accessible so that
            people everywhere can benefit.
          </p>
          <p className='text-[18px]'>
            Research Clinical is affiliated with some of the area&apos;s best
            physicians; from family practitioners to specialists, we have a wide
            range of knowledge and experience. With our staff of skilled health
            care professionals, you can rest assured that we are committed to
            your safety and well-being every step of the way.
          </p>
          <CustomLink
            textStyle='flex items-center font-bold'
            className='cursor-pointer mt-4 text-[#EE4036]'>
            <span>View Current Studies</span>
            <span className='ml-2'>
              <BsArrowRight />
            </span>
          </CustomLink>
        </div>
      </CustomSection>

      <CustomSection className='bg-[#430990] flex flex-col lg:flex-row items-center p-[2rem] justify-between'>
        <div className='w-full lg:w-[20%] flex items-center justify-center'>
          <h2 className='text-[3rem] lg:text-[3.44rem] text-[#F1F1F1] font-[800]'>
            The <br className='hidden lg:block' />
            Why?
          </h2>
        </div>
        <div className='w-full lg:w-[70%]'>
          <p className='text-[18px] text-[#F1F1F1] font-[500]'>
            There are many reasons to participate in clinical research. Some
            participants join trials to help find new medical discoveries and
            drive healthcare advancement. Others participate to find alternative
            care options for their diagnosis. Regardless of the reason, we make
            joining a trial safe, easy, and convenient.
          </p>
          <CustomButton
            className='bg-[#EE4036] hover:bg-[#F64740] flex items-center justify-center px-[0.8rem] py-[0.8rem] mt-[3rem] w-[180px] font-[700] transition'
            textStyle='text-[#fff] text-[0.9rem]'>
            View Current Studies
          </CustomButton>
        </div>
      </CustomSection>
      <CustomSection className='bg-[#F2F2F2] flex items-center justify-center'>
        <div className='w-[100%] flex flex-col items-center justify-center'>
          <h2 className='font-bold text-[2.13rem] my-12'>
            Getting Started is Easy
          </h2>
          <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[1rem]'>
              {CardMockData.map((item, index) => (
                <Card key={index} src={item.url} buttonLabel={item.buttonLabel}>
                  {item.description}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </CustomSection>
      <CustomSection className='bg-[#F2F2F2] flex items-center justify-center pb-[3rem]'>
        <div className='w-[100%] flex flex-col items-center justify-center'>
          <h2 className='font-bold text-[2.13rem] my-12'>Upcoming Events</h2>
          <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[1rem]'>
              {CardMockData.map((item, index) => (
                <Card key={index} src={item.url} buttonLabel={item.buttonLabel}>
                  {item.description}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </CustomSection>
      <Footer />
    </Container>
  );
};

export default Home;
