import React from "react";
interface Props {
  name: string;
  isDisabled?: boolean;
  placeholder?: string;
}

const TextArea: React.FC<Props> = ({
  name,

  isDisabled = false,
  placeholder,
  ...props
}) => {
  return (
    <>
      <textarea
        className={`placeholder-gray-600 border-2 border-textGray w-full h-16 md:h-24 xl:h-20 p-2 pr-9 shadow-sm rounded-md text-textLightBlack text-xs md:text-sm xl:text-xs font-normal focus:outline-none focus:border-primaryGreen`}
        {...props}
        disabled={isDisabled}
        placeholder={placeholder}
        autoComplete="off"
      />
    </>
  );
};

export default TextArea;
