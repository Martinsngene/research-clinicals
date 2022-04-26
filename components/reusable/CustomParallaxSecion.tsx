import Link from "next/link";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";

interface CustomParallaxSectionI {
  img: string;
  header: string;
  onLoad?: any;
  children: React.ReactNode;
}

const CustomParallaxSecion = ({
  img,
  header,
  children,
}: CustomParallaxSectionI) => {
  return (
    <div className="w-full bg-[#ECE6F4] flex justify-between items-center odd:flex-row-reverse">
      <CustomImage
        className="itemOne w-[50%] h-full flex items-center justify-center"
        src={img}
        width={710}
        height={545}
      />

      <div className="itemTwo bg-[#ECE6F4] w-[50%] px-12">
        <div className="head">
          <h1 className="text-[2.13rem] font-[600] text-[#001011]">{header}</h1>
        </div>
        <div className="body">
          <p className="text-[1.25rem] font-[400] text-[#001011]">{children}</p>
        </div>
        <div className="button">
          <CustomButton
            className="bg-[#430990] hover:bg-[#F64740] px-[0.5rem] py-[0.6rem] font-[700] transition w-[6.89rem] flex items-center justify-center "
            textStyle="text-[#fff]"
          >
            <Link href={`/studies/study`} passHref={true}>
              Read more
            </Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CustomParallaxSecion;
