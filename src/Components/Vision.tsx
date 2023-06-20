import React, { FC, Fragment } from "react";

const Vision: FC<{}> = () => {
    return (
        <Fragment>
            <div className="text-[#ffffff30] border-b-[1px] border-[#383838]">
                <div className="flex items-center text-center w-[312px] h-[190px] rounded-[8px] mx-[16px] my-[14px] border-[1px] border-[#333333] visition-container">
                    <div className="flex flex-col gap-2 items-center content-center text-center w-4/5 mx-auto">
                        <p className="w-[158px] text-[16px] text-[#ffffff] w-full">Upgrade to get access to Vision mode</p>
                        <p className="w-[240px] text-[12px] text-[#ffffff7a] w-full">Upgrade now for unlimited generations and access to all modes & features.</p>
                        <button className="text-[14px] w-[162px] h-[32px] bg-[#81e885] rounded-[8px] text-[#0a0a0a]">Get unlimited access</button>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};
export default Vision;
