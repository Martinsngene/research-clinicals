import Link from "next/link";
import Container from "../../../components/container/Container";
import Footer from "../../../components/navigation/Footer";
import Navbar from "../../../components/navigation/Navbar";
import CustomButton from "../../../components/reusable/CustomButton";
import CustomImage from "../../../components/reusable/CustomImage";
import CustomSection from "../../../components/reusable/CustomSection";
import CustomSectionHeader from "../../../components/reusable/CustomSectionHeader";

const Study = () => {
  return (
    <Container>
      <Navbar />
      <CustomSection className="h-[75vh] studySection"> </CustomSection>
      <CustomSection className="bg-[#F2F2F2] flex flex-col items-center justify-center pt-[3rem]">
        <CustomSectionHeader
          headerText="COVID-19 RESEARCH"
          IconWidth={20}
          IconSrc="/media/dot.png"
          IconHeight={20}
          textAlign="left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </CustomSectionHeader>
      </CustomSection>
      <CustomSection className="bg-[#F2F2F2] pb-[10rem] w-[100%] flex flex-col items-center justify-center">
        <CustomImage
          src="/media/recCovid.png"
          className="w-[80%]"
          width={1180}
          height={545}
        />
        <CustomSection className="flex flex-col items-center justify-center mt-[7rem]">
          <div className="w-[80%] flex items-center justify-center mb-[5rem]">
            <p className="text-[1.4rem] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-[80%] flex items-center justify-center mb-[5rem]">
            <p className="text-[1.4rem] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="w-[80%] flex items-center justify-center mb-[5rem]">
            <p className="text-[1.4rem] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-[80%] flex flex-col justify-center">
            <p className="text-[1.4rem] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <CustomButton
              className="bg-[#0C0D27] hover:bg-[#F64740] px-[0.5rem] py-[0.6rem] font-[700] transition w-[6.89rem] flex items-center justify-center mt-[2rem]"
              textStyle="text-[#fff]"
            >
              <Link href={"/study"} passHref={true}>
                Join Study
              </Link>
            </CustomButton>
          </div>
        </CustomSection>
      </CustomSection>

      <Footer />
    </Container>
  );
};

export default Study;
