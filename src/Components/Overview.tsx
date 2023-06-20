import React, { FC, Fragment, useState } from "react";
import AddIcon from '../assets/add-icon.svg';
import ProjectIcon from '../assets/project-icon.svg';
import FoldersFillIcon from '../assets/folders-fill-icon.svg';
import LinkIcon from '../assets/link-icon.svg';
import MoreFillIcon from '../assets/more-fill-icon.svg';
import TerminalBoxFillIcon from '../assets/terminal-box-fill-icon.svg';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./dropdown-menu"
import AutoComplete from "./AutoComplete";

const Overview: FC<{}> = () => {
    const [active, setActive] = useState(0);

    const data = ["java", "javascript", "php", "c#", "go", "dart"];
    const getSelectedVal = (value: string) => {
        console.log(value);
    };

    const getChanges = (value: string) => {
        console.log(value);
    };

    return (
        <Fragment>
            <div className="opacity-[0.45] hover:opacity-100 text-white border-b-[1px] border-[#383838]">
                <div className="m-[18px]">
                    <p className="mb-6 flex items-center gap-[6px]">
                        <img src={ProjectIcon} alt="project" className="w-5 h-5 flex-none" />
                        Project
                    </p>
                    <div className="flex items-center gap-2">
                        <AutoComplete
                            pholder="Associated with ‘Project Name’"
                            data={data}
                            onSelected={getSelectedVal}
                            onChange={getChanges}
                        />
                        <button className="rounded-lg bg-[#2D2D2F] w-8 h-8 flex items-center justify-center flex-none">
                            <img src={AddIcon} alt="add" className="w-5 h-5 flex-none" />
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${active == 1 ? 'opacity-100' : 'opacity-[0.45]'} hover:opacity-100 text-white border-b-[1px] border-[#383838]`}>
                <div className="m-[18px] flex justify-between items-center">
                    <div className="flex items-center flex-1">
                        <p className="flex gap-2 items-center">
                            <img src={FoldersFillIcon} alt="folders fill" className="w-5 h-5 flex-none" />
                            Packages
                        </p>
                        <span className="mx-[6px] bg-[#2d2d2f] w-[18px] h-[18px] text-sm text-center font-medium rounded-[5px] flex items-center justify-center">2</span>
                    </div>
                    <button className="bg-transparent w-8 h-8 flex items-center justify-center rounded-lg">
                        <img src={AddIcon} alt="adds" className="w-5 h-5 flex-none" />
                    </button>
                    <DropdownMenu onOpenChange={(open) => {
                        if (open) {
                            setActive(1);
                        } else {
                            setActive(0);
                        }
                    }}>
                        <DropdownMenuTrigger>
                            <button className="bg-[#2D2D2F] w-8 h-8 flex items-center justify-center rounded-lg outline-none">
                                <img src={MoreFillIcon} alt="more" className="w-5 h-5 flex-none" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="bottom" align="end">
                            <DropdownMenuLabel className="p-4 border-b text-white border-b-[#424242]">My Account</DropdownMenuLabel>
                            <div className="h-[336px]"></div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className={`${active == 2 ? 'opacity-100' : 'opacity-[0.45]'} hover:opacity-100 text-white border-b-[1px] border-[#383838]`}>
                <div className="m-[18px] flex justify-between items-center">
                    <p className="flex gap-2 items-center flex-1">
                        <img src={TerminalBoxFillIcon} alt="terminal box" className="w-5 h-5 flex-none" />
                        Current Snipet
                    </p>
                    <DropdownMenu onOpenChange={(open) => {
                        if (open) {
                            setActive(2);
                        } else {
                            setActive(0);
                        }
                    }}>
                        <DropdownMenuTrigger>
                            <button className="bg-[#2D2D2F] w-8 h-8 flex items-center justify-center rounded-lg outline-none">
                                <img src={MoreFillIcon} alt="more" className="w-5 h-5 flex-none" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="bottom" align="end">
                            <DropdownMenuLabel className="p-4 border-b text-white border-b-[#424242]">My Account</DropdownMenuLabel>
                            <div className="h-[336px]"></div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>


        </Fragment>
    );
};
export default Overview;
