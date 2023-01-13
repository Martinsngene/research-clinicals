/** @format */

import Container from "../../components/container/Container";
import { PatientsMockData } from "../../components/mockdata/MockData";
import CustomImage from "../../components/reusable/CustomImage";
import CustomParallaxSecion from "../../components/reusable/CustomParallaxSecion";
import CustomSection from "../../components/reusable/CustomSection";
import CustomSectionHeader from "../../components/reusable/CustomSectionHeader";

const Patients = () => {
  return (
    <Container>
      <CustomSection className='h-[50vh] lg:h-[75vh] patientSection'>
        {" "}
      </CustomSection>
      <CustomSection className='bg-white lg:bg-[#F2F2F2] flex flex-col items-center justify-center pt-[3rem]'>
        <CustomSectionHeader
          headerText='LET US TELL YOU WHY'
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
          <CustomImage src='/media/pictureSix.png' width={580} height={505} />
          <CustomImage
            src='/media/pictureSeven.png'
            className='ml-10'
            width={580}
            height={456}
          />
        </div>
        <div>
          <h2 className='mb-[2rem] text-[1.5rem] lg:text-[2rem] font-[700]'>
            Find a Study to Join
          </h2>
        </div>
      </CustomSection>

      <CustomSection className='w-full flex flex-col items-center justify-center'>
        {PatientsMockData.map((patient, index) => (
          <CustomParallaxSecion
            key={index}
            header={patient.header}
            img={patient.imgUrl}>
            {patient.body}
          </CustomParallaxSecion>
        ))}
      </CustomSection>
    </Container>
  );
};

export default Patients;
