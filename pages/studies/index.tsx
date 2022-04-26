import Container from "../../components/container/Container";
import { PatientsMockData } from "../../components/mockdata/MockData";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import CustomImage from "../../components/reusable/CustomImage";
import CustomParallaxSecion from "../../components/reusable/CustomParallaxSecion";
import CustomSection from "../../components/reusable/CustomSection";
import CustomSectionHeader from "../../components/reusable/CustomSectionHeader";

const FindStudy = () => {
  return (
    <Container>
      <Navbar />
      <CustomSection className="h-[75vh] studySection"> </CustomSection>
      <CustomSection className="bg-[#F2F2F2] flex flex-col items-center justify-center pt-[3rem]">
        <CustomSectionHeader
          headerText="FIND A STUDY"
          IconWidth={20}
          IconSrc="/media/dot.png"
          IconHeight={20}
          textAlign="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </CustomSectionHeader>
      </CustomSection>
      <CustomSection className="w-full flex flex-col items-center justify-center">
        {PatientsMockData.map((patient, index) => (
          <CustomParallaxSecion
            key={index}
            header={patient.header}
            img={patient.imgUrl}
          >
            {patient.body}
          </CustomParallaxSecion>
        ))}
      </CustomSection>
      <Footer />
    </Container>
  );
};

export default FindStudy;
