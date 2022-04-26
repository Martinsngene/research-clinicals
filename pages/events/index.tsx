import Container from "../../components/container/Container";
import { EventsMockData } from "../../components/mockdata/MockData";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import CustomParallaxSecion from "../../components/reusable/CustomParallaxSecion";
import CustomSection from "../../components/reusable/CustomSection";
import CustomSectionHeader from "../../components/reusable/CustomSectionHeader";

const Events = () => {
  return (
    <Container>
      <Navbar />
      <CustomSection className="h-[75vh] eventSection"> </CustomSection>
      <CustomSection className="bg-[#F2F2F2] flex flex-col items-center justify-center pt-[3rem]">
        <CustomSectionHeader
          headerText="JOIN OUR EVENTS"
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
      <CustomSection className="w-full flex flex-col items-center">
        {EventsMockData.map((event, index) => (
          <CustomParallaxSecion
            key={index}
            header={event.header}
            img={event.imgUrl}
          >
            {event.body}
          </CustomParallaxSecion>
        ))}
      </CustomSection>
      <Footer />
    </Container>
  );
};

export default Events;
