import React, { FC, KeyboardEventHandler, useState } from "react";
import LinkIcon from '../assets/link-icon.svg';

interface AutoCompleteProps {
    pholder: string;
    data: string[];
    onSelected: (arg: string) => void;
    onChange: (arg: string) => void;
}

const AutoComplete: FC<AutoCompleteProps> = ({
    pholder,
    data,
    onSelected,
    onChange
}) => {
    const [suggestions, setSugesstions] = useState<string[]>([]);
    const [isHideSuggs, setIsHideSuggs] = useState<boolean>(false);
    const [selectedVal, setSelectedVal] = useState<string>("");

    const handler = (e: any) => {
        setSugesstions(data.filter(i => i.startsWith(e.target.value)));
    };

    const handleChange = (e: any) => {
        const input = e.target.value;
        setIsHideSuggs(false);
        setSelectedVal(input);
        onChange(input);
    };

    const hideSuggs = (value: string) => {
        onSelected(value);
        setSelectedVal(value);
        setIsHideSuggs(true);
    };

    return (
        <div className="sugesstion-auto flex-1">
            <div className="flex items-center rounded-lg bg-[#2D2D2F] h-8 py-[6px] px-2 gap-2 flex-1">
                <img src={LinkIcon} alt="link" className="w-5 h-5 flex-none" />
                <input
                    placeholder={pholder}
                    type="search"
                    value={selectedVal}
                    onChange={handleChange}
                    onKeyUp={handler}
                    className="border-none bg-transparent font-normal text-white text-[13px] flex-1 outline-none"
                />
            </div>

            <div
                className="suggestions"
                style={{ display: isHideSuggs ? "none" : "block" }}
            >
                {suggestions.map((item, idx) => (
                    <div
                        key={"" + item + idx}
                        onClick={(event) => {
                            event.stopPropagation();
                            hideSuggs(item);
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AutoComplete