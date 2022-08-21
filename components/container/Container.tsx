import Image from "next/image";
import { useState } from "react";

interface LayoutPropsI {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: LayoutPropsI) => {
  const [showBot, setShowBot] = useState(false);
  return (
    <div className={`${className}`}>
      {children}
      <div className="chatbot fixed bottom-[5%] right-[2%]">
        {showBot ? (
          <div>
            <iframe
              allow="microphone;"
              width="520"
              height="520"
              src="https://console.dialogflow.com/api-client/demo/embedded/cbd6db21-1e8a-43fe-a517-7805bf9aa6eb"
            ></iframe>
            <button
              onClick={() => setShowBot(false)}
              className="fixed bottom-[77%] right-[5%] bg-[transparent] z-50 text-[#fff] text-[2rem]"
            >
              X
            </button>
          </div>
        ) : (
          <div
            onClick={() => setShowBot(true)}
            className="bg-[#1B0538] w-[125px] h-[125px] rounded-full flex justify-center items-center"
          >
            <Image
              width={100}
              height={100}
              className="rounded-full"
              src="/media/bot.jpg"
              alt="chatbot figure"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
