import React from "react";

interface CheckboxProps {
    isChecked: boolean;
    onToggle: () => void;
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, onToggle, label }) => {

    const baseStyle = "cursor-pointer p-2 m-2";
    const selectedStyle = isChecked ? "bg-[#457999] bg-opacity-50 hover:bg-opacity-75" : "hover:bg-[#457999] hover:bg-opacity-25";

    return (
        <div onClick={onToggle} className={`${baseStyle} ${selectedStyle}`}>
            <div className="w-20 text-center text-white">{label}</div>
        </div>
    );
};

export default Checkbox;
