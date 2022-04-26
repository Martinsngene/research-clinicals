import Container from "../../components/container/Container";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Accordion from "../../components/reusable/Accordion";
import CustomImage from "../../components/reusable/CustomImage";
import CustomSection from "../../components/reusable/CustomSection";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

const About = () => {
  return (
    <Container>
      <Navbar />
      <CustomSection className="h-[75vh] faqSection"> </CustomSection>

      <div className="flex items-center justify-center mt-[2rem]">
        <h1 className="text-[#430990] font-[800] text-[2rem] mr-[0.3rem]">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <CustomImage
          className="mt-[1rem]"
          src="/media/dot.png"
          width={20}
          height={20}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-[0.5rem] mb-[1rem]">
        <p className="text-[#001011] text-[1.25rem] font-[400]">
          Have Questions? We're here to help.
        </p>
        <div className="flex items-center justify-center border-b border-b-[#566467] mt-[2rem]">
          <RiSearchLine />
          <input
            className="ml-2 outline-none"
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <div className="bg-[rgba(236,_222,_254,_0.42)] h-[260px] mx-auto my-[4rem] w-[80%] flex flex-col items-center justify-center">
        <h3 className="text-[#001011] font-[700]">Can't find a solution?</h3>
        <p className="text-[#555555] text-[1rem] font-[400]">
          Send a mail about your problem, we'd love to hear from you.
        </p>
        <p className="text-[#430990] flex items-center justify-center text-[1rem]">
          <span>
            <AiOutlineMail />
          </span>
          <span>georgia.young@example.com</span>
        </p>
      </div>
      <Footer />
    </Container>
  );
};

export default About;