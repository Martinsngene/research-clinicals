import Link from "next/link";
import CustomButton from "../reusable/CustomButton";
import CustomImage from "../reusable/CustomImage";
import { NavbarSchema } from "./NavbarSchema";

const Navbar = () => {
  const navStyles = "";
  return (
    <div className="bg-[#fff] h-[4rem] fixed z-10 w-[100%] flex items-center justify-between px-4">
      <div className="logo pl-[1rem] flex items-center justify-center">
        <CustomImage src="/media/logo.png" width={80} height={50} />
      </div>
      <ul className="flex items-center justify-between w-[50%]">
        {NavbarSchema.map((item, index) => (
          <li className="font-[400] text-[#001011] text-[14px]" key={index}>
            <Link href={`${item.route}`} passHref={true}>
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <CustomButton
            className="bg-[#430990] hover:bg-[#F64740] px-[1.3rem] py-[0.55rem] font-[700] transition"
            textStyle="text-[#fff]"
          >
            <Link href={"/studies"} passHref={true}>
              Join a Study
            </Link>
          </CustomButton>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
