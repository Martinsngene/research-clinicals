import { Disclosure } from "@headlessui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

const Accordion = () => {
  return (
    <div className="w-full px-4 pt-8">
      <div className="w-full mb-[1rem] max-w-md p-2 mx-auto bg-white border-b border-b-[#566467] ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-[1rem] font-medium text-left text-[#000] bg-[#fff]">
                <h3 className="text-[#001011] font-[700]">
                  This is my first question?
                </h3>
                <span className="text-[1.2rem]">
                  {open ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2">
                <p className="text-sm text-[#2D2634]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Accordion;
