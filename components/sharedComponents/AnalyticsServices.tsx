import Image from "next/image";
import DottedLine from "../ui/DottedLine";
import { AboutLayoutItemType } from "@/src/types/AboutUsTypes";

type AnalyticsProps = {
  analyticsData: AboutLayoutItemType | undefined;
};
const Analytics = ({ analyticsData }: AnalyticsProps) => {
  return (
    <div className=" bg-[#0D2234] py-16 relative flex justify-center ">
      <Image
        src="./lightGreenStyle.svg"
        alt="style"
        width={200}
        height={200}
        className="absolute top-0 right-0 "
      />
      <div>
        <div className="max-w-[980px] m-auto">
          <div className="text-[#20C897] lg:text-3xl md:text-2xl sm:text-xl text-center font-medium pb-5">
            {analyticsData?.heading}
          </div>
          <DottedLine />

          <div className="text-white py-5  text-center text-wrap">
            {analyticsData?.text}
          </div>
        </div>
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-5
           lg:gap-x-5 xl:gap-x-36 
         lg:gap-y-20  mt-5"
        >
          {analyticsData?.content?.map((item: any) => {
            return (
              <div
                className="w-[327px] h-[123px] bg-[#0F333E] flex items-center justify-start rounded-lg px-5 m-auto"
                key={item.id}
              >
                <Image
                  src={item.image?.url}
                  alt="ai"
                  width={10}
                  height={10}
                  className="w-10 text-white"
                />
                <hr className="w-12 h-0.5 bg-slate-400 block mx-5" />
                <div className="w-36 text-white font-medium text-lg ">
                  {item.heading}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
