/** @format */

import Container from "../../components/container/Container";
import Accordion from "../../components/reusable/Accordion";
import CustomImage from "../../components/reusable/CustomImage";
import CustomSection from "../../components/reusable/CustomSection";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

const About = () => {
  return (
    <Container>
      <CustomSection className='h-[50vh] lg:h-[75vh] faqSection'>
        {" "}
      </CustomSection>

      <div className='flex items-center justify-center mt-[2rem]'>
        <h1 className='text-[#430990] font-[800] text-[1.5rem] text-center lg:text-[2rem] mr-[0.3rem]'>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <CustomImage
          className='mt-[1rem] hidden lg:block'
          src='/media/dot.png'
          width={20}
          height={20}
        />
      </div>
      <div className='flex flex-col items-center justify-center mt-[0.5rem] mb-[1rem]'>
        <p className='text-[#001011] text-[1.25rem] font-[400]'>
          Have Questions? We&apos;re here to help.
        </p>
        <div className='flex items-center justify-center border-b border-b-[#566467] mt-[2rem]'>
          <RiSearchLine />
          <input
            className='ml-2 outline-none'
            placeholder='Search'
            type='text'
          />
        </div>
      </div>
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <div className='bg-[rgba(236,_222,_254,_0.42)] h-[260px] mx-auto my-[4rem] w-[80%] flex flex-col items-center justify-center'>
        <h3 className='text-[#001011] font-[700]'>
          Can&apos;t find a solution?
        </h3>
        <p className='text-[#555555] text-center text-[1rem] font-[400]'>
          Send a mail about your problem, we&apos;d love to hear from you.
        </p>
        <p className='text-[#430990] flex items-center justify-center text-[1rem]'>
          <span>
            <AiOutlineMail />
          </span>
          <span>georgia.young@example.com</span>
        </p>
      </div>
    </Container>
  );
};

export default About;
