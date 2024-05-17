import React from "react";

const About = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="">
          <h1 className="text-lg font-bold mb-4 pl-44">About</h1>
          <div className="flex px-10 bg-gradient-to-r from-[#FFFFFF] via-[#f1efef] to-[#FFFFFF]">
            <div className="space-y-3 px-10 flex flex-col bg-gradient-to-r from-[#FFFFFF] via-[#f1efef] to-[#FFFFFF]">
              <p>Height</p>
              <p>Weight</p>
              <p>Abilities</p>
            </div>
            <div className="space-y-3 px-10 flex flex-col bg-gradient-to-r from-[#FFFFFF] via-[#f1efef] to-[#FFFFFF]">
              <p>1.0m</p>
              <p>13.0kg</p>
              <div className="flex">
                <ul className="list-disc pl-5">
                  <li className="pb-1">overgrow,</li>
                  <li>chlorophyll</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
