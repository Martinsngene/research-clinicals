/** @format */

import CustomImage from "./CustomImage";
import CustomSection from "./CustomSection";

interface HeaderPropsI {
  children?: string;
  IconWidth: number;
  IconHeight: number;
  IconSrc: string;
  textAlign: string;
  headerText: string;
}

const CustomSectionHeader = ({
  children,
  IconWidth,
  IconHeight,
  IconSrc,
  textAlign,
  headerText,
}: HeaderPropsI) => {
  return (
    <CustomSection className='bg-white lg:bg-[#F2F2F2] flex flex-col items-center justify-center'>
      <div className='w-full lg:w-[80%] flex flex-col items-center justify-center mb-8 lg:mb-[7rem]'>
        <div className='flex items-center justify-center'>
          <h1 className='text-[#430990] font-[800] text-[1.5rem] lg:text-[2rem] text-center mr-[0.3rem]'>
            {headerText}
          </h1>
          <CustomImage
            className='mt-[1rem] hidden lg:block'
            src={IconSrc}
            width={IconWidth}
            height={IconHeight}
          />
        </div>
        <div>
          <p
            className={`text-[1rem] lg:text-[1.4rem] px-4 lg:px-0 text-${textAlign} font-[400]`}>
            {children}
          </p>
        </div>
      </div>
    </CustomSection>
  );
};

export default CustomSectionHeader;
